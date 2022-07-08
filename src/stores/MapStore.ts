import { action, computed, makeObservable, observable } from 'mobx';
import RootStore from './RootStore';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Sketch from '@arcgis/core/widgets/Sketch';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import Polygon from '@arcgis/core/geometry/Polygon';
import mapStoreUtils from './mapStoreUtils';

const SPATIAL_REFERENCE_WELL_KNOWN_ID = 102100;
/**
 * MapStore represents the mobx store for the Map Component to consume.
 * It is exposed through the custom context hook "useStore"
 *
 * @property rootStore
 * @property map
 * @property noFlyLayer
 * @property sketchLayer
 * @property sketch
 * @property sketchState
 * @property exampleObservableState
 */
export default class MapStore {
  //Root
  rootStore: RootStore;
  //arcgis
  map!: __esri.Map;
  noFlyLayer!: __esri.GraphicsLayer;
  sketchLayer!: __esri.GraphicsLayer;
  sketch!: __esri.Sketch;
  //UI
  sketchState!: string;
  intersectingAreas: number[] = observable.array();

  /**
   * Create a new instance of MapStore given a rootStore
   * @param rootStore
   */
  constructor(rootStore: RootStore) {
    const annotations = {
      sketchState: observable,
      setSketchState: action,
      intersectingAreas: observable,
      addIntersectingArea: action,
      getIntersectingAreas: computed,
    };
    makeObservable(this, annotations);
    this.rootStore = rootStore;
    this.setSketchState('idle');
  }

  /**
   * Initialize arcgis properties map!, sketchLayer!, noFlyLayer!, and sketch! widget
   * @param container The id or node representing the DOM element containing the view.
   */
  constructMap(container: string) {
    this.constructNoFlyLayer();
    this.constructSketchLayer();
    // Create the map and add the graphics layers
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html
    this.map = new ArcGISMap({
      basemap: 'streets-vector',
      layers: [this.noFlyLayer, this.sketchLayer],
    });

    this.prepareMapView(container);
  }

  /**
   * Set the Sketch State
   * @param state
   */
  setSketchState(state: string) {
    this.sketchState = state;
  }

  /**
   * Append the area to the intersecting area array
   * @param area area to add to array
   */
  addIntersectingArea(area: number) {
    observable(this.intersectingAreas).push(area);
  }

  removeIntersectingArea(area: number) {
    observable(this.intersectingAreas).remove(area);
  }

  /**
   * expose observable array as slice
   * @return the current intersecting area array
   */
  get getIntersectingAreas(): number[] {
    return this.intersectingAreas.slice();
  }

  /**
   * Initialize the no fly layer
   */
  constructNoFlyLayer() {
    this.noFlyLayer = new GraphicsLayer();
    //auto cast as simple-fill
    const symbol = {
      type: 'simple-fill',
      color: [51, 51, 204, 0.2],
      style: 'solid',
      outline: {
        color: 'white',
        width: 2,
      },
    };

    // Construct map graphic
    this.noFlyLayer.add(
      // This is the NO_FLY area graphic supplied to us by the FAA
      new Graphic({
        geometry: new Polygon({
          spatialReference: { wkid: SPATIAL_REFERENCE_WELL_KNOWN_ID }, //This indicates the projected or geographic coordinate system used to locate geographic features in the map (mapProjection function)
          rings: [
            [
              [-9278977.502393615, 5196972.662366206],
              [-9278404.224681476, 5197240.191965203],
              [-9274505.936238931, 5195673.232885358],
              [-9275518.726863708, 5190055.1113064],
              [-9278881.956108259, 5189061.429938688],
              [-9280869.318843672, 5188660.135540191],
              [-9282646.479751302, 5192481.986954449],
              [-9278977.502393615, 5196972.662366206],
            ],
          ],
        }),
        symbol,
      })
    );
  }

  /**
   * Create the sketch layer
   */
  constructSketchLayer() {
    this.sketchLayer = new GraphicsLayer();
  }

  /**
   * Prepare the map view for display
   * @param container The id or node representing the DOM element containing the view.
   */
  prepareMapView(container: string) {
    const view = new MapView({
      map: this.map,
      container,
      center: [-83.35447311401367, 42.23982914405], // Longitude, latitude
      zoom: 11,
    });

    view.when(() => {
      this.sketch = new Sketch({
        layer: this.sketchLayer,
        view,
        visibleElements: {
          createTools: { point: false, polygon: false, polyline: false },
          selectionTools: { 'lasso-selection': false, 'rectangle-selection': false },
          settingsMenu: false,
          undoRedoMenu: false,
        },
        creationMode: 'update', // graphic will be selected as soon as it is created
      });
      view.ui.add(this.sketch, 'top-right');

      this.sketch.on('create', this.sketchCreate);
      this.sketch.on('delete', this.sketchDelete);
    });
  }

  /**
   * Add sketch based on event
   * @param event SketchCreateEvent interface event
   * @returns exit
   */
  sketchCreate = (event: __esri.SketchCreateEvent) => {
    this.setSketchState(event.state);
    if (event.state !== 'complete') return;

    const inputGraphic = event.graphic;
    const noFlyLayerGraphic = this.noFlyLayer.graphics.getItemAt(0);

    // THERE ARE 3 STEPS TO SATISFYING THE BASE REQUIREMENTS FOR THE CHALLENGE

    // STEP 1: determine if the sketch's graphic intersects with the graphic in the noFlyLayer
    if (mapStoreUtils.doesIntersect(inputGraphic, noFlyLayerGraphic)) {
      // STEP 2: if it intersects, compute the area of the intersection and display it
      const intersectionGeometry = mapStoreUtils.computeIntersectionGeometry(inputGraphic, noFlyLayerGraphic);
      const intersectionArea = mapStoreUtils.computeIntersectionArea(intersectionGeometry as Polygon);
      this.addIntersectingArea(intersectionArea);

      // autocasts as new SimpleFillSymbol()
      const symbol = {
        type: 'simple-fill',
        color: [255, 192, 203, 0.8],
        style: 'solid',
        outline: {
          color: 'red',
          width: 2,
        },
      };

      // STEP 3: create a new graphic with any possible intersection, and display it on the map
      const intersectGraphic = new Graphic({
        geometry: intersectionGeometry as Polygon,
        symbol,
      });
      this.sketchLayer.graphics.add(intersectGraphic);
    } else {
      console.info('Input Graphic does not Intersect any Graphics in the NoFlyLayer');
    }
  };

  /**
   * Delete the sketch based on the event
   * @param event SketchDelete event
   * @return exit
   */
  sketchDelete = (event: __esri.SketchDeleteEvent) => {
    //TODO delete appropriately instead of removing all
    console.log('sketchDelete() -> removeAll()', event);
    this.sketchLayer.removeAll();
  };

  cleanup() {
    // Todo, remove any listeners
    this.sketch.destroy();
    this.setSketchState('idle');
  }
}

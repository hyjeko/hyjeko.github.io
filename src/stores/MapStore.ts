import { action, makeObservable, observable } from 'mobx';
import RootStore from './RootStore';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Sketch from '@arcgis/core/widgets/Sketch';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import Polygon from '@arcgis/core/geometry/Polygon';
//TODO: unused import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';

const SPATIAL_REFERENCE_WELL_KNOWN_ID = 102100
/**
 * MapStore represents the mobx store for the Map Component to consume. 
 * It is exposed through the custom context hook "useStore"
 * 
 * @field rootStore
 * @field map
 * @field noFlyLayer
 * @field sketchLayer
 * @field sketch
 * @field sketchState
 * @field exampleObservableState
 */
export default class MapStore {
  //Root
  rootStore: RootStore;
  //arcgis
  map!: __esri.Map;
  noFlyLayer!: __esri.GraphicsLayer;
  sketchLayer!: __esri.GraphicsLayer;
  sketch!: __esri.Sketch;
  //Customs
  sketchState!: string; //sketchState is a custom observable property
  intersectingAreas!: number[]; //exploration example 
  // ^
  // Notice this '!' modifier.
  // This is the "definite assignment assertion" 
  // the definite assignment assertion operator is the dual (cousin) of the non-null assertion operator (in which expressions are post-fixed with a !)

  /**
   * Create a new instance of MapStore given a rootStore
   * @param rootStore 
   */
  constructor(rootStore: RootStore) {
    // HINT: you can add additional observable properties to this class
    // https://mobx.js.org/observable-state.html

    const annotations = {
      sketchState: observable, 
      setSketchState: action,
      intersectingAreas: observable,
      setIntersectingAreas: action
    };
    
    //makeObservable(target, annotations?, options?)
    makeObservable(this, annotations);

    //observable(source, overrides?, options?

    //makeAutoObservable(target, overrides?, options?)

    this.rootStore = rootStore;
    this.setSketchState('idle');
    this.setIntersectingAreas(observable([]));
  }

  /**
   * Set the Sketch State
   * @param state 
   */
  setSketchState(state: string) {
    console.log("setSketchState(state): ", state);
    this.sketchState = state;
  }

  /**
   * Set the example observable state
   */
   setIntersectingAreas(state: number[]) {
    this.intersectingAreas = state
   }


  /**
   * Create a new mapStore by doing the following
   * 1. sketchLayer = new GraphicsLayer
   * 2. noFlyLayer = new GraphicsLayer
   * 3. noFlyLayer add new Graphic based on symbol and FAA data
   * 4. map = new ArcGISMap create map and add sketchLayer and noFlyLayer
   * 5. view = new MapView create new map view with options
   * 6. sketch = new Sketch when view is ready use callback function to add sketch to view
   * @param container 
   */
  constructMap(container: string) {
    this.sketchLayer = new GraphicsLayer(); //arcgis
    this.noFlyLayer = new GraphicsLayer(); //arcgis

    // https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleFillSymbol.html
    /** SimpleFillSymbol is used for rendering 2D polygons in either a MapView or a SceneView.
     * It can be filled with a solid color, or a pattern. 
     * In addition, the symbol can have an optional outline, which is defined by a SimpleLineSymbol. */

    //Give some style to the map graphic below
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
    // https://developers.arcgis.com/j avascript/latest/api-reference/esri-Graphic.html
    this.noFlyLayer.add(
      // This is the NO_FLY area graphic supplied to us by the FAA
      // Opportunity to make this data RESTful
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

    // Create the map and add the graphics layer
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html
    this.map = new ArcGISMap({
      basemap: 'streets-vector',
      layers: [this.noFlyLayer, this.sketchLayer],
    });

    // Set the map view, including location and zoom level
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
    const view = new MapView({
      map: this.map,
      container,
      center: [-83.35447311401367, 42.23982914405], // Longitude, latitude
      zoom: 11,
    });

    // When the view finishes loading, add the sketch widget
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html
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
    });
  }//END constructMap

  /**
   * Async function to create sketches. 
   * @param event SketchCreateEvent interface event
   * @returns used to exit
   */
  sketchCreate = async (event: __esri.SketchCreateEvent) => {//HINT: why async if no await?
    console.log("------------- sketchCreate = async (event: __esri.SketchCreateEvent) ------------------------")
    console.log("sketchCrate() invoked with event: ", event);
    console.log("calling this.setSketchState(event.state): ", event.state);
    this.setSketchState(event.state); //sync the event state with the store state

    //guard if the state is incomplete
    if (event.state !== 'complete') {
      console.warn("sketchCreate() invoked with event.state !== 'complete: '", event.state)
      return
    }

    // HINT: the event has a graphic property which has a geometry property
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html
    const inputGraphic = event.graphic;
    console.log("eventGraphic: ", event.graphic)

    // HINT: you can use getItemAt to access one of the graphics of the noFlyLayer.
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#getItemAt
    const noFlyLayerGraphic = this.noFlyLayer.graphics.getItemAt(0);
    console.log("noFlyLayerGraphic: ", noFlyLayerGraphic);

    // THERE ARE 4 STEPS TO SATISFYING THE BASE REQUIREMENTS FOR THE CHALLENGE
    // STEP 1: determine if the sketch's graphic intersects with the graphic in the noFlyLayer
    if (doesIntersect(inputGraphic, noFlyLayerGraphic)) {
      console.info("Found intersecting input graphic with ", inputGraphic, noFlyLayerGraphic);

      // STEP 2: if it intersects, compute the area of the intersection, and display it
      const intersectionGeometry = computeIntersectionGeometry(inputGraphic, noFlyLayerGraphic);
      const intersectionArea = computeIntersectionArea(intersectionGeometry as Polygon);

      console.log("intersectionGeometry", intersectionGeometry);
      console.log("intersectionArea", intersectionArea);
      const updatedIntersectingArea = [...this.intersectingAreas, intersectionArea];
      this.setIntersectingAreas(updatedIntersectingArea);

      // HINT: you can provide a symbol when creating this graphic to change its appearance
      // https://developers.arcgis.com/javascript/latest/sample-code/playground/live/index.html#/config=symbols/2d/SimpleFillSymbol.json
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
      // HINT: you can create a graphic using a Graphic object
      // https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#symbol
      const intersectGraphic = new Graphic({
        geometry: intersectionGeometry as Polygon,//needs polygon
        symbol,//needs symbol
      })

      // STEP 4: display new graphic on map
      // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#add
      this.sketchLayer.graphics.add(intersectGraphic);
    } else {
      console.info("Input Graphic does not Intersect any Graphics in the NoFlyLayer")
    }

    function doesIntersect(graphicOne: Graphic, graphicTwo: Graphic): boolean {
      return geometryEngine.intersects(graphicOne.geometry, graphicTwo.geometry);
    }

    function computeIntersectionGeometry(graphicOne: Graphic, graphicTwo: Graphic): __esri.Geometry | __esri.Geometry[] {
      // HINT: you can use the geometry engine to calculate the intersection of two geometries
      // https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html#intersect
      return geometryEngine.intersect(graphicOne.geometry, graphicTwo.geometry)
    }

    function computeIntersectionArea(polygon:  Polygon): number {
      // HINT: you can use the geometry engine to calculate area of a polygon
      // https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html#geodesicArea
      return geometryEngine.geodesicArea(polygon, "square-miles");
    }
  };

  cleanup() {
    // Todo, remove any listeners
    this.sketch.destroy();
    this.setSketchState('idle');
  }
}

import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import Polygon from '@arcgis/core/geometry/Polygon';
import Graphic from '@arcgis/core/Graphic';

function doesIntersect(graphicOne: Graphic, graphicTwo: Graphic): boolean {
  return geometryEngine.intersects(graphicOne.geometry, graphicTwo.geometry);
}

function computeIntersectionGeometry(graphicOne: Graphic, graphicTwo: Graphic): __esri.Geometry | __esri.Geometry[] {
  return geometryEngine.intersect(graphicOne.geometry, graphicTwo.geometry);
}

function computeIntersectionArea(polygon: Polygon): number {
  return geometryEngine.geodesicArea(polygon, 'square-miles');
}

export default {
  doesIntersect,
  computeIntersectionGeometry,
  computeIntersectionArea,
};

import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import Polygon from '@arcgis/core/geometry/Polygon';
import Graphic from '@arcgis/core/Graphic';

function doesIntersect(graphicOne: Graphic, graphicTwo: Graphic): boolean {
  return geometryEngine.intersects(graphicOne.geometry, graphicTwo.geometry);
}

function computeIntersectionGeometry(graphicOne: Graphic, graphicTwo: Graphic): __esri.Geometry | __esri.Geometry[] {
  // HINT: you can use the geometry engine to calculate the intersection of two geometries
  // https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html#intersect
  return geometryEngine.intersect(graphicOne.geometry, graphicTwo.geometry);
}

function computeIntersectionArea(polygon: Polygon): number {
  // HINT: you can use the geometry engine to calculate area of a polygon
  // https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html#geodesicArea
  return geometryEngine.geodesicArea(polygon, 'square-miles');
}

export default {
  doesIntersect,
  computeIntersectionGeometry,
  computeIntersectionArea,
};

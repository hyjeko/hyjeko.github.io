const SPATIAL_REFERENCE_WELL_KNOWN_ID = 102100;

/**
 * Standard http browser fetch
 * @param resource The resource to fetch
 * @param options The init options for the fetch request
 * @returns A promise containing the Response value
 */
async function dataFetch(resource: RequestInfo, options: RequestInit): Promise<Response> {
  const response = await fetch(resource, options);
  return response;
}

/**
 * Request and return the current no fly area from the FAA as
 */
export async function requestNoFlyArea() {
  const resource = 'helloWorld';
  const options: RequestInit = {
    method: 'GET',
  };
  return await dataFetch(resource, options);
}

export type NoFlyRings = {
  spatialReference: {
    wkid: number;
  };
  rings: number[][][];
};

export function getPolygonRings() {
  return {
    //This indicates the projected or geographic coordinate system used to locate geographic features in the map (mapProjection function)
    spatialReference: { wkid: SPATIAL_REFERENCE_WELL_KNOWN_ID },
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
  };
}

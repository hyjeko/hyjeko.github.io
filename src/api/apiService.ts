const SPATIAL_REFERENCE_WELL_KNOWN_ID = 102100;
const THREE_SECONDS = 3000;

/**
 * Generate hard coded polygon rings for no fly zone above DTW
 * @returns polygon rings representing no fly area
 */
function getDTWPolygonRings() {
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

/**
 * Standard http browser fetch
 * @param resource The resource to fetch
 * @param options The init options for the fetch request
 * @returns A promise containing the Response value
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function dataFetch(_resource: RequestInfo, _options: RequestInit): Promise<NoFlyRings> {
  //const response = await fetch(resource, options);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const examplePromise: Promise<NoFlyRings> = new Promise((resolve, _reject) => {
    setTimeout(() => {
      // const response = new Response();
      resolve(getDTWPolygonRings());
    }, THREE_SECONDS);
  });
  return examplePromise;
}

/**
 * Request and return the current no fly area from the FAA as NoFlyRings
 */
async function requestNoFlyArea(): Promise<NoFlyRings> {
  const resource = 'helloWorld';
  const options: RequestInit = {
    method: 'GET',
  };
  return await dataFetch(resource, options);
}

type NoFlyRings = {
  spatialReference: {
    wkid: number;
  };
  rings: number[][][];
};

export { requestNoFlyArea, NoFlyRings };

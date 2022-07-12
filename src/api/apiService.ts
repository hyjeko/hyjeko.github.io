enum ResourcePaths {
  noFlyZones = '/noFlyZones',
}

const Host = {
  path: process.env.NODE_ENV === 'production' ? process.env.API_HOST : 'http://localhost:8081',
};

function buildResourcePath(host: string, resource: ResourcePaths) {
  console.log('host + resource', host + resource);
  return host + resource;
}

/**
 * Standard http browser fetch
 * @param resource The resource to fetch
 * @param options The init options for the fetch request
 * @returns A promise containing the Response value
 */
async function dataFetch(resource: RequestInfo, options: RequestInit): Promise<any> {
  return await fetch(resource, options);
}

/**
 * Request and return the current no fly area from the FAA as NoFlyRings
 */
async function requestNoFlyArea(): Promise<NoFlyRings> {
  const resource = buildResourcePath(Host.path!, ResourcePaths.noFlyZones);
  const options: RequestInit = {
    method: 'GET',
  };
  const response = await dataFetch(resource, options);
  const data = await response.json();
  return data[0]; //Only use first for now
}

type NoFlyRings = {
  spatialReference: {
    wkid: number;
  };
  rings: number[][][];
};

export { requestNoFlyArea, NoFlyRings };

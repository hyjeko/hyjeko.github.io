import React, { useEffect } from 'react';
import { useStore } from '../stores/RootStore';

/**
 * Component that wraps and sets up the map widget and  MapStore
 * @returns JSX holding the map
 */
const Map = () => {
  const { mapStore } = useStore();

  useEffect(() => {
    // When the component loads, create the map
    mapStore.constructMap('map');
    // Return a cleanup function if the map hot-reloads
    return () => {
      mapStore.cleanup();
    };
  }, []);

  return <div id='map'/>
};

export default Map;

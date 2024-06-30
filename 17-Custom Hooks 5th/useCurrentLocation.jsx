import { useState } from "react";

export function useCurrentLocation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  
  function obtainLocation() {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      throw new Error("Geolocalization is not available.")
    };

    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(`Your current location is: \n Latitude: ${position.coords.latitude}; Longitude: ${position.coords.longitude}`);
      });
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    };

  };

  useEffect(() => {
    obtainLocation();
  }, []);

  return {
    loading,
    error,
    location,
    onQueryingPosition: obtainLocation,
  };
};
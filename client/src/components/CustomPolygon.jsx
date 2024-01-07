import React, { useRef, useEffect } from "react";

const CustomPolygon = ({ paths, options }) => {
  const polygonRef = useRef(null);

  useEffect(() => {
    // Ensure the Google Maps API is loaded
    if (window.google && window.google.maps) {
      // Create a new polygon using the Google Maps API
      const polygon = new window.google.maps.Polygon({
        paths: paths || [],
        ...options,
      });
      console.log(polygon);

      // Set the polygon reference
      polygonRef.current = polygon;

      // Add the polygon to the map or do any other required operations
      // For example, if you have a map instance, you can add the polygon to the map:
      // mapInstance?.setMap(null); // Remove existing polygon (if needed)
      // polygon.setMap(mapInstance);

      // Clean up when the component is unmounted
      return () => {
        // Remove the polygon from the map or perform any necessary cleanup
        polygon.setMap(null);
      };
    }
  }, [paths, options]);

  return null; // This component doesn't render anything visible on its own
};

export default CustomPolygon;

import React, { useState, useEffect, useRef } from "react";
import { LoadScript, GoogleMap, Polygon } from "@react-google-maps/api";
import useHomeContext from "../context/HomeContext";
import { generateCustomerDensityData, cityData } from "../services/Constants";
import { createSquarePolygon } from "../services/mapUtilities";

function Map() {
  const { mapData } = useHomeContext();
  const [mapInstance, setMapInstance] = useState(null);
  const polygonsRef = useRef([]);
  const boundaryRef = useRef(null);
  const dealerNetworkRef = useRef([]);
  const customerDensityPolygon = useRef([]);
  const recommendedLocationPolygonRef = useRef([]);

  const handleLoadMap = (map) => {
    setMapInstance(map);
  };

  // This useEffect will remove all the polygons from the map using mapInstance.

  useEffect(() => {
    /*
        1. Fetch Dealer Network for particular city
        2. Fetch Boundary Data for Particular City
        3. Fetch the center of each city
        
    */

    if (mapInstance != null) {
      // remove all the previous polygons
      polygonsRef.current.forEach((polygon) => {
        polygon.setMap(null);
      });

      if (mapData.cityName) {
        if (boundaryRef.current) {
          boundaryRef.current.setMap(null);
        }
        if (dealerNetworkRef.current) {
          dealerNetworkRef.current.forEach((dealer) => {
            dealer.setMap(null);
          });
        }

        const center = cityData[mapData.cityName].center;
        const zoom = cityData[mapData.cityName].zoom;
        mapInstance.setCenter(center);
        mapInstance.setZoom(zoom);

        // create new boundary data and add it to the mapInstance
        const boundaryData = cityData[mapData.cityName].boundaries;

        const bData = boundaryData.map((boundary) => {
          return { lat: boundary[1], lng: boundary[0] };
        });

        const boundaryPolygon = new window.google.maps.Polygon({
          paths: bData,
          strokeColor: "#26577C",
          strokeOpacity: 1,
          strokeWeight: 2,
          fillColor: "#000000",
          fillOpacity: 0.05,
        });

        boundaryPolygon.setMap(mapInstance);
        boundaryRef.current = boundaryPolygon;

        // create new dealer network data and add it to the mapInstance
        const dealerNetworkData = cityData[mapData.cityName].dealerNetwork;
        const network = dealerNetworkData.forEach((dealer) => {
          const dealerNetworkMarker = new window.google.maps.Marker({
            position: dealer,
            title: "Dealer Network",
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8.5,
              fillColor: "#F00",
              fillOpacity: 0.8,
              strokeWeight: 0.9,
            },
          });

          // Create an InfoWindow for each dealer
          const infoWindow = new google.maps.InfoWindow({
            content: `<div style="width:200px" >
                        <div class="flex flex-col h-full w-full ">
                          <p class="text-xs font-medium text-gray-700">KPI's Info</p>
                          <div class="flex flex-col " >
                          <div class="flex justify-between p-1 my-1">
                            <span class="text-xs text-gray-700">Customer Density</span>
                            <p class="font-medium">1324</p>
                          </div>
                          <div class="flex justify-between p-1 my-1">
                            <span class="text-xs text-gray-700 mr-2 ">Infra Score</span>
                            <p class="font-medium">1324</p>
                          </div>
                          <div class="flex  justify-between p-1 my-1">
                            <span class="text-xs  text-gray-700">Similarity Score</span>
                            <p class="font-medium">1324</p>
                          </div>
                          <div class="flex justify-between p-1 my-1">
                            <span class="text-xs text-gray-700">Service Score</span>
                            <p class="font-medium">1324</p>
                          </div>
                          <div class="flex justify-between p-1 my-1">
                            <span class="text-xs text-gray-700">CAGR</span>
                            <p class="font-medium">1324</p>
                          </div>
                        </div>
                      </div>

            </div>`,
            maxWidth: 500,
            resizeble: true,
          });

          // Attach click event to open the InfoWindow when the marker is clicked
          dealerNetworkMarker.addListener("mouseover", () => {
            infoWindow.open(mapInstance, dealerNetworkMarker);
          });

          // Attach click event to open the InfoWindow when the marker is clicked
          dealerNetworkMarker.addListener("mouseout", () => {
            infoWindow.close();
          });

          dealerNetworkMarker.setMap(mapInstance);
          return dealerNetworkMarker;
        });
        dealerNetworkRef.current = network;
      }
    }
  }, [mapInstance, mapData.cityName]);

  /*
    
    1. Fetch Customer Density Data for particular city
    2. Create Polygon for each customer density data
    3. Add the polygon to the mapInstance
    4. Store the polygon in polygonsRef
    5. If the showCustomerDensity is false then remove all the polygons from the mapInstance

  */

  function getColorBasedOnDensity(density) {
    // Implement your logic to determine the color based on density
    // You can use a gradient, thresholds, or any other method based on your requirements.
    // For simplicity, a basic example is provided here:
    if (density > 20) {
      return "#FF0000"; // Red
    } else if (density > 10) {
      return "#FFFF00"; // Yellow
    } else {
      return "#00FF00"; // Green
    }
  }

  useEffect(() => {
    if (mapData.showCustomerDensity) {
      // create new polygons and add them to the mapInstance

      // generate customer density data
      const densityData = generateCustomerDensityData(20); // fetch customer density data

      if (mapInstance && densityData.length > 0) {
        const customerDensityPolygons = densityData.map((point) => {
          const poly = createSquarePolygon(point[0], point[1], 5);

          const fillColor = getColorBasedOnDensity(point[2]);

          const polygon = new google.maps.Polygon({
            paths: poly,
            strokeColor: "#26577C",
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: fillColor,
            fillOpacity: 0.5,
          });

          // Create an InfoWindow for each polygon
          const infoWindow = new google.maps.InfoWindow({
            content: `Density: ${point[2]}`,
          });

          // Add click event listener to show the InfoWindow on polygon click
          polygon.addListener("mouseover", () => {
            infoWindow.setPosition({ lat: point[0], lng: point[1] });
            infoWindow.open(mapInstance, polygon);
          });

          polygon.addListener("mouseout", () => {
            infoWindow.close();
          });

          polygon.setMap(mapInstance);
          return polygon;
        });

        // Save the array of polygons to the ref
        customerDensityPolygon.current = customerDensityPolygons;
      }
    } else {
      // remove the existing polygons from the map.
      if (mapInstance) {
        customerDensityPolygon.current.forEach((polygon) => {
          polygon.setMap(null);
        });
      }
    }
  }, [mapData.showCustomerDensity]);

  /* 
  Use Effect to display Recommended Localtion Grids

  1. Fetch the recommended location data for particular city // right now dummy data , {lat , lng}
  2. Create Polygon for each recommended location data
  3. Add the polygon to the mapInstance
  4. Store the polygon in polygonsRef // in this case we are stroing in recommendedLocationPolygonRef
  5. If the showRecommendedLocation is false then remove all the polygons from the mapInstance

  */

  useEffect(() => {}, [mapData.showRecommendedLocation]);

  return (
    <div className="h-full p-2">
      <LoadScript googleMapsApiKey="AIzaSyDi3kInvWusUg4z6_sdFCa5PQBKL7QMEu4">
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          onLoad={handleLoadMap}
        ></GoogleMap>
      </LoadScript>

      <p>{mapData.showRecommendedLocation ? "Yes" : "NO"} </p>
    </div>
  );
}

export default Map;

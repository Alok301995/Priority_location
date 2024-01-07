import { createContext, useContext } from "react";


export const MapContext = createContext({

    city: "",
    setCityFn: () => {},
    state: "",
    setStateFn: () => {},
    centerLatLng: [],
    setCenterLatLng: () => {},
    zoom: 8,
    setZoomFn: () => {},

});

export const MapContextProvider = MapContext.Provider;

export const useMapContext = () => useContext(MapContext);
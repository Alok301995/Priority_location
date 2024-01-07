import {createContext , useContext} from 'react';

export const HomeContext = createContext();
export const HomeContextProvider = HomeContext.Provider;
export default function useHomeContext() {
    return useContext(HomeContext);
};
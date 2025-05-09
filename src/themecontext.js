import { createContext, useContext } from "react";


export const theameContext = createContext({
  pageTheame:"light",
  setDarkTheam : () =>{},
  setLightTheam : () =>{}
})

export const ThameProvider = theameContext.Provider;

export function useContextfun(){
  return useContext(theameContext)
}




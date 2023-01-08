import { createContext } from 'react';
/*
Create a Context
Provider
Consumer => useContext Hook
*/

const AppContext = createContext();

export const AppProvider = ({child})=>{
  return <AppContext.Provider value={'Anmol'}>
    {child}
  </AppContext.Provider>
}


import React, { createContext, useContext, useReducer } from "react";

// prepares the data
export const StateContext = createContext();

// wrap our data and provide datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
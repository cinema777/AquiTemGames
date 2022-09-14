import React, { createContext } from "react";

export const GlobalContext = createContext({});

export function InfoProvider( {children} ) {
    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}
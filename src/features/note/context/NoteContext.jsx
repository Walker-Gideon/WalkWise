import { createContext, useContext, useState } from "react";

const NoteContext = createContext();

function NoteProvider({ children }) {
    const value = {};

    return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
}

function useNote() {
    const context = useContext(NoteContext);
    
    if (context === undefined)
      throw new Error("Note context was called outside of it provider");
    
    return context;
}

export {NoteProvider, useNote}
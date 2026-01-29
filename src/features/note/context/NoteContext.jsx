import { createContext, useContext, useState } from "react";

const NoteContext = createContext();

function NoteProvider({ children }) {
    const [content, setContent] = useState("<p>Start...</p>");

    const value = {
      content,
      setContent,
    };

    return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
}

function useNote() {
    const context = useContext(NoteContext);
    
    if (context === undefined)
      throw new Error("Note context was called outside of it provider");
    
    return context;
}

export {NoteProvider, useNote}
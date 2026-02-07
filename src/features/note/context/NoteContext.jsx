import { createContext, useContext, useState } from "react";

const NoteContext = createContext();

function NoteProvider({ children }) {
    const [isDisplayNote, setIsDisplayNote] = useState(false);
    const [content, setContent] = useState("<p>Start...</p>");

    // Search
    const [query, setQuery] = useState("");

    const value = {
      // States
      query,
      content,
      isDisplayNote,
      
      // Setters
      setQuery,
      setContent,
      setIsDisplayNote
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
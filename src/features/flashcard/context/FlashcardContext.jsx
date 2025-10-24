import { createContext, useContext } from "react";

const FlashcardContext = createContext();
const value = {};

function FlashcardProvider({ children }) {
  return (
    <FlashcardContext.Provider value={value}>
      {children}
    </FlashcardContext.Provider>
  );
}

function useFlashcard() {
  const context = useContext(FlashcardContext);

  if (context === undefined)
    throw new Error("Flashcard context was called outside of it provider");

  return context;
}

export { FlashcardProvider, useFlashcard };

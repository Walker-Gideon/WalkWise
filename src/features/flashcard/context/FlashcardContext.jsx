import { createContext, useContext, useState } from "react";

const FlashcardContext = createContext();

function FlashcardProvider({ children }) {
  const [isDisplayFlashcardLayout, setIsDisplayFlashcardLayout] =
    useState(false);

  function handleIsDisplayFlashcardLayout() {
    setTimeout(() => {
      setIsDisplayFlashcardLayout((show) => !show);
    }, 200);
  }

  const value = {
    isDisplayFlashcardLayout,
    setIsDisplayFlashcardLayout,
    handleIsDisplayFlashcardLayout,
  };

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

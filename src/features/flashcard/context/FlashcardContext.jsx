import { createContext, useContext, useState } from "react";

const FlashcardContext = createContext();

function FlashcardProvider({ children }) {
  const [isDisplayFlashcardLayout, setIsDisplayFlashcardLayout] =
    useState(false);
  const [isCardsInitDisplay, setIsCardsInitDisplay] = useState(false);

  function handleIsCardsInitDisplay() {
    setTimeout(() => {
      setIsCardsInitDisplay((show) => !show);
    }, 200);
  }

  const value = {
    // States
    isDisplayFlashcardLayout,
    isCardsInitDisplay,

    // Setters
    setIsDisplayFlashcardLayout,

    // Functions
    handleIsCardsInitDisplay,
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

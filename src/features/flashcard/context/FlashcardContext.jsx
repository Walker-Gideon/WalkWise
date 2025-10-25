import { createContext, useContext, useState } from "react";

const FlashcardContext = createContext();

function FlashcardProvider({ children }) {
  const [isDisplayFlashcardLayout, setIsDisplayFlashcardLayout] =
    useState(false);
  const [isCardsInitDisplay, setIsCardsInitDisplay] = useState(false);

  const value = {
    // States
    isDisplayFlashcardLayout,
    isCardsInitDisplay,

    // Setters
    setIsDisplayFlashcardLayout,
    setIsCardsInitDisplay,

    // Functions
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

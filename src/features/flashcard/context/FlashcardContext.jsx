import { createContext, useContext, useState } from "react";

const FlashcardContext = createContext();

function FlashcardProvider({ children }) {
  const [isDisplayFlashcardLayout, setIsDisplayFlashcardLayout] =
    useState(false);
  const [isCardsInitDisplay, setIsCardsInitDisplay] = useState(false);

  // Create flashcard
  const [pairs, setPairs] = useState([
    { term: "", definition: "" },
    { term: "", definition: "" },
  ]);
  const [index, setIndex] = useState(0);

  const MAX_PAIRS = 50;

  // Change pair in flashcard @createdInput
  const handlePairChange = (index, field, value) => {
    const updatedPairs = [...pairs];
    updatedPairs[index][field] = value;
    setPairs(updatedPairs);
  };

  // Delete card @createdInput
  const handleDelete = (e) => {
    e.preventDefault();

    if (pairs.length > 2) {
      const updatePairs = pairs.filter((_, i) => i !== index);

      setPairs(updatePairs);
      setIndex((prev) =>
        prev >= updatePairs.length ? updatePairs.length - 1 : prev,
      );
    }
  };

  const value = {
    // States
    pairs,
    index,
    isDisplayFlashcardLayout,
    isCardsInitDisplay,

    // Setters
    setPairs,
    setIndex,
    setIsDisplayFlashcardLayout,
    setIsCardsInitDisplay,

    // Values
    MAX_PAIRS,

    // Functions
    handleDelete,
    handlePairChange,
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

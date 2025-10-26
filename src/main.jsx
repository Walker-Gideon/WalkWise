import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { FlashcardProvider } from "./features/flashcard/context/FlashcardContext.jsx";
import { NavigationProvider } from "./contexts/NavigationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FlashcardProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </FlashcardProvider>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { FlashcardProvider } from "./features/flashcard/context/FlashcardContext.jsx";
import { NavigationProvider } from "./contexts/NavigationContext.jsx";
import { ScheduleProvider } from "./features/schedule/context/ScheduleContext.jsx";
import { InspireProvider } from "./features/inspire/context/InspireContext.jsx";
import { GeneralProvider } from "./contexts/GeneralContext.jsx";
import { AuthProvider } from "./authentication/context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FlashcardProvider>
      <ScheduleProvider>
        <InspireProvider>
          <NavigationProvider>
            <GeneralProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </GeneralProvider>
          </NavigationProvider>
        </InspireProvider>
      </ScheduleProvider>
    </FlashcardProvider>
  </StrictMode>,
);

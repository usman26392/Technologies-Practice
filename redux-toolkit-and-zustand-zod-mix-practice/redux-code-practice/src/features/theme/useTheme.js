

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * Custom Hook to use ThemeContext
 * 
 * This is a best practice approach:
 * - Encapsulates the context usage
 * - Makes components cleaner
 * - Easy to switch to other state management if needed later
 * - Throws error if used outside of ThemeProvider (helpful for debugging)
 */

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}

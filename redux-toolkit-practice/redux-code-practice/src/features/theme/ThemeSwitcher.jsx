

import { useTheme } from "./useTheme";
import "./ThemeSwitcher.css";

/**
 * Component that uses the Theme Context
 * 
 * Notice: No need to pass theme as a prop from parent!
 * We can access it directly where we need it.
 * This avoids "prop drilling" - passing props through many levels.
 */

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-switcher ${theme}`}>
      <h2>🎨 Theme Switcher</h2>
      <p>Current Theme: <strong>{theme.toUpperCase()}</strong></p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;

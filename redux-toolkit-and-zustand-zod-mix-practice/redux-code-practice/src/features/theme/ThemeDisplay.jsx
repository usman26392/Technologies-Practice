

import { useTheme } from "./useTheme";
import "./ThemeDisplay.css";

/**
 * Another component that uses the Theme Context
 * 
 * The theme state is shared between multiple components
 * When one component changes the theme, all components that use it will update
 */

function ThemeDisplay() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className={`theme-display ${theme}`}>
      <h3>📱 Theme Display Component</h3>
      <p>
        This component reads the same theme state as ThemeSwitcher.
        When you toggle theme in the switcher, this component updates automatically!
      </p>
      <div className="theme-info">
        <p>🌓 Current Mode: <strong>{isDark ? "🌙 Dark" : "☀️ Light"}</strong></p>
        <p>Background: <strong>{isDark ? "Dark" : "Light"}</strong></p>
        <p>Text Color: <strong>{isDark ? "Light" : "Dark"}</strong></p>
      </div>
    </div>
  );
}

export default ThemeDisplay;

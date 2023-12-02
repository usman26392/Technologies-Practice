"use client";

import { createContext, useEffect, useState } from "react";


// create a context
export const ThemeContext = createContext();


//FIXME: this function is not using right now.
const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  else {
    // Handle the case where `window` is not defined (e.g., when running on the server).
    // You can return a default value or handle it as needed.
    return "light"; // Return a default value like "light" in this example.
  }
};


// provider
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
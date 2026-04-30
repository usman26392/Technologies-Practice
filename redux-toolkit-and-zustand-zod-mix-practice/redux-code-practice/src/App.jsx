import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import Posts from "./features/posts/Posts";

import { ThemeProvider } from "./features/theme/ThemeContext";
import ThemeSwitcher from "./features/theme/ThemeSwitcher";
import ThemeDisplay from "./features/theme/ThemeDisplay";

import ZustandCounter from "./features/zustand/ZustandCounter";
import AdvancedZustandCounter from "./features/zustand/AdvancedZustandCounter";

import RegistrationForm from "./features/zod/RegistrationForm";
import SimpleValidator from "./features/zod/SimpleValidator";

function App() {
  return (
    <ThemeProvider>
      <>
        <h1>Redux Toolkit + RTK Query + React Context API + Zustand + Zod</h1>

        {/* Zod Example - Form Validation */}
        <section>
          <h2>Zod Example (Schema Validation)</h2>
          <SimpleValidator />
          <RegistrationForm />
        </section>

        {/* Zustand Example - Counter */}
        <section>
          <h2>Zustand Example (Lightweight State Management)</h2>
          <ZustandCounter />
          <AdvancedZustandCounter />
        </section>

        {/* React Context API Example - Theme Switcher */}
        <section>
          <h2>React Context API Example</h2>
          <ThemeSwitcher />
          <ThemeDisplay />
        </section>

        {/* Simple Counter Example using Redux Toolkit */}
        <section>
          <h2>Redux Toolkit Example</h2>
          <Counter />
        </section>

        {/* RTK Query Example - Fetching Posts from JSONPlaceholder API */}
        <section>
          <h2>RTK Query Example</h2>
          <Posts />
        </section>
      </>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import NotesApp from "./components/NotesApp";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/style.css";

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "light" : "dark";
    });
    localStorage.setItem("theme", theme);
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <BrowserRouter>
      <ThemeProvider value={themeContextValue}>
        <div className="app-container">
          <NotesApp toggleTheme={toggleTheme} />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

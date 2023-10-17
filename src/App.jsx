import React from "react";
import NotesApp from "./components/NotesApp";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/style.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );
  const [language, setLanguange] = React.useState(
    localStorage.getItem("language") || "eng"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "light" : "dark";
    });
    localStorage.setItem("theme", theme);
  };

  const toggleLanguage = () => {
    setLanguange((prevLanguage) => {
      return prevLanguage === "eng" ? "id" : "eng";
    });
    localStorage.setItem("language", language);
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const languageContextValue = React.useMemo(() => {
    return {
      language,
      toggleLanguage,
    };
  }, [language]);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, language]);
  return (
    <BrowserRouter>
      <ThemeProvider value={themeContextValue}>
        <div className="app-container">
          <LanguageProvider value={languageContextValue}>
            <NotesApp
              toggleTheme={toggleTheme}
              toggleLanguage={toggleLanguage}
            />
          </LanguageProvider>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

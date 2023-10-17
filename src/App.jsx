import React from "react";
import NotesApp from "./components/NotesApp";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/style.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "dark"
  );
  const [language, setLanguange] = React.useState(
    localStorage.getItem("language") || "eng"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "light" : "dark";
    });
  };

  const toggleLanguage = () => {
    setLanguange((prevLanguage) => {
      return prevLanguage === "eng" ? "id" : "eng";
    });
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
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
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

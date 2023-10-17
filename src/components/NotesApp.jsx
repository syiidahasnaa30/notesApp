import React from "react";
import HomePage from "../pages/HomePage";
import ArchievedPage from "../pages/ArchievedPage";
import DetailPage from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import Navigation from "./Navigation";
import PageNotFound from "../pages/PageNotFound";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { Routes, Route } from "react-router-dom";
import {
  putAccessToken,
  getUserLogged,
  getAccessToken,
} from "../utils/network-data";
import LanguageContext from "../contexts/LanguageContext";

const NotesApp = ({ toggleTheme, toggleLanguage }) => {
  const [user, setUser] = React.useState(null);
  const { language } = React.useContext(LanguageContext);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { error, data } = await getUserLogged();
    setUser(data);
  };

  const onLogOut = () => {
    putAccessToken("");
    setUser(null);
  };

  if (user === null) {
    return (
      <>
        <header>
          <h1>{language === "eng" ? "My Notes" : "Catatanku"}</h1>
          <Navigation
            user={user}
            toggleTheme={toggleTheme}
            toggleLanguage={toggleLanguage}
          />
        </header>
        <Routes>
          <Route
            path="/*"
            element={<LoginPage onLoginSuccess={onLoginSuccess} />}
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <header>
        <h1>{language === "eng" ? "My Notes" : "Catatanku"}</h1>
        <Navigation
          user={user}
          logout={onLogOut}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
        />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchievedPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default NotesApp;

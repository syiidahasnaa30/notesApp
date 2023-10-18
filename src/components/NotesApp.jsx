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
import PropTypes from "prop-types";

const NotesApp = ({ toggleTheme, toggleLanguage }) => {
  const getUser = () => {
    console.log("tipe access token : " + typeof getAccessToken());
    if (getAccessToken() === null) {
      console.log("Masuk kondisi undifined || null");
      return null;
    } else {
      console.log("Diluar kondisi user null");
      const { error, data } = getUserLogged();
      return data;
    }
  };
  const [user, setUser] = React.useState(() => {
    return getUser();
  });
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
  console.log("user : " + user);

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

NotesApp.proptypes = {
  toggleTheme: PropTypes.func.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};
export default NotesApp;

import React from "react";
import HomePage from "../pages/HomePage";
import ArchievedPage from "../pages/ArchievedPage";
import DetailPage from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import Navigation from "./Navigation";
import PageNotFound from "../pages/PageNotFound";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { Routes, Route, Link } from "react-router-dom";
import { putAccessToken, getUserLogged } from "../utils/network-data";

const NotesApp = () => {
  const getUser = async () => {
    const { error, data } = await getUserLogged();
    if (error) {
      return null;
    } else {
      return data;
    }
  };

  const [user, setUser] = React.useState(() => {
    getUser();
  });

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
        <header>Note App</header>
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
        <h1>Notes App</h1>
        <Navigation />
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

import React from "react";
import HomePage from "../pages/HomePage";
import ArchievedPage from "../pages/ArchievedPage";
import DetailPage from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import Navigation from "./Navigation";
import PageNotFound from "../pages/PageNotFound";
import { Routes, Route } from "react-router-dom";
const NotesApp = () => {
  return (
    <>
      <header>
        <h1>Rosyii's Note App</h1>
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

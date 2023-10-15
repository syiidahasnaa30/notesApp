import React from "react";
import NotesApp from "./components/NotesApp";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NotesApp />
      </div>
    </BrowserRouter>
  );
};

export default App;

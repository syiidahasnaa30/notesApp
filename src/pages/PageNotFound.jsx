import React from "react";
import LanguageContext from "../contexts/LanguageContext";

const PageNotFound = () => {
  const { language } = React.useContext(LanguageContext);

  return (
    <div className="notes-list-empty">
      <h2>
        {language === "eng" ? "Page Not Found" : "Halaman tidak ditemukan"}
      </h2>
    </div>
  );
};

export default PageNotFound;

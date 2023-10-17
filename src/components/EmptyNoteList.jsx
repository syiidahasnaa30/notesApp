import React from "react";
import LanguageContext from "../contexts/LanguageContext";

const EmptyNoteList = () => {
  const { language } = React.useContext(LanguageContext);
  return (
    <div className="notes-list-empty">
      <p>{language === "eng" ? "Your Note is Empty" : "Catatanmu kosong"}</p>
    </div>
  );
};

export default EmptyNoteList;

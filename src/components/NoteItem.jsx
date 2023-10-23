import React, { useContext } from "react";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LanguageContext from "../contexts/LanguageContext";

const NoteItem = ({ title, createdAt, body, id }) => {
  const { language } = useContext(LanguageContext);
  const getLanguage = () => {
    return language === "eng" ? "en-US" : "id-ID";
  };
  return (
    <div className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">
        {showFormattedDate(createdAt, getLanguage())}
      </p>
      <p className="note-item__body">{body}</p>
    </div>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default NoteItem;

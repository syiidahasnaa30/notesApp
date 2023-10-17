import React from "react";
import PropTypes from "prop-types";
import LanguageContext from "../contexts/LanguageContext";

const SearchBar = ({ keyword, keywordChange }) => {
  const { language } = React.useContext(LanguageContext);
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={
          language === "eng" ? "Search your notes" : "Cari catatanmu"
        }
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
export default SearchBar;

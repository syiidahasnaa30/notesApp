import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";
import LoadingScreen from "../components/LoadingScreen";

const ArchievedPage = () => {
  const [loading, setLoading] = React.useState(false);
  const { language } = React.useContext(LanguageContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    setLoading(true);
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
    setLoading(false);
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredNote = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      {loading && <LoadingScreen />}
      <h2>{language === "eng" ? "Archived Note" : "Arsip Catatan"}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNote} />
    </>
  );
};
export default ArchievedPage;

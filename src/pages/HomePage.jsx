import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/network-data";
import { GrAdd } from "react-icons/gr";
import { Link, useSearchParams } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";
import LoadingScreen from "../components/LoadingScreen";

const HomePage = () => {
  const [loading, setLoading] = React.useState(false);
  const { language } = React.useContext(LanguageContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    const getNotes = async () => {
      setLoading(true);
      try {
        const { data } = await getActiveNotes();
        setNotes(data);
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    };
    getNotes();
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
      <h2>{language === "eng" ? "Active Note" : "Catatan Aktif"}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNote} />
      <div className="homepage__action">
        <button className="action">
          <Link to="/notes/new">
            <GrAdd />
          </Link>
        </button>
      </div>
    </>
  );
};

export default HomePage;

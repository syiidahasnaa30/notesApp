import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/network-data";
import { GrAdd } from "react-icons/gr";
import { Link, useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    const getNotes = async () => {
      const { data } = await getActiveNotes();
      setNotes(data);
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
      <h2>Active Note</h2>
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

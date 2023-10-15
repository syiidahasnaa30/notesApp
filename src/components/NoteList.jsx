import React from "react";
import NoteItem from "./NoteItem";
import EmptyNoteList from "./EmptyNoteList";
import PropTypes from "prop-types";

const NoteList = ({ notes }) => {
  if (notes.length < 1) {
    return <EmptyNoteList />;
  }
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

export default NoteList;

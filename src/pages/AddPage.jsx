import React from "react";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

const AddPage = () => {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote({ ...note });
    navigate("/");
  }
  return (
    <section>
      <h1>Add New Note</h1>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
};

export default AddPage;

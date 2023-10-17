import React from "react";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import LanguageContext from "../contexts/LanguageContext";

const AddPage = () => {
  const navigate = useNavigate();
  const { language } = React.useContext(LanguageContext);

  async function onAddNoteHandler(note) {
    await addNote({ ...note });
    navigate("/");
  }
  return (
    <section>
      <h1> {language === "eng" ? "Add New Note" : "Tambahkan Catatan Baru"}</h1>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
};

export default AddPage;

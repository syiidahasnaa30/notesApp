import React from "react";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/network-data";
import { FaTrashAlt } from "react-icons/fa";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DetailPageAction = ({ archived, id, setLoading }) => {
  const navigate = useNavigate();

  const moveNoteToDeleted = async () => {
    setLoading(true);
    await deleteNote(id);
    setLoading(false);
    if (archived) {
      navigate("/archive");
    } else {
      navigate("/");
    }
  };

  const moveNoteToArchived = async () => {
    setLoading(true);
    await archiveNote(id);
    setLoading(false);
    navigate("/archive");
  };

  const removeNoteFromArchive = async () => {
    setLoading(true);
    await unarchiveNote(id);
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="detail-page__action">
      <button className="action" onClick={() => moveNoteToDeleted()}>
        <FaTrashAlt />
      </button>
      <button
        className="action"
        onClick={archived ? removeNoteFromArchive : moveNoteToArchived}
      >
        {archived ? <BiArchiveOut /> : <BiArchiveIn />}
      </button>
    </div>
  );
};

DetailPageAction.propTypes = {
  archived: PropTypes.bool,
  id: PropTypes.string.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default DetailPageAction;

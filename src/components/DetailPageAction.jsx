import React from "react";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import { FaTrashAlt } from "react-icons/fa";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DetailPageAction = ({ archived, id }) => {
  const navigate = useNavigate();

  const moveNoteToDeleted = () => {
    deleteNote(id);
    if (archived) {
      navigate("/archive");
    } else {
      navigate("/");
    }
  };

  const moveNoteToArchived = () => {
    archiveNote(id);
    navigate("/archive");
  };

  const removeNoteFromArchive = () => {
    unarchiveNote(id);
    navigate("/");
  };

  if (archived) {
    return (
      <div className="detail-page__action" onClick={() => moveNoteToDeleted()}>
        <button className="action">
          <FaTrashAlt />
        </button>
        <button className="action" onClick={() => removeNoteFromArchive()}>
          <BiArchiveOut />
        </button>
      </div>
    );
  }
  return (
    <div className="detail-page__action">
      <button className="action" onClick={() => moveNoteToDeleted()}>
        <FaTrashAlt />
      </button>
      <button className="action" onClick={() => moveNoteToArchived()}>
        <BiArchiveIn />
      </button>
    </div>
  );
};

DetailPageAction.propTypes = {
  archived: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailPageAction;

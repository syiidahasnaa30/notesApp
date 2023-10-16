import React from "react";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/network-data";
import { FaTrashAlt } from "react-icons/fa";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DetailPageAction = ({ archived, id }) => {
  const navigate = useNavigate();

  const moveNoteToDeleted = async () => {
    await deleteNote(id);
    if (archived) {
      navigate("/archive");
    } else {
      navigate("/");
    }
  };

  const moveNoteToArchived = async () => {
    await archiveNote(id);
    navigate("/archive");
  };

  const removeNoteFromArchive = async () => {
    await unarchiveNote(id);
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
};

export default DetailPageAction;

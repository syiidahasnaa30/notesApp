import React from "react";
import { showFormattedDate } from "../utils/index";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import DetailPageAction from "../components/DetailPageAction";

const DetailPage = () => {
  const { id } = useParams();
  const [note, setNote] = React.useState("");

  React.useEffect(() => {
    const getDetailNote = async () => {
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
      }
    };
    getDetailNote();
  }, []);

  return (
    <div className="detail-page">
      <h1 className="detail-page__title">{note.title}</h1>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="detail-page__body">{note.body}</p>
      <DetailPageAction archived={note.archived} id={id} />
    </div>
  );
};
export default DetailPage;

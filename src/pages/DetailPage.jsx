import React from "react";
import { showFormattedDate } from "../utils/index";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import DetailPageAction from "../components/DetailPageAction";
import LoadingScreen from "../components/LoadingScreen";
import PageNotFound from "./PageNotFound";

const DetailPage = () => {
  const { id } = useParams();
  const [note, setNote] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getDetailNote = async () => {
      setLoading(true);
      try {
        const { error, data } = await getNote(id);
        setNote(data);
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    };
    getDetailNote();
  }, []);

  if (!loading && note === "") {
    return <PageNotFound />;
  }
  return (
    <>
      {loading && <LoadingScreen />}

      <div className="detail-page">
        <h1 className="detail-page__title">{note.title}</h1>
        <p className="detail-page__createdAt">
          {showFormattedDate(note.createdAt)}
        </p>
        <p className="detail-page__body">{note.body}</p>
        <DetailPageAction
          archived={note.archived}
          id={id}
          setLoading={setLoading}
        />
      </div>
    </>
  );
};
export default DetailPage;

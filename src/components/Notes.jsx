import "./Notes.css";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateId, deleteNote } from "../store/notes.reducer";

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.notes.array);

  const setId = (e) => {
    dispatch(setUpdateId(e.target.name));
  };

  const delNote = (e) => {
    dispatch(deleteNote(e.target.name));
  };

  return (
    <div className="container">
      {notes.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-header bg-dark">
            <h2 className="text-white">{item.title}</h2>
            <button className="btn btn-success" name={item.id} onClick={setId}>
              Edit
            </button>
          </div>
          <div className="card-body">
            <p>{item.description}</p>
          </div>
          <button className="btn btn-danger" name={item.id} onClick={delNote}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notes;

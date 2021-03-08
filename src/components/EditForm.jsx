import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateNote } from "../store/notes.reducer";

const EditForm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const update = (e) => {
    e.preventDefault();
    dispatch(updateNote(data));
  };

  return (
    <div>
      <form onSubmit={update}>
        <input
          className="form-control"
          name="title"
          type="text"
          placeholder="New Title"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <textarea
          className="form-control"
          name="description"
          placeholder="New Description"
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default EditForm;

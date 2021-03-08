import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../store/notes.reducer";

const CreateForm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const create = (e) => {
    e.preventDefault();
    dispatch(createNote(data));
  };

  return (
    <div>
      <form onSubmit={create}>
        <input
          className="form-control mb-3"
          name="title"
          type="text"
          placeholder="Title"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <textarea
          rows="4"
          className="form-control mb-3"
          name="description"
          placeholder="Description"
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <button className="btn btn-success">Create</button>
      </form>
    </div>
  );
};

export default CreateForm;

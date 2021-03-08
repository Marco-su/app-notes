import "./CreateForm.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { createNote, activeCreateForm } from "../../store/notes.reducer";

const CreateForm = () => {
  const { register, errors, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const create = (e) => {
    dispatch(createNote(data));
  };

  const closeForm = (e) => {
    e.preventDefault();
    dispatch(activeCreateForm(false));
  };

  const activeForm = useSelector((store) => store.notes.createForm);

  return (
    <>
      {activeForm ? (
        <div id="create-form-container">
          <form onSubmit={handleSubmit(create)} id="create-form">
            <div className="card">
              <div className="card-header">
                <h2>Create new note</h2>
                <button
                  id="close-btn-create"
                  className="btn"
                  onClick={closeForm}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="card-body">
                <input
                  className="form-control mb-2"
                  name="title"
                  type="text"
                  placeholder="Title"
                  ref={register({
                    required: {
                      value: true,
                      message: "The title is required",
                    },
                    maxLength: {
                      value: 12,
                      message: "The maximum length is 12 characters",
                    },
                  })}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
                {errors.title && (
                  <span className="text-danger d-block mb-2">
                    {errors.title.message}
                  </span>
                )}

                <textarea
                  rows="4"
                  className="form-control mb-2"
                  name="description"
                  placeholder="Description"
                  ref={register({
                    required: {
                      value: true,
                      message: "A description is required",
                    },
                    maxLength: {
                      value: 150,
                      message: "The maximum length is 150 characters",
                    },
                  })}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                />
                {errors.description && (
                  <span className="text-danger d-block mb-2">
                    {errors.description.message}
                  </span>
                )}

                <button className="btn btn-success">Create</button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default CreateForm;

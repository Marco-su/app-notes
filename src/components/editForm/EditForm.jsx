import "./EditForm.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { updateNote, activeUpdateForm } from "../../store/notes.reducer";

const EditForm = () => {
  const dispatch = useDispatch();

  const { register, errors, handleSubmit } = useForm();

  const activeForm = useSelector((store) => store.notes.updateForm);

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const update = (e) => {
    dispatch(updateNote(data));
    dispatch(activeUpdateForm(false));
  };

  const closeForm = (e) => {
    e.preventDefault();
    dispatch(activeUpdateForm(false));
  };

  return (
    <>
      {activeForm ? (
        <div id="edit-form-container">
          <form onSubmit={handleSubmit(update)} className="edit-form">
            <div className="card">
              <div className="card-header">
                <h2>Edit Note</h2>
                <button className="btn close-btn-edit" onClick={closeForm}>
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="card-body">
                <input
                  className="form-control mb-2"
                  name="title"
                  type="text"
                  placeholder="New Title"
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
                  placeholder="New Description"
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

                <button className="btn btn-success">Update</button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default EditForm;

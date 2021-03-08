//--------------------------IMPORTS

import randomId from "../services/randomName";

//--------------------------CONSTANT

const data = {
  array: [
    {
      id: "1",
      title: "Default Note",
      description: "This is a note added by default.",
    },
  ],
  update: {
    id: null,
    form: false,
  },
  createForm: false,
};

const ACTIVE_CREATE = "ACTIVE_CREATE";
const CREATE_NOTE = "CREATE_NOTE";
const SET_UPDATE_ID = "SET_UPDATE_ID";
const UPDATE_NOTE = "UPDATE_NOTE";
const DELETE_NOTE = "DELETE_NOTE";

//--------------------------REDUCER

export default function notesReducer(state = data, action) {
  switch (action.type) {
    case ACTIVE_CREATE:
      return {
        ...state,
        createForm: true,
      };

    case CREATE_NOTE:
      return {
        ...state,
        array: [...state.array, action.payload],
        createForm: false,
      };

    case SET_UPDATE_ID:
      return {
        ...state,
        update: {
          id: action.payload.id,
          form: true,
        },
      };

    case UPDATE_NOTE: {
      const { id, title, description } = action.payload;
      const index = state.array.findIndex((note) => note.id === id);
      const newArray = [...state.array];
      newArray[index] = {
        id,
        title,
        description,
      };

      return {
        ...state,
        array: newArray,
        update: {
          id: null,
          form: false,
        },
      };
    }

    case DELETE_NOTE: {
      const newArray = state.array.filter((note) => note.id !== action.payload);
      return { ...state, array: newArray };
    }

    default:
      return data;
  }
}

//---------------------------ACTIONS

export const activeCreateForm = () => (dispatch, getState) => {
  dispatch({
    type: ACTIVE_CREATE,
  });
};

export const createNote = (noteDetails) => (dispatch, getState) => {
  const id = randomId();
  const { title, description } = noteDetails;
  dispatch({
    type: CREATE_NOTE,
    payload: {
      id,
      title,
      description,
    },
  });
};

export const setUpdateId = (id) => (dispatch, getState) => {
  dispatch({
    type: SET_UPDATE_ID,
    payload: { id, form: true },
  });
};

export const updateNote = (noteDetails) => (dispatch, getState) => {
  const { id } = getState().notes.update;
  const { title, description } = noteDetails;
  dispatch({
    type: UPDATE_NOTE,
    payload: {
      id,
      title,
      description,
    },
  });
};

export const deleteNote = (id) => (dispatch, getState) => {
  dispatch({
    type: DELETE_NOTE,
    payload: id,
  });
};

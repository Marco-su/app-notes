import { useDispatch } from "react-redux";
import { activeCreateForm } from "../store/notes.reducer";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const active = () => {
    dispatch(activeCreateForm());
  };

  return (
    <div id="navbar" className="mb-4">
      <div className="container">
        <span>Notes App</span>
        <button className="btn btn-success" onClick={active}>
          Crear Nota
        </button>
      </div>
    </div>
  );
};

export default Navbar;

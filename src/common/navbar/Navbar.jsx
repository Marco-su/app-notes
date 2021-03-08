import "./Navbar.css";
import { useDispatch } from "react-redux";
import { activeCreateForm } from "../../store/notes.reducer";

const Navbar = () => {
  const dispatch = useDispatch();

  const active = () => {
    dispatch(activeCreateForm(true));
  };

  return (
    <nav id="navbar" className="mb-4">
      <div className="container">
        <span>Notes App</span>
        <button className="btn btn-success" onClick={active}>
          Create Note
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

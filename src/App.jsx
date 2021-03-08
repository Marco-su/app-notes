import "./App.css";
import { Provider } from "react-redux";

import generateStore from "./store/store";
import Navbar from "./common/navbar/Navbar";
import CreateForm from "./components/createForm/CreateForm";
import EditForm from "./components/editForm/EditForm";
import Notes from "./components/notes/Notes";
import Footer from "./common/footer/Footer";

function App() {
  return (
    <div className="App">
      <Provider store={generateStore()}>
        <Navbar />
        <Notes />
        <CreateForm />
        <EditForm />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;

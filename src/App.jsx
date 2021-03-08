import { Provider } from "react-redux";

import "./App.css";
import generateStore from "./store/store";
import Navbar from "./common/Navbar";
import CreateForm from "./components/CreateForm";
import EditForm from "./components/EditForm";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="App">
      <Provider store={generateStore()}>
        <Navbar />
        <Notes />
        <CreateForm />
        <EditForm />
      </Provider>
    </div>
  );
}

export default App;

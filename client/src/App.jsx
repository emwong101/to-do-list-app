import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import CreateList from "./components/createList/CreateList";
import DisplayList from "./components/displayList/DisplayList";
import TopNav from "./components/topNav/TopNav";
import UpdateList from "./components/updateList/UpdateList";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <TopNav />
          <Routes>
            <Route path="/" element={<DisplayList />} />
            <Route path="/create" element={<CreateList />} />
            <Route path="/update/:id" element={<UpdateList />} />
          </Routes>
          {/* <FormTemplate /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

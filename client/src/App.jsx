import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateList from "./components/createList/CreateList";
import DisplayList from "./components/displayList/DisplayList";
import TopNav from "./components/topNav/TopNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <TopNav />
          <Routes>
            <Route path="/" element={<DisplayList />} />
            <Route path="/create" element={<CreateList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

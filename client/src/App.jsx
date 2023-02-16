import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.scss";
import CreateList from "./components/createList/CreateList";
import DisplayList from "./components/displayList/DisplayList";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import UpdateList from "./components/updateList/UpdateList";
import Landing from "./pages/landing/Landing";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/home" element={<DisplayList />} />
            <Route path="/create" element={<CreateList />} />
            <Route path="/update/:id" element={<UpdateList />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;

import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.scss";
import CreateList from "./components/createList/CreateList";
import DisplayList from "./components/displayList/DisplayList";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import UpdateList from "./components/updateList/UpdateList";
import Lists from "./pages/lists/Lists";
import Landing from "./pages/landing/Landing";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [firstMount, setFirstMount] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <div className="App">
        <AnimatePresence>
          <Routes location={background || location} key={location.pathname}>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/landing" element={<Landing />} />
            <Route
              path="/home"
              element={
                <DisplayList
                  setOpen={setOpen}
                  setFirstMount={setFirstMount}
                  firstMount={firstMount}
                />
              }
            >
              <Route element={<Lists open={open} windowSize={windowSize} />}>
                <Route
                  path="create"
                  element={<CreateList setOpen={setOpen} />}
                />
                <Route
                  path="update/:id"
                  element={<UpdateList setOpen={setOpen} />}
                />
              </Route>
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;

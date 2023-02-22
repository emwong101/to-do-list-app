import { Route, Routes, useLocation } from "react-router-dom";
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

  return (
    <>
      <div className="App">
        <AnimatePresence>
          <Routes location={background || location} key={location.pathname}>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/home" element={<DisplayList />}>
              <Route element={<Lists />}>
                <Route path="create" element={<CreateList />} />
                <Route path="update/:id" element={<UpdateList />} />
              </Route>
            </Route>
          </Routes>
          {/* {background && (
            <Routes>
              <Route path="create" element={<CreateList />} />
            </Routes>
          )} */}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;

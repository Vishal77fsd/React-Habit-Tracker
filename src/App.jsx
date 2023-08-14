import { Routes, Route } from "react-router-dom";
import NewWorkout from "./Components/NewWorkout.jsx";
import Navbar from "./Components/Navbar.jsx";

import Home from "./Components/Home.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-workout" element={<NewWorkout />} />
      </Routes>
    </>
  );
};

export default App;

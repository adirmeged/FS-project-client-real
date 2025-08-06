import { Routes, Route } from "react-router-dom";
import MoviePage from "./Pages/MoviePage";
import Home from "./Pages/Home";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoviePage" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;

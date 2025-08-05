import { Routes, Route } from "react-router-dom";
import MoviePage from "./Pages/MoviePage";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>  } />
      <Route path="/MoviePage" element={<MoviePage  />} />
    </Routes>
  );
}

export default App;

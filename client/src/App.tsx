import { Routes, Route } from "react-router-dom";
import MoviePage from "./Pages/MoviePage";
import { defaultMovie } from "./DB/DefaultMovie";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>  } />
      <Route path="/MoviePage" element={<MoviePage movie={defaultMovie[0]} />} />
    </Routes>
  );
}

export default App;

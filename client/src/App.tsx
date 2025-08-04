import MovieList from "./components/TopReview/MovieList";
import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/Featured/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <MovieList />
    </div>
  );
}

export default App;

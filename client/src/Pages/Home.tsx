import HomePage from "../components/Featured/HomePage";
import Navbar from "../components/NavBar/Navbar";
import MovieList from "../components/TopReview/MovieList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <MovieList />
    </div>
  );
};

export default Home;

import HomePage from "../components/Featured/HomePage";
import Navbar from "../components/NavBar/Navbar";
import MovieList from "../components/MovieList/MovieList";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <div className="flex justify-center">
        <MovieList header="Top Review" numMovieShow={6} />
      </div>
    </div>
  );
};

export default Home;

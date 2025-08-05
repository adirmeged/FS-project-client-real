import HomePage from "../components/Featured/HomePage";
import Navbar from "../components/NavBar/Navbar";
import MovieList from "../components/MovieList/MovieList";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-200 bg-linear-to-b from-homePageBG via-homePageBG">
        <HomePage />
      </div>
      <div className="flex justify-center">
        <MovieList header="Top Review" numMovieShow={6} />
      </div>
    </div>
  );
};

export default Home;

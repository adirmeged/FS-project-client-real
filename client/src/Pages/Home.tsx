import { useNavigate } from "react-router-dom";
import MovieSideBarCard from "../components/Featured/MovieSideBarCard";
import Icons from "../components/Icons";
import MovieList from "../components/MovieList/MovieList";
import { defaultMovie } from "../DB/DefaultMovie";
import type { Movie } from "../Type";
const Home = () => {
  const navigate = useNavigate();
  const movies: Movie[] = defaultMovie;
  const moviesTopReview: Movie[] = [...defaultMovie, ...defaultMovie];

  return (
    <div className="bg-linear-to-b from-baseBG via-baseBG">
      <div className="flex flex-col mx-30">
        <div className="flex py-5 h-[110vh] ">
          <div className="relative flex">
            <div className="relative">
              <img
                src={movies[0].Image[1].url}
                className="w-[90vw] h-[80vh]  rounded-xl brightness-65 cursor-pointer"
                onClick={() => {
                  navigate("/MoviePage", { state: { movie: movies[0] } });
                }}
              />
              <img
                src={movies[0].Image[0].url}
                className="absolute top-[40vh] left-5 w-[15vw] h-[50vh] rounded-xl cursor-pointer"
                onClick={() => {
                  navigate("/MoviePage", { state: { movie: movies[0] } });
                }}
              />
              <div className="absolute rounded-xl top-[80vh] left-[20vw] text-3xl w-[25vw]">
                {movies[0].plot}
              </div>
            </div>
            <div className="px-10 py- ">
              <div className="flex items-center">
                <Icons.YellowPoint />
                <h1>Featured Choices</h1>
              </div>
              {movies.map((movie) => (
                <MovieSideBarCard movie={movie} />
              ))}
            </div>
          </div>      
        </div>
        <div className="flex justify-start">
          <MovieList
            header="Top Review"
            Movies={moviesTopReview}
            description="The highest rated movies"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

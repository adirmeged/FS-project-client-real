import { useNavigate } from "react-router-dom";
import MovieSideBarCard from "../components/Featured/MovieSideBarCard";
import Icons from "../components/Icons";
import MovieList from "../components/MovieList/MovieList";
import type { Movie } from "../Type";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [topReviewMovies, setTopReview] = useState<Movie[]>([]);
  const [lastMovie, setLastMovie] = useState<Movie>(movies[0]);

  useEffect(() => {
    const fetchAndSetMovies = async () => {
      try {
        axios.get<Movie[]>("http://localhost:3000/movies").then((response) => {
          setMovies(response.data);
        });
        axios
          .get<Movie>("http://localhost:3000/movies/lastMovie")
          .then((response) => {
            setLastMovie(response.data);
          });
        axios
          .get<Movie[]>("http://localhost:3000/movies/topReview")
          .then((response) => {
            setTopReview(response.data);
          });
      } catch (error) {
        console.error("ERROR", error);
      }
    };
    fetchAndSetMovies();
  }, []);

  if (movies.length == 0 || !lastMovie) {
    return <div> wait </div>;
  }
  console.error("ERROR", topReviewMovies);

  return (
    <div className="bg-linear-to-b from-baseBG via-baseBG">
      <div className="flex flex-col mx-30">
        <div className="flex py-5 h-[110vh] ">
          <div className="relative flex">
            <div className="relative">
              <img
                src={lastMovie.Image[1].url}
                className="w-[90vw] h-[80vh]  rounded-xl brightness-65 cursor-pointer"
                onClick={() => {
                  navigate(`/MoviePage/${lastMovie.movieId}`, {
                    state: { movie: lastMovie },
                  });
                }}
              />
              <img
                src={lastMovie.Image[0].url}
                className="absolute top-[40vh] left-5 w-[15vw] h-[50vh] rounded-xl cursor-pointer"
                onClick={() => {
                  navigate(`/MoviePage/${lastMovie.movieId}`, {
                    state: { movie: lastMovie },
                  });
                }}
              />
              <div className="absolute rounded-xl top-[80vh] left-[20vw] text-3xl w-[25vw]">
                {lastMovie.plot}
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
            Movies={[...topReviewMovies, ...topReviewMovies]}
            description="The highest rated movies"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

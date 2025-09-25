import type { Movie } from "../../Type";
import Icons from "../Icons";
import { useNavigate } from "react-router-dom";
interface MovieCradProps {
  movie: Movie;
  setIsRateActive: (value: boolean) => void;
  setRateMovie: (value: Movie) => void;
}
const MovieCrad = ({
  movie,
  setIsRateActive,
  setRateMovie,
}: MovieCradProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-[12vw] h-[48vh] bg-filterBG mt-10 rounded-xl cursor-pointer">
      <img
        src={movie.Image[0].url}
        className="w-[10vw] h-[33vh] rounded-xl mx-auto mt-2"
        onClick={() => {
          navigate(`/MoviePage/${movie.movieId}`, {
            state: { movie: movie },
          });
        }}
      />
      <div className="mx-2 mt-1 text-md line-clamp-1"> {movie.movieName} </div>

      <div className="flex mt-5 justify-between mx-2">
        <div className="flex items-center">
          <Icons.FullStar />
          <h1 className="text-xl ml-1">{movie.rating}</h1>
        </div>
        <div
          className="flex cursor-pointer items-center"
          onClick={() => {
            setIsRateActive(true);
            setRateMovie(movie);
          }}
        >
          <Icons.EmptyStar />
          <button className="ml-1 cursor-pointer">Rate</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCrad;

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
const navigate=useNavigate();
  return (
    <div className="relative w-4xs h-77 bg-custumGrayfilterBG mt-10 rounded-xl cursor-pointer" onClick={()=>navigate("/MoviePage")}>
      <img
        src={movie.Image[0].url}
        className="w-38 h-55 rounded-xl mx-auto mt-2"
      />
      <div className="mx-2 mt-1 text-lg"> {movie.movieName} </div>
      <div className="flex mt-2 items-center space-x-11 mx-2">
        <div className="flex items-center">
          <Icons.FullStar />
          <h1 className="text-xl ml-1">{movie.rating}</h1>
        </div>
        <div
          className="flex cursor-pointer"
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

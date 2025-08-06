import { useNavigate } from "react-router-dom";
import type { Movie } from "../../Type";

interface MovieSideBarProps {
  movie: Movie;
}

const MovieSideBarCard = ({ movie }: MovieSideBarProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-[18vw] h-[20vh] mt-5 ml-3 cursor-pointer"
      onClick={() => {
        navigate("/MoviePage", { state: { movie: movie } });
      }}
    >
      <img
        src={movie.Image[1].url}
        className="w-full h-full rounded-xl brightness-35"
      />
      <img
        src={movie.Image[0].url}
        className="absolute w-[5vw] h-[15vh] rounded-xl left-[1vw] top-5"
      />
      <div className="absolute rounded-xl left-[7vw] top-5 line-clamp-3">
        {movie.plot}
      </div>
    </div>
  );
};

export default MovieSideBarCard;

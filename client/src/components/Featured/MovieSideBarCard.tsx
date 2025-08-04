import type { Movie } from "../../Type";

interface MovieSideBarProps {
  movie: Movie;
}

const MovieSideBarCard = ({ movie }: MovieSideBarProps) => {
  return (
    <div className="relative w-3xs h-30 mt-5 ml-3 cursor-pointer">
      <img
        src={movie.Image[1].url}
        className="w-full h-full rounded-xl brightness-35"
      />
      <img
        src={movie.Image[0].url}
        className="absolute w-20 h-22 rounded-xl left-4 top-5"
      />
      <div className="absolute rounded-xl left-30 top-5">{movie.plot}</div>
    </div>
  );
};

export default MovieSideBarCard;

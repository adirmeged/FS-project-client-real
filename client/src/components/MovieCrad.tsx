import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";
import type { Movie } from "../Type";
interface MovieCradProps {
  movie: Movie;
  
}
const MovieCrad = ({movie}:MovieCradProps) => {
  return (
    <div className="w-43 h-77 bg-custumGrayfilterBG mt-10 rounded-xl">
          <img
            src={movie.Image[0].url}
            className="w-38 h-55 rounded-xl mx-auto mt-2"
          />
          <div className="mx-2 mt-1 text-lg"> {movie.movieName} </div>
          <div className="flex mt-2 items-center space-x-4 mx-2">
            <div className="flex items-center ">
              <FaStar className=" size-5 fill-yellow-400 stroke-yellow-400 " />
              <h1 className="text-xl ml-1">{movie.rating}</h1>
            </div>
            <div className="flex">
              <CiStar className=" size-6 fill-primaryWhite " />
              <button className="ml-1">Rate</button>
            </div>
            <div>
              <IoIosInformationCircle className="size-6 fill-primaryWhite " />
            </div>
          </div>
        </div>
  );
};

export default MovieCrad;

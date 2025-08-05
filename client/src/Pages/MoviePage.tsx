import Icons from "../components/Icons";
import MoviePresentation from "../components/MoviePage/MoviePresentation";
import ReviewBubble from "../components/MoviePage/ReviewBubble";
import Navbar from "../components/NavBar/Navbar";
import MovieList from "../components/MovieList/MovieList";
import type { Movie } from "../Type";
import { useLocation } from "react-router-dom";

const MoviePage = () => {
  const location = useLocation();
  const movie: Movie = location.state.movie;
  window.scrollTo(0, 0);
  
  const scroll = (x: string) => {
    const targetElement = document.getElementById(x);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="top">
      <Navbar />
      <div className="flex justify-center h-200 bg-linear-to-b from-homePageBG via-homePageBG">
        
        <div className="md:w-4xl sm:w-xl text-primaryGray ">
          <MoviePresentation movie={movie} />
          <hr id="Review" className="my-5" />
          <div className="flex text-primaryWhite text-xl items-center">
            <Icons.YellowPoint />
            {"User Reviews"}
          </div>
          <div className=" flex w-full gap-4 my-5">
            <ReviewBubble movie={movie} />
            <ReviewBubble movie={movie} />
          </div>
          <div id="MovieList">
            <MovieList header="More like this" numMovieShow={5} />
          </div>
        </div>

        <ul className="ml-10">
          <li
            onClick={() => scroll("top")}
            className="cursor-pointer mt-10 h hover:text-yellow-300"
          >
            Overiew
          </li>
          <li
            onClick={() => scroll("Review")}
            className="cursor-pointer mt-3 mb-3 hover:text-yellow-300"
          >
            User reviews
          </li>
          <li
            onClick={() => scroll("MovieList")}
            className="cursor-pointer hover:text-yellow-300"
          >
            More like this
          </li>
        </ul>

      </div>
    </div>
  );
};

export default MoviePage;

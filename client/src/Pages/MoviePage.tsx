import Icons from "../components/Icons";
import MoviePresentation from "../components/MoviePage/MoviePresentation";
import ReviewBubble from "../components/MoviePage/ReviewBubble";
import Navbar from "../components/NavBar/Navbar";
import MovieList from "../components/MovieList/MovieList";
import type { Movie } from "../Type";
interface MoviePageProps {
  movie: Movie;
}
const MoviePage = ({ movie }: MoviePageProps) => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center ">
        <div className="md:w-4xl sm:w-xl text-primaryGray">
          <MoviePresentation movie={movie} />
          <Icons.Dash />
          <div className="flex text-primaryWhite text-xl items-center">
            <Icons.YellowPoint />
            {"User Reviews"}
          </div>
          <div className=" flex w-full gap-4 my-5">
            <ReviewBubble movie={movie} />
            <ReviewBubble movie={movie} />
          </div>
          <MovieList header="More like this" numMovieShow={5} />
        </div>
        <div className="ml-10 ">
          <section>Overview</section>
          <section> user reviews</section>
          <section>Overview</section>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;

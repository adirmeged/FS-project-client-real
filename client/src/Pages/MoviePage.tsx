import Icons from "../components/Icons";
import MainSection from "../components/MoviePage/MainSection";
import ReviewBubble from "../components/MoviePage/ReviewBubble";
import MovieList from "../components/MovieList/MovieList";
import type { Movie } from "../Type";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MoviePage = () => {
  const links = [
    { text: "Overview", target: "top" },
    { text: "User reviews", target: "Review" },
    { text: "More like this", target: "Movielist" },
  ];
  const [movie, setMovie] = useState<Movie>();
  const [movies, setMovies] = useState<Movie[]>();

  const { movieId } = useParams<{ movieId: string }>();
  useEffect(() => {
    const fetchAndSetMovies = async () => {
      try {
        window.scrollTo(0, 0);
        axios
          .get<Movie>(`http://localhost:3000/movies/${movieId}`)
          .then((response) => {
            setMovie(response.data);
          });
        axios.get<Movie[]>(`http://localhost:3000/movies`).then((response) => {
          setMovies(response.data);
        });
      } catch (error) {
        console.error("ERROR", error);
      }
    };
    fetchAndSetMovies();
  }, []);

  if (!movie) return <div>Loading...</div>;
  if (!movies) return <div>Loading...</div>;

  const moviesMore: Movie[] = [...movies, movies[0], movies[1]];
  const scroll = (target: string) => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      if (target == "top") {
        window.scrollTo(0, 0);
      } else {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      id="top"
      className="flex justify-center h-200 bg-linear-to-b from-baseBG via-baseBG"
    >
      <div className="md:w-4xl sm:w-xl  text-primaryGray mt-4 ">
        <MainSection movie={movie} />

        <hr id="Review" className="my-5" />

        <div className="flex text-baseText text-xl items-center">
          <Icons.YellowPoint />
          {"User Reviews"}
        </div>

        <div className=" flex w-full gap-4 my-5">
          <ReviewBubble review={movie.review[0]} />
          <ReviewBubble review={movie.review[0]} />
        </div>

        <div id="Movielist">
          <MovieList
            header="More like this"
            Movies={moviesMore}
            description="more movie with the same genre"
          />
        </div>
      </div>

      <ul className="ml-10 mt-5">
        {links.map((link, index) => (
          <li key={index}>
            <a
              onClick={() => scroll(link.target)}
              className="cursor-pointer hover:text-yellow-300"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePage;

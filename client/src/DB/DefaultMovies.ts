import type { Movie } from "../Type";
import { v4 as uuidv4 } from "uuid";

export const defaultMovies: Movie[] = [
  {
    movieId: uuidv4(),
    movieName: "adir",
    plot: "aaaaaaaaaaaaaaa",
    movieLength: "2",
    publicationYear: " 2.4.2025 ",
  },
  {
    movieId: uuidv4(),
    movieName: "meged",
    plot: "aaaaaaaaaaaaaaa",
    movieLength: "2",
    publicationYear: " 2.4.2025 ",
  },
];

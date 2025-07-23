import type { Movie } from "../Type";
import { v4 as uuidv4 } from "uuid";
import InsideOutMain from "../DB/images/InsideOutMain.jpeg";
import InsideOutSec from "../DB/images/InsideOutSec.jpg";

export const defaultMovies: Movie[] = [
  {
    movieId: uuidv4(),
    movieName: "Inside Out",
    plot: "aaaaaaaaaaaaaaa",
    movieLength: "2",
    publicationYear: " 2.4.2025 ",
    Image:[
      { imagerId:uuidv4(),
  url: InsideOutMain,
  type: "main",},
  {
    imagerId:uuidv4(),
  url: InsideOutSec,
  type: "sec",
  }
    ]
  },
  {
    movieId: uuidv4(),
    movieName: "meged",
    plot: "aaaaaaaaaaaaaaa",
    movieLength: "2",
    publicationYear: " 2.5.2025 ",
  },
];

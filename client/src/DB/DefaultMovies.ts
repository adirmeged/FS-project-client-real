import type { Movie } from "../Type";
import { v4 as uuidv4 } from "uuid";

export const defaultMovies: Movie[] = [
  {
    movieId: uuidv4(),
    movieName: "Inside Out",
    plot: "aaaaaaaaaaaaaaa",
    movieLength: "2",
    publicationYear: " 2.4.2025 ",
    Image:[
      { imagerId:uuidv4(),
  url: "/images/InsideOutMain.jpeg",
  type: "main",},
  {
    imagerId:uuidv4(),
  url: "/images/InsideOutSec.jpg",
  type: "second ",
  }
    ]
  },
  {
    movieId: uuidv4(),
    movieName: "Mission Impossible",
    plot: "aaaaaaaaaaaaaaa",
    movieLength: "2",
    publicationYear: " 2.5.2025 ",
     Image:[
      { imagerId:uuidv4(),
  url: "/images/MissionImpossibleMain.jpg",
  type: "main",},
  {
    imagerId:uuidv4(),
  url: "/images/MissionImpossibleSec.jpg",
  type: "second ",
  }
    ]
  },
];

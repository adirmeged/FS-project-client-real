import type { Movie } from "../Type";
import { v4 as uuidv4 } from "uuid";

export const defaultMovie: Movie[] = [
  {
    movieId: uuidv4(),
    movieName: "Inside Out",
    plot: "Inside Out2 make us feel every emotion",
    movieLength: "2 h 34 m",
    publicationDate: " 2.4.2025 ",
    rating: 8,
    Image: [
      {
        imagerId: uuidv4(),
        url: "/images/InsideOutMain.jpeg",
        type: "main",
      },
      {
        imagerId: uuidv4(),
        url: "/images/InsideOutSec.jpg",
        type: "second ",
      },
    ],
    genre: ["Comedy", "Action", "Horror"],
    review: [
      {
        contect:
          "During development, Vite assumes thattr so root as base, so you can write code as if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file s  This means the browser supports most of the latest JavaScript and CSS features. For that",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
      {
        contect:
          "hi mt  anme is adir and i very kicc Use w-<number> utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
    ],
  },
  {
    movieId: uuidv4(),
    movieName: "Mission Impossible",
    plot: "aaaaaaaaaaaaaaa",
    movieLength: "2 h 34 m",
    publicationDate: " 2.5.2025 ",
    rating: 8,
    genre: ["Comedy", "Action", "Horror"],
    Image: [
      {
        imagerId: uuidv4(),
        url: "/images/MissionImpossibleMain.jpg",
        type: "main",
      },
      {
        imagerId: uuidv4(),
        url: "/images/MissionImpossibleSec.jpg",
        type: "second ",
      },
    ],
    review: [
      {
        contect:
          "hi mt  anme is adir and i very kicc Use w-<number> utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
      {
        contect:
          "hi mt  anme is adir and i very kicc Use w-<number> utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
    ],
  },
  {
    movieId: uuidv4(),
    movieName: "free soli",
    plot: "aaaaaaaaaaaaaaa",
    genre: ["Comedy", "Action", "Horror"],
    review: [
      {
        contect:
          "hi mt  anme is adir and i very kicc Use w-<number> utilihi mt  anme is adir and i very kicc Use w-<number> utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
      {
        contect:
          "hi mt  anme is adir and i very kicc Use w-<number> utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:",
        Title:
          "ome of mt very good movies amd i thinf we need to see all of the mobie ilue this",
        publicationDate: "20 feb 2024",
        rating: 10,
        userName: "userName",
      },
    ],
    rating: 8,
    movieLength: "2",
    publicationDate: " 2.5.2025 ",
    Image: [
      {
        imagerId: uuidv4(),
        url: "/images/freeSolimain.jpg",
        type: "main",
      },
      {
        imagerId: uuidv4(),
        url: "/images/freeSolisecond.jpg",
        type: "second ",
      },
    ],
  },
];

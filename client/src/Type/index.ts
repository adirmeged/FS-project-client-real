export interface Movie {
  movieId: string;
  movieName: string;
  plot: string;
  movieLength: string;
  publicationDate: string;
  Image: Image[];
  rating: number;
  genre: string[];
  review: Review[];
}

export interface User {
  userId: string;
  userName: string;
  email: string;
}

export interface Image {
  imagerId: string;
  url: string;
  type: string;
}

export interface Review {
  Title: string;
  contect: string;
  publicationDate: string;
  userName: string;
  rating: number;
}

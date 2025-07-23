export interface Movie {
  movieId: string;
  movieName: string;
  plot: string;
  movieLength: string;
  publicationYear: string;
  Image? : Image[];
}
export interface User {
  userId: string;
  userName: string;
  password: string;
  email: string;
}
export interface Image {
  imagerId: string;
  url: string;
  type: string;
}

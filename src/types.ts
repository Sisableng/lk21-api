type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface IMovies {
  _id: string;
  title: string;
  type: 'movie' | 'series';
  posterImg: string;
  rating: string;
  url: string;
  qualityResolution: string;
  genres: string[];
}

export interface IMovieDetails
  extends Omit<IMovies, 'url' | 'qualityResolution'> {
  quality: string;
  releaseDate: string;
  director: string;
  synopsis: string;
  duration: string;
  trailerUrl: string;
  countries: string[];
  casts: string[];
}

export interface IStreamSources {
  provider: string;
  url: string;
  resolutions: string[];
}

export interface ISetOfGenres {
  name: string;
  numberOfContents: number;
}

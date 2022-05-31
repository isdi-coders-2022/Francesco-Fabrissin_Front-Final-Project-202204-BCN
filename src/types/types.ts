export interface Record {
  title: String;
  artist: string;
  year: number;
  genre: string;
  price: number;
  conditions: string;
  youtube_url: string;
  image: string;
  owner: User;
}

export interface User {
  username: string;
  image: string;
}

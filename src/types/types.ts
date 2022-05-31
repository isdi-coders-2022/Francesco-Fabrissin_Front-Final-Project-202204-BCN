export interface Record {
  title: String;
  artist: String;
  year: Number;
  genre: String;
  price: Number;
  conditions: String;
  youtube_url: String;
  image: String;
  owner: User;
}

export interface User {
  username: String;
  image: String;
}

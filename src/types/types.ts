export interface IRecord {
  id?: string;
  title: string;
  artist: string;
  year: string;
  genre: string;
  conditions: string;
  image: string;
  price: string;
  youtube_url?: string;
  owner?: string;
}

export interface IUser {
  username: string;
  image: string;
}

export interface IUserCollection {
  id: string;
  username: string;
  image: string;
  location: string;
  genre: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface ResponseApiLogin {
  data: {
    token: string;
  };
}

export interface DecodeToken {
  username: string;
  image: string;
}

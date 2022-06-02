export interface Record {
  title: string;
  artist: string;
  year: number;
  genre: string;
  price: number;
  conditions: string;
  youtube_url: string;
  image: string;
  owner: IUser;
}

export interface IUser {
  username: string;
  image: string;
}

export interface IUserCollection {
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

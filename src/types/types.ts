export interface IRecord {
  id?: string;
  title: string;
  artist: string;
  year: string;
  genre: string;
  conditions: string;
  image: string;
  imageBackup?: string;
  price: string;
  youtube_url?: string;
  owner?: string;
}

export interface IRecordForm {
  id?: string;
  title: string;
  artist: string;
  year: number;
  genre: string;
  conditions: string;
  image: string;
  imageBackup?: string;
  price: number;
  youtube_url?: string;
  owner?: string;
}

export interface IUser {
  username: string;
  image: string;
  imageBackup: string;
  id: string;
}

export interface OtherUser {
  username: string;
  image: string;
  imageBackup: string;
}

export interface IUserCollection {
  id: string;
  username: string;
  image: string;
  imageBackup: string;
  location: string;
  genre: string;
  records?: string[];
}

export interface UsersState {
  collections: IUserCollection[];
  filter: string;
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
  imageBackup: string;
  id: string;
}

export interface UI {
  loading: boolean;
  modal: string;
}

export interface PaginationState {
  pages: number;
  currentPage: number;
  pagination: number;
}

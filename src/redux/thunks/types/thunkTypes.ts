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

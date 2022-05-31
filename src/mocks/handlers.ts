import { rest } from "msw";
import { mockUserLogin } from "./mockUser";

const mockToken = "token";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: mockToken }));
  }),

  rest.post(
    `${process.env.REACT_APP_API_URL}user/register`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          new_user: {
            username: mockUserLogin.username,
          },
        })
      );
    }
  ),
];

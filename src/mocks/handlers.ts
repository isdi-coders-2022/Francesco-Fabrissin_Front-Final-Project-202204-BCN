import { rest } from "msw";
import { mockRecords } from "./mockRecords";
import { mockUserLogin, mockUsers } from "./mockUser";

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

  rest.get(`${process.env.REACT_APP_API_URL}users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        usersCollection: mockUsers,
      })
    );
  }),

  rest.get(`${process.env.REACT_APP_API_URL}myCollection`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        records: mockRecords,
      })
    );
  }),
];

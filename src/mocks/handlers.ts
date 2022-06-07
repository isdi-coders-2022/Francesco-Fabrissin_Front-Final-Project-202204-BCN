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

  rest.post(`${process.env.REACT_APP_API_URL}myCollection`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        new_record: mockRecords[0],
      })
    );
  }),

  rest.delete(
    `${process.env.REACT_APP_API_URL}myCollection/1`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          deleted_record: mockRecords[0],
        })
      );
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}myCollection/4`,
    (req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),

  rest.put(
    `${process.env.REACT_APP_API_URL}myCollection/edit/1`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          updatedRecord: {
            title: "Neptune's Lairs",
            artist: "Drexciya",
            year: "2002",
            genre: "Electronic",
            price: "30",
            conditions: "VG",
            youtube_url: "https://www.youtube.com/watch?v=tF9rKnOqWfk",
            image:
              "https://i.discogs.com/MfE22D_C9EA8XEvN62IeSEjazP2mkpss7bVtzp614fg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzODY2/LTE1NDE0MzA3ODct/NzM3MC5qcGVn.jpeg",
            owner: "6294b3038ee0cb91581a8ce6",
            id: "1",
          },
        })
      );
    }
  ),

  rest.put(
    `${process.env.REACT_APP_API_URL}myCollection/edit/4`,
    (req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),
];

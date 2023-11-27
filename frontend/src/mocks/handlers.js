import { rest } from "msw";

const baseURL = ""; 
//Base URL from axios

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "brian",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
          "https://res.cloudinary.com/dgjrrvdbl/image/upload/v1/media/../default_profile_qdjgyp",
      })
      //Copy above from API /dj-rest-auth/user/
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
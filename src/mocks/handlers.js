import { rest } from "msw";

// Mocks - for the Mocks Server!
export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, cts) => {
    return res(
      ctx.json([
        {name: "Chocolate", imagePath: "/images/chcolate.png"},
        {name: "Vanilla", imagePath: "/images/vanilla.png"},
      ])
    )
  }),
];
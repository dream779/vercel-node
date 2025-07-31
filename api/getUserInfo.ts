import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { username = "World" } = req.query;
  return res.json({
    message: `Hello ${username}! Welcome!22`,
  });
}

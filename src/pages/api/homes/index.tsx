import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return res.status(200).json({ greeting: "Hello" });

    case "PUT":
      return res.status(200).json({ greeting: "Hello" });

    case "DELETE":
      return res.status(200).json({ greeting: "Hello" });

    default:
      return res.status(200).json({ greeting: "Hello" });
  }
}

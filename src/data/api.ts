export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    next: {
      revalidate: 60 * 60,
    },
  });
  if (!response.ok) {
    throw new Error("Somenting is wrong");
  }
  const data = await response.json();
  return data;
};

import type { NextApiRequest, NextApiResponse } from "next";

type GiphyResponse = {
  data: Array<{
    id: string;
    images: {
      fixed_height: {
        url: string;
      };
    };
    title: string;
  }>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;
  const apiKey = process.env.GIPHY_API_KEY;

  if (!query) {
    res.status(400).json({ error: "Query parameter is required" });
    return;
  }

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`
    );
    const data: GiphyResponse = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from Giphy API" });
  }
}

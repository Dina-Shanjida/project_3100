import { Router, Request, Response } from "express";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body || {};
  const query = (subject || message || "").trim();

  if (!query) {
    return res.status(400).json({ success: false, error: "Missing subject or message" });
  }

  const apiKey = process.env.BING_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, error: "Missing BING_API_KEY" });
  }

  try {
    const url = `https://api.bing.microsoft.com/v7.0/news/search?q=${encodeURIComponent(
      query
    )}&mkt=en-US&count=5&safeSearch=Strict`;

    const r = await fetch(url, {
      headers: { "Ocp-Apim-Subscription-Key": apiKey },
    });

    if (!r.ok) {
      const text = await r.text();
      return res.status(502).json({ success: false, error: "News API error", details: text });
    }

    const data: any = await r.json();

    const articles = (data?.value ?? []).slice(0, 5).map((a: any) => ({
      title: a.name,
      url: a.url,
      description: a.description ?? a.snippet ?? "",
      source: a.provider?.[0]?.name,
      publishedAt: a.datePublished,
    }));

    // TODO: save { name, email, subject, message } to DB if you want

    res.json({ success: true, articles });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to fetch articles" });
  }
});

export default router;

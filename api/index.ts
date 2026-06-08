// Vercel serverless function entry point.
//
// A `vercel.json` rewrite (`/api/(.*)` -> `/api`) funnels every /api/* request to
// this single function. Vercel preserves the original request URL (e.g.
// /api/exercises/categories), so the Express app's existing routes match unchanged.
// The SPA is served separately by Vercel's CDN from the Vite `dist` output.
//
// NOTE: a catch-all filename (`api/[...path].ts`) does NOT work here — Vercel's
// zero-config routing for non-Next frameworks compiles it to a single-segment
// matcher (`^/api/([^/]+)$`), so multi-segment paths like /api/exercises/search
// fall through to a 404. The rewrite above is the reliable pattern.
import app from "../server.js";

export default app;

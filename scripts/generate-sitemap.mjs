import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import fs from "fs";
import path from "path";

const SITE_URL = process.env.VITE_SITE_URL || "https://galeriemnc.com";
const PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID;
const DATASET = process.env.VITE_SANITY_DATASET || "production";
const API_VERSION = process.env.VITE_SANITY_API_VERSION || "2024-01-01";

if (!PROJECT_ID) {
  console.error("❌ VITE_SANITY_PROJECT_ID manquant dans .env.local");
  process.exit(1);
}

function joinUrl(base, p) {
  const clean = p.startsWith("/") ? p : `/${p}`;
  return `${base}${clean}`;
}

function xmlEscape(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function makeUrlTag(loc, { lastmod, changefreq, priority } = {}) {
  return `
  <url>
    <loc>${xmlEscape(loc)}</loc>
    ${lastmod ? `<lastmod>${xmlEscape(lastmod)}</lastmod>` : ""}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ""}
    ${priority ? `<priority>${priority}</priority>` : ""}
  </url>`;
}

// Appel Sanity via endpoint GROQ HTTP (pas besoin de @sanity/client)
async function sanityQuery(groq) {
  const query = encodeURIComponent(groq);
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${query}`;

  const res = await fetch(url, {
    headers: { "Accept": "application/json" },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Sanity query failed (${res.status}): ${text}`);
  }

  const json = await res.json();
  return json.result || [];
}

async function main() {
  // ✅ Routes statiques (adapte si besoin)
  const staticRoutes = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/artistes", changefreq: "weekly", priority: "0.9" },
    { path: "/a-propos", changefreq: "monthly", priority: "0.7" },
    { path: "/contact", changefreq: "monthly", priority: "0.6" },
  ];

  // ✅ Artistes dynamiques : /artistes/:slug
  const artists = await sanityQuery(`
    *[_type == "artist" && defined(slug.current)]{
      "slug": slug.current,
      "_updatedAt": _updatedAt
    }
  `);

  const urls = [];

  // Statiques
  for (const r of staticRoutes) {
    urls.push(
      makeUrlTag(joinUrl(SITE_URL, r.path), {
        changefreq: r.changefreq,
        priority: r.priority,
      })
    );
  }

  // Artistes
  for (const a of artists) {
    const loc = joinUrl(SITE_URL, `/artistes/${a.slug}`);
    const lastmod = a._updatedAt ? new Date(a._updatedAt).toISOString() : undefined;

    urls.push(
      makeUrlTag(loc, {
        lastmod,
        changefreq: "weekly",
        priority: "0.8",
      })
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

  const outPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf8");

  console.log(`✅ sitemap.xml généré → ${outPath}`);
  console.log(`📌 Statiques: ${staticRoutes.length} | Artistes: ${artists.length}`);
}

main().catch((e) => {
  console.error("❌ Erreur génération sitemap:", e.message || e);
  process.exit(1);
});

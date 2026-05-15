import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const projects = (await getCollection('projects')).sort(
    (a, b) => a.data.order - b.data.order,
  );

  const data = projects.map((p) => ({
    id: p.id,
    title: p.data.title,
    tagline: p.data.tagline,
    teaser: p.data.teaser,
    year: p.data.year,
    kind: p.data.kind,
    status: p.data.status,
    order: p.data.order,
    url: `https://lizm.dev/work/${p.id}/`,
    article_url: `https://lizm.dev/work/${p.id}/article/`,
    api_url: `https://lizm.dev/api/projects/${p.id}.json`,
    tldr: p.data.tldr,
    links: p.data.links,
    faq: p.data.faq,
  }));

  return new Response(
    JSON.stringify(
      {
        data,
        meta: {
          total: data.length,
          generated_at: new Date().toISOString(),
          self: 'https://lizm.dev/api/projects.json',
          documentation: 'https://lizm.dev/openapi.json',
        },
      },
      null,
      2,
    ),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=300, s-maxage=300',
        'X-RateLimit-Limit': '60',
        'X-RateLimit-Window': '60s',
        'X-RateLimit-Documentation': 'https://lizm.dev/openapi.json',
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
};

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const STATUSES = ['in-development', 'shipped', 'archived', 'concept'] as const;
type Status = (typeof STATUSES)[number];

// Map URL-friendly slugs to the schema's status values
const STATUS_MAP: Record<Status, string> = {
  'in-development': 'in development',
  shipped: 'shipped',
  archived: 'archived',
  concept: 'concept',
};

export async function getStaticPaths() {
  return STATUSES.map((s) => ({ params: { status: s } }));
}

export const GET: APIRoute = async ({ params }) => {
  const slug = params.status as Status;
  const projects = await getCollection('projects');
  const match = STATUS_MAP[slug];
  const filtered = projects
    .filter((p) => p.data.status === match)
    .sort((a, b) => a.data.order - b.data.order);

  return new Response(
    JSON.stringify(
      {
        data: filtered.map((p) => ({
          id: p.id,
          title: p.data.title,
          tagline: p.data.tagline,
          status: p.data.status,
          url: `https://lizm.dev/work/${p.id}/`,
          api_url: `https://lizm.dev/api/projects/${p.id}.json`,
        })),
        meta: {
          filter: { status: match },
          total: filtered.length,
          self: `https://lizm.dev/api/status/${slug}.json`,
          collection: 'https://lizm.dev/api/projects.json',
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
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
};

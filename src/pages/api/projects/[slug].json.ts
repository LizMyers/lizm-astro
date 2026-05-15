import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map((p) => ({ params: { slug: p.id }, props: { project: p } }));
}

export const GET: APIRoute = async ({ props }) => {
  const project = props.project as Awaited<ReturnType<typeof getCollection<'projects'>>>[number];
  const p = project.data;

  const body = {
    data: {
      id: project.id,
      title: p.title,
      tagline: p.tagline,
      teaser: p.teaser,
      year: p.year,
      kind: p.kind,
      status: p.status,
      order: p.order,
      url: `https://lizm.dev/work/${project.id}/`,
      article_url: `https://lizm.dev/work/${project.id}/article/`,
      tldr: p.tldr,
      links: p.links,
      faq: p.faq,
    },
    meta: {
      self: `https://lizm.dev/api/projects/${project.id}.json`,
      collection: 'https://lizm.dev/api/projects.json',
      documentation: 'https://lizm.dev/openapi.json',
      generated_at: new Date().toISOString(),
    },
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
      'X-RateLimit-Limit': '60',
      'X-RateLimit-Window': '60s',
      'X-RateLimit-Documentation': 'https://lizm.dev/openapi.json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts')).filter(post => post.id.startsWith('pl/'));
  return rss({
    title: 'Leszek Pomianowski lepo.co kanał RSS',
    description: 'Motyw inspirowany terminalem dla Astro',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/pl/posts/${post.id.replace('pl/', '')}/`,
    })),
    customData: `<language>pl</language>`,
  });
}

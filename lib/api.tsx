import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import { Collection, Frontmatter, Post } from './types';

function getPostDirectory(collection: Collection): string {
  return join(process.cwd(), `_${collection}`);
}

export function getCollectionSlugs(collection: Collection) {
  let res;
  try {
    res = fs.readdirSync(getPostDirectory(collection));
  } catch (e) {
    throw new Error('Collection not found');
  }
  return res;
}

export function parseSlug(slug: string) {
  return slug.replace(/\.mdx$/, '');
}

export async function getCollectionFileBySlug(
  collection: Collection,
  slug: string
): Promise<Post<Frontmatter>> {
  const filename = join(getPostDirectory(collection), `${parseSlug(slug)}.mdx`);

  try {
    const raw = fs.readFileSync(filename, 'utf-8');

    // Serialize the MDX content and parse the frontmatter
    const serialized = await serialize(raw, {
      parseFrontmatter: true,
    });

    // Typecast the frontmatter to the correct type
    const frontmatter = serialized.frontmatter as unknown as Frontmatter;

    // Return the serialized content and frontmatter
    return {
      frontmatter,
      serialized,
    };
  } catch (e) {
    return {
      frontmatter: null,
      serialized: null,
    };
  }
}

export async function getAllFilesInCollection(
  collection: Collection
): Promise<Frontmatter[]> {
  let slugs;
  try {
    slugs = getCollectionSlugs(collection);
  } catch (e) {
    console.log(e);
    return [];
  }

  let posts: Frontmatter[] = [];

  for (const slug of slugs) {
    let post = await getCollectionFileBySlug(collection, slug);
    if (!post || !post.frontmatter) continue;
    let matter = post.frontmatter as Frontmatter;
    posts.push(matter);
  }

  // sort posts by date in descending order
  if (collection == 'research') {
    posts.sort((post1, post2) => post1.order - post2.order);
  } else {
    posts.sort((post1, post2) => (post1.year > post2.year ? -1 : 1));
  }
  return posts;
}

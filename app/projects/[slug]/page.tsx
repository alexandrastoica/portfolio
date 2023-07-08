import MDXContent from '@/components/MDXContent/mdxContent';
import { Metadata } from 'next/types';
import { notFound } from 'next/navigation';
import { getCollectionFileBySlug } from '@/lib/api';
import { Collection } from '@/lib/types';
import Header from '@/components/Header/header';
import Link from 'next/link';
import { ResetIcon } from '@radix-ui/react-icons';

const COLLECTION: Collection = 'projects';

type BlogPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { frontmatter } = await getCollectionFileBySlug(
    COLLECTION,
    params.slug
  );
  return frontmatter ?? { title: '404' };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { frontmatter, serialized } = await getCollectionFileBySlug(
    COLLECTION,
    params.slug
  );
  if (!serialized || !frontmatter) {
    notFound();
  }

  return (
    <>
      <Header sticky title={frontmatter.title} />
      <article className="article__wrapper">
        <div className="article__back">
          <Link href="/">
            <ResetIcon /> Back
          </Link>
        </div>
        <h1>{frontmatter.title}</h1>
        <p className="lede">{frontmatter.description}</p>
        <ul className="article__tags">
          {frontmatter.keywords.map((tag, i) => (
            <li key={`tag-${i}`}>{tag}</li>
          ))}
        </ul>
        <MDXContent source={serialized} />
      </article>
    </>
  );
}

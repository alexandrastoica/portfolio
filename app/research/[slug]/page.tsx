import MDXContent from '@/components/MDXContent/mdxContent';
import { getCollectionFileBySlug } from '@/lib/api';
import { Collection } from '@/lib/types';
import { Metadata } from 'next/types';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Header from '@/components/Header/header';

const COLLECTION: Collection = 'research';

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
    return (
      <p>Article not found</p>
    )
  }

  return (
    <>
      <Header sticky title={frontmatter.title} />
      <article className="article__wrapper">
        <div className="article__toolbar">
          <div className="article__back">
            <Link href="/">
              <ArrowLeftIcon /> Back
            </Link>
          </div>
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

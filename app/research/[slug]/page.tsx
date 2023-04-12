import MDXContent from '@/components/MDXContent/mdxContent';
import { notFound } from 'next/navigation';
import { getCollectionFileBySlug } from '@/lib/api';
import { Collection } from '@/lib/types';
import { Metadata } from 'next/types';
import { ArrowLeftIcon, FileTextIcon } from '@radix-ui/react-icons';
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
    notFound();
  }

  return (
    <>
      <Header sticky title={frontmatter.title} />
      <article className="article__wrapper flow">
        <div className="article__toolbar">
          <div className="article__back">
            <Link href="/">
              <ArrowLeftIcon /> Back
            </Link>
          </div>
          <div className="article__links">
            <a href={frontmatter.links[0]}>
              <FileTextIcon />
            </a>
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
    // <>
    //   <section className="article__header">
    //     <div className="article__back">
    //       <Link href="/">
    //         <ArrowLeftIcon />
    //         Back
    //       </Link>
    //     </div>
    //     <div className="article__toolbar">
    //       <ThemeToggle />
    //       <a href={frontmatter.links[0]}>
    //         <FileTextIcon />
    //       </a>
    //     </div>
    //     <p>
    //       {frontmatter.label} | {frontmatter.date}
    //     </p>
    //     <h1>{frontmatter.title}</h1>
    //     <p className="lede">{frontmatter.description}</p>
    //     <ul className="article__tags">
    //       {frontmatter.keywords.map((tag, i) => (
    //         <li key={`tag-${i}`}>{tag}</li>
    //       ))}
    //     </ul>
    //   </section>

    //   <article className="article__wrapper flow">
    //     <MDXContent source={serialized} />
    //   </article>
    // </>
  );
}

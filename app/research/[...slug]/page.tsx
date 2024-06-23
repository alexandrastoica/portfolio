import { notFound } from 'next/navigation'
import { allResearch } from 'contentlayer/generated'

import { Metadata } from 'next'
import { Mdx } from '@/components/mdx-components'
import Header from '@/components/custom/header'
import Link from 'next/link'
import { ResetIcon } from '@radix-ui/react-icons'

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allResearch.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allResearch.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header sticky title={post.title} />
      <article className="grid-cols-article-layout grid gap-x-6 pt-20 *:col-start-2 *:col-end-2">
        <div>
          <Link href="/" className="flex items-center gap-1">
            <ResetIcon /> Back
          </Link>
        </div>
        <h1>{post.title}</h1>
        <p className="lede">{post.description}</p>
        <ul className="flex list-none flex-wrap gap-2 p-0">
          {post.keywords.map((tag, i) => (
            <li
              key={`tag-${i}`}
              className="font rounded-full bg-muted px-2 py-1 text-xs capitalize"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Mdx code={post.body.code} />
      </article>
    </>
  )
}

'use client';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';

const components = {
  Image,
};

export default function MDXContent({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) {
  return <MDXRemote {...source} components={components} />;
}

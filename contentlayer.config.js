import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    order: {
      type: 'number',
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    label: {
      type: 'string',
    },
    preview: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    year: {
      type: 'number',
    },
    keywords: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    links: {
      type: 'list',
      of: { type: 'string' },
    },
    context: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields,
}))

export const Research = defineDocumentType(() => ({
  name: 'Research',
  filePathPattern: `research/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    order: {
      type: 'number',
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    label: {
      type: 'string',
    },
    preview: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    year: {
      type: 'number',
    },
    keywords: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    links: {
      type: 'list',
      of: { type: 'string' },
    },
    context: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project, Research],
})

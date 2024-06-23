import Link from 'next/link'
import React from 'react'
import styles from './listItem.module.scss'
import type { Project, Research } from '.contentlayer/generated'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '../ui/separator'

export function ListItem({
  article,
  link,
  target = '_self',
}: {
  article: Project | Research
  link: string
  cta: string
  target?: '_blank' | '_self'
}) {
  return (
    <li>
      <Link
        href={{ pathname: link }}
        target={target}
        className="relative no-underline focus-visible:outline-1 focus-visible:outline-ring"
      >
        <Card className="flex items-center border-none shadow-lg shadow-accent/10 hover:-translate-y-1">
          <CardHeader className="pr-0">
            <span className="text-xs uppercase">{article.label}</span>
            <CardTitle className="max-w-[50ch] text-balance">
              {article.title}
            </CardTitle>
            {article.description ? (
              <CardDescription>{article.description}</CardDescription>
            ) : null}
          </CardHeader>
          <Separator className="flex-1 px-3" />
          <CardFooter className="flex items-center gap-2 p-0 px-4 text-xs">
            <p>{article.year ?? article.date}</p>
          </CardFooter>
        </Card>
      </Link>
    </li>
  )
}

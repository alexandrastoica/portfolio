import { Frontmatter } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import styles from './listItem.module.scss';

export function ListItem({
  article,
  link,
  target = '_self',
}: {
  article: Frontmatter;
  link: string;
  cta: string;
  target?: '_blank' | '_self';
}) {
  return (
    <li className={styles.item}>
      <Link href={{ pathname: link }} target={target}>
        <div className={styles.item__content}>
          <div className={styles.item__info}>
            <span className={styles.item__label}>{article.label}</span>
            <h3 className={styles.item__headline}>{article.title}</h3>
            {article.description && (
              <p className={styles.item__description}>{article.description}</p>
            )}
          </div>
          <span className={styles.item__separator}></span>
          <span className={styles.item__date}>
            {article.year ?? article.date}
          </span>
        </div>
      </Link>
    </li>
  );
}

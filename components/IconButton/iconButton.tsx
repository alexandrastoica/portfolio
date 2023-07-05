'use client';
import { ReactNode } from 'react';
import styles from './iconButton.module.scss';

type IconButtonProps = {
  icon?: ReactNode;
  href: string;
  tooltip: string;
};

export default function IconButton({ icon, href, tooltip }: IconButtonProps) {
  return (
    <a href={href} className={styles.button}>
      {icon}
      <div className={styles.tooltip}>
        <p>{tooltip}</p>
      </div>
    </a>
  );
}

import React from 'react';
import styles from './card.module.scss';

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <li className={styles.card}>
      <span>{children}</span>
      {/* <span className={styles.card__blur}></span> */}
    </li>
  );
}

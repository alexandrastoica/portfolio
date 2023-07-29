'use client';
import { ReactNode } from 'react';
import styles from './iconButton.module.scss';

type IconButtonProps = {
  icon?: ReactNode;
  tooltip: string;
  href?: string;
  target?: '_blank';
  onClickHandler?: () => void;
};

export default function IconButton({
  icon,
  href,
  tooltip,
  target,
  onClickHandler,
}: IconButtonProps) {
  return href ? (
    <a
      href={href}
      {...(target && { target, rel: 'noreferrer' })}
      className={styles.button}
      aria-label={tooltip}
    >
      {icon}
      <div className={styles.tooltip}>
        <p>{tooltip}</p>
      </div>
    </a>
  ) : (
    <button
      className={styles.button}
      aria-label={tooltip}
      {...(onClickHandler && { onClick: () => onClickHandler() })}
    >
      {icon}
      <div className={styles.tooltip}>
        <p>{tooltip}</p>
      </div>
    </button>
  );
}

'use client';
import Image from 'next/image';
import { useContext, useState } from 'react';
import LottieArrow from '../Lottie/lottie';
import { ThemeContext } from '../ThemeContext/themeContext';
import styles from './heroAnimation.module.scss';

export default function HeroAnimation() {
  const [isHovered, setIsHovered] = useState(false);
  let { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={styles.avatar}>
        <Image
          className={styles.img}
          alt=""
          src={
            isHovered
              ? '/memoji/wink.png'
              : theme == 'light'
              ? '/memoji/smile.png'
              : '/memoji/clouds.png'
          }
          width="64"
          height="64"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <div
          className={styles.msgbubble}
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <p>Explore my work</p>
        </div>
        <div className={styles.arrow} style={{ opacity: isHovered ? 1 : 0 }}>
          {isHovered && <LottieArrow />}
        </div>
      </div>
    </>
  );
}

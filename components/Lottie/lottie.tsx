'use client';
import Lottie from 'lottie-react';
import arrowAnimation from './arrow.json';

export default function LottieArrow() {
  return <Lottie animationData={arrowAnimation} autoPlay loop={false} />;
}

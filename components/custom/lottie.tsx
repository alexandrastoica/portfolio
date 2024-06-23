'use client'
import Lottie from 'lottie-react'
import arrowAnimation from './arrow.json'

export function LottieArrow() {
  return (
    <Lottie
      className="lottie-stroke"
      animationData={arrowAnimation}
      autoPlay
      loop={false}
    />
  )
}

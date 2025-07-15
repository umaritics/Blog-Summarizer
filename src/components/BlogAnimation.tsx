// src/components/BlogAnimation.tsx
'use client'

import Lottie from 'lottie-react'
import animationData from '@/animations/blog.json'

export default function BlogAnimation() {
  return (
    <div className="w-full max-w-[400px]">
      <Lottie animationData={animationData} loop={true} />
    </div>
  )
}

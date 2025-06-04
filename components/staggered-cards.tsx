"use client"

import type React from "react"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"

interface StaggeredCardsProps {
  children: React.ReactNode[]
  staggerDelay?: number
  className?: string
}

export default function StaggeredCards({ children, staggerDelay = 150, className = "" }: StaggeredCardsProps) {
  const { elementRef, visibleItems } = useStaggeredAnimation(children.length, staggerDelay)

  return (
    <div ref={elementRef} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out transform ${
            visibleItems[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

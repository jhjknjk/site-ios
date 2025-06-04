"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp"
  delay?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function AnimatedSection({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
  as: Component = "div",
}: AnimatedSectionProps) {
  const { elementRef, isVisible, animationClass } = useScrollAnimation(animation, delay)

  return (
    <Component ref={elementRef} className={`transition-all duration-700 ease-out ${animationClass} ${className}`}>
      {children}
    </Component>
  )
}

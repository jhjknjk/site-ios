"use client"

import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -100px 0px", triggerOnce = true } = options
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting

        if (isElementIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsIntersecting(true)
          if (triggerOnce) {
            setHasTriggered(true)
          }
        } else if (!triggerOnce) {
          setIsIntersecting(isElementIntersecting)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { elementRef, isIntersecting }
}

export function useScrollAnimation(animationType = "fadeInUp", delay = 0) {
  const { elementRef, isIntersecting } = useIntersectionObserver()
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setShouldAnimate(true)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isIntersecting, delay])

  return {
    elementRef,
    isVisible: shouldAnimate,
    animationClass: shouldAnimate ? `animate-${animationType}` : "opacity-0 translate-y-8",
  }
}

// Хук для последовательных анимаций
export function useStaggeredAnimation(itemCount: number, staggerDelay = 100) {
  const { elementRef, isIntersecting } = useIntersectionObserver()
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false))

  useEffect(() => {
    if (isIntersecting) {
      visibleItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => {
            const newState = [...prev]
            newState[index] = true
            return newState
          })
        }, index * staggerDelay)
      })
    }
  }, [isIntersecting, itemCount, staggerDelay, visibleItems])

  return { elementRef, visibleItems }
}

import React, { useState, useEffect, useRef } from 'react'
import { useIntersectionObserver } from './hook'

/**
 * Bare intersection observer wrapper
 *
 * @function
 * @param children: ...
 * @param intersectionConfig: intersection observer config object
 * @param onRevealCallback: Callback that takes the visible state and it's
 * wrapper ref
 * @param root: where the children is intersecting into
 */
interface Props {
  children: React.ReactNode
  onRevealCallback: (props: { visible: boolean; ref: HTMLDivElement }) => void
  fallback?: React.ReactNode
  intersectionConfig?: IntersectionObserverInit
  root?: HTMLElement
  [rest: string]: string | unknown
}
export const ObservedWrapper = ({
  children,
  intersectionConfig,
  onRevealCallback,
  fallback,
  root,
  ...rest
}: Props) => {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    onRevealCallback?.call({ visible }, { visible, ref: containerRef.current })
  }, [visible])

  const handleIntersect = ([
    { isIntersecting }
  ]: IntersectionObserverEntry[]) => {
    if (isIntersecting) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const { observe, unobserve } = useIntersectionObserver(
    handleIntersect,
    intersectionConfig || {
      threshold: 0.5,
      rootMargin: '0px'
    },
    root
  )

  useEffect(() => {
    const target = containerRef.current
    observe(target)

    return () => {
      unobserve(target)
    }
  }, [])

  if (fallback) {
    return (
      <div {...rest} ref={containerRef}>
        {visible ? children : fallback}
      </div>
    )
  }

  return (
    <div {...rest} ref={containerRef}>
      {children}
    </div>
  )
}

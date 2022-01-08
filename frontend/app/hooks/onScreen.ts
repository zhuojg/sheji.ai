import { useState, useEffect, RefObject } from 'react'

export function useOnScreen(ref: RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false)

  if (typeof IntersectionObserver === 'undefined') return false

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting),
  )

  useEffect(() => {
    ref.current && observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}

// src/components/scroll-to-top.tsx
import { useEffect } from 'react'
import { useLocation } from 'react-router'

export function ScrollToTop() {
  const { pathname } = useLocation()

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname triggers the scroll reset intentionally
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

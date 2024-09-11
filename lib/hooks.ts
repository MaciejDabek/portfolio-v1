import { useState, useEffect, useCallback } from 'react'

type ActiveSectionResult = {
  activeSection: string
  linkToSection: (sectionId: string) => void
}

export function useActiveSection(): ActiveSectionResult {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  const linkToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    setIsScrolling(true)
    setActiveSection(sectionId)
    setTimeout(() => setIsScrolling(false), 1000)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const observerOptions: IntersectionObserverInit = {
      rootMargin: '-45% 0px -35%',
      threshold: 0
    }

    const sections = document.querySelectorAll<HTMLElement>('section[id]')

    sections.forEach(section => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !isScrolling) {
          setActiveSection(section.id)
        }
      }, observerOptions)

      observer.observe(section)
      observers.push(observer)
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [isScrolling])

  return { activeSection, linkToSection }
}

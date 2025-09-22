import { useEffect, useState } from "react"
import {Typography} from "@/components/ui/typography.tsx";

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // 페이지의 h3, h4 헤딩 요소만 찾아서 목차 생성
    const headings = document.querySelectorAll("h3, h4, h5")
    const items: TocItem[] = []

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`
      if (!heading.id) {
        heading.id = id
      }

      items.push({
        id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1)),
      })
    })

    setTocItems(items)
  }, [])

  useEffect(() => {
    // 스크롤 위치에 따라 현재 활성 헤딩 감지
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0% -35% 0%",
      }
    )

    // 모든 헤딩 요소 관찰
    tocItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [tocItems])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  if (tocItems.length === 0) {
    return null
  }

  return (
    <div className="h-full w-50">
      <div className="sticky top-4">
        <Typography variant="caption" className="font-(--font-weight-bold) text-text-subtle">
          목차
        </Typography>
        
        <nav className="space-y-1">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`
                block w-full text-left text-xs py-1 px-2 rounded-md transition-colors cursor-pointer
                hover:bg-primary-soft hover:text-text
                ${item.level === 3 ? 'pl-2' : ''}
                ${item.level === 4 ? 'pl-4' : ''}
                ${item.level === 5 ? 'pl-6' : ''}
                ${item.level >= 6 ? 'pl-8' : ''}
                ${
                  activeId === item.id
                    ? 'bg-primary-muted text-text font-medium'
                    : 'text-text-subtle'
                }
              `}
            >
              {item.text}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

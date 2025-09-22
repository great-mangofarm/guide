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
    // 페이지의 h4, h5 헤딩 요소만 찾아서 목차 생성 (실제 ID가 있는 것만)
    const headings = document.querySelectorAll("h4[id], h5[id]")
    const items: TocItem[] = []

    headings.forEach((heading) => {
      if (heading.id) {
        items.push({
          id: heading.id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.charAt(1)),
        })
      }
    })

    setTocItems(items)
  }, [])

  useEffect(() => {
    if (tocItems.length === 0) return

    // 스크롤 위치에 따라 현재 활성 헤딩 감지
    const observer = new IntersectionObserver(
      (entries) => {
        // 현재 화면에 보이는 헤딩들
        const visibleEntries = entries.filter(entry => entry.isIntersecting)
        
        if (visibleEntries.length > 0) {
          // 가장 위에 있는 요소 찾기 (Y 좌표가 가장 작은 것)
          const topEntry = visibleEntries.reduce((prev, current) => {
            const prevY = prev.boundingClientRect.top
            const currentY = current.boundingClientRect.top
            return currentY < prevY ? current : prev
          })
          setActiveId(topEntry.target.id)
        } else {
          // 아무것도 보이지 않으면 스크롤 위치 기반으로 가장 가까운 것 선택
          const allElements = tocItems.map(item => document.getElementById(item.id)).filter(Boolean)
          const scrollTop = window.pageYOffset + 100 // 헤더 높이 고려
          
          let closestElement = null
          let closestDistance = Infinity
          
          allElements.forEach(element => {
            if (element) {
              const elementTop = element.offsetTop
              const distance = Math.abs(elementTop - scrollTop)
              if (distance < closestDistance) {
                closestDistance = distance
                closestElement = element
              }
            }
          })
          
          if (closestElement) {
            setActiveId(closestElement.id)
          }
        }
      },
      {
        rootMargin: "-100px 0% -60% 0%",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    )

    // 실제 ID가 있는 헤딩 요소들만 관찰
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
      const headerHeight = 56 // 헤더 높이 (h-14 = 3.5rem = 56px)
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      const offsetTop = elementTop - headerHeight - 16 // 헤더 높이 + 여유분
      
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
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

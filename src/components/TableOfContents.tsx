import { useEffect, useState } from "react"

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // 페이지의 모든 헤딩 요소를 찾아서 목차 생성
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
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
    <div className="fixed right-4 top-20 w-64 hidden xl:block z-10">
      <div className="bg-background border rounded-lg p-4 shadow-sm">
        <h4 className="text-sm font-semibold mb-3 text-foreground">
          이 페이지의 내용
        </h4>
        
        <nav className="space-y-1">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`
                block w-full text-left text-sm py-1 px-2 rounded transition-colors
                hover:bg-muted hover:text-foreground
                ${item.level === 1 ? 'pl-2' : ''}
                ${item.level === 2 ? 'pl-4' : ''}
                ${item.level === 3 ? 'pl-6' : ''}
                ${item.level >= 4 ? 'pl-8' : ''}
                ${
                  activeId === item.id
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'text-muted-foreground'
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

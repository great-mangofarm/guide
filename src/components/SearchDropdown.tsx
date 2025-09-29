import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { type SearchItem } from '@/lib/searchIndex'
import { Typography } from '@/components/ui/typography'
import { FileText, HelpCircle } from 'lucide-react'

interface SearchDropdownProps {
  results: SearchItem[]
  isOpen: boolean
  onClose: () => void
  query: string
}

export function SearchDropdown({ results, isOpen, onClose, query }: SearchDropdownProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const navigate = useNavigate()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 검색 결과가 변경되면 선택 인덱스 리셋
  useEffect(() => {
    setSelectedIndex(-1)
  }, [results])

  // 키보드 네비게이션 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || results.length === 0) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev))
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev))
          break
        case 'Enter':
          e.preventDefault()
          if (selectedIndex >= 0 && selectedIndex < results.length) {
            handleResultClick(results[selectedIndex])
          }
          break
        case 'Escape':
          e.preventDefault()
          onClose()
          break
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, results, selectedIndex, onClose])

  const handleResultClick = (item: SearchItem) => {
    if (item.anchor) {
      // 같은 페이지인 경우 anchor로 스크롤
      if (window.location.pathname === item.path) {
        scrollToAnchor(item.anchor, item.type)
        onClose()
        return
      }
      // 다른 페이지인 경우 URL에 hash 추가하여 이동
      navigate(`${item.path}#${item.anchor}`)
    } else {
      navigate(item.path)
    }
    onClose()
  }

  const scrollToAnchor = (anchor: string, type: string) => {
    // FAQ인 경우 accordion을 먼저 열어야 함
    if (type === 'faq') {
      // FAQ 페이지의 accordion 상태를 직접 제어할 수 있도록 이벤트 발송
      const accordionEvent = new CustomEvent('openAccordion', { 
        detail: { value: anchor } 
      })
      window.dispatchEvent(accordionEvent)
      
      // accordion이 열리는 애니메이션을 기다린 후 스크롤
      setTimeout(() => {
        scrollToElement(anchor)
      }, 500)
      return
    }
    
    // 일반 heading인 경우 바로 스크롤
    scrollToElement(anchor)
  }

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    
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

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)
    
    return (
      <>
        {parts.map((part, index) => 
          regex.test(part) ? (
            <mark key={index} className="bg-yellow-200 text-gray-900 rounded px-0.5">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    )
  }

  const getIcon = (type: string) => {
    return type === 'faq' ? (
      <HelpCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
    ) : (
      <FileText className="h-4 w-4 text-gray-500 flex-shrink-0" />
    )
  }

  if (!isOpen || results.length === 0) return null

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-md shadow-lg max-h-96 overflow-y-auto z-50"
    >
      {results.map((item, index) => (
        <div
          key={item.id}
          className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 hover:bg-gray-50 ${
            selectedIndex === index ? 'bg-blue-50 border-blue-200' : ''
          }`}
          onClick={() => handleResultClick(item)}
        >
          <div className="flex items-start gap-3">
            {getIcon(item.type)}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Typography variant="caption" className="text-blue-600 font-medium">
                  {item.menuPath}
                </Typography>
                {item.type === 'heading' && item.level && (
                  <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                    H{item.level}
                  </span>
                )}
              </div>
              <Typography variant="small" className="font-medium text-gray-900 line-clamp-1">
                {highlightText(item.title, query)}
              </Typography>
              <Typography variant="helper" className="text-gray-600 line-clamp-2 mt-1">
                {highlightText(item.content, query)}
              </Typography>
            </div>
          </div>
        </div>
      ))}
      
      {results.length > 0 && (
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
          <Typography variant="helper" className="text-gray-500 text-center">
            {results.length}개의 검색 결과 • ↑↓ 키로 이동 • Enter로 선택
          </Typography>
        </div>
      )}
    </div>
  )
}

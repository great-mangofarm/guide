import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import SmallLogo from "@/assets/mobile-logo.svg?react"
import { Typography } from "@/components/ui/typography.tsx"
import { useLocation } from "react-router-dom"
import { searchContent, type SearchItem } from "@/lib/searchIndex"
import { SearchDropdown } from "@/components/SearchDropdown"

export const Header = () => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchItem[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  
  // path에 따라 앱 이름과 역할 결정
  const getAppInfo = () => {
    const path = location.pathname
    
    if (path.includes('/guide/epc/admin')) {
      return { app: 'EPC 업무지원시스템', role: '(에버온)' }
    }
    if (path.includes('/guide/epc/company')) {
      return { app: 'EPC', role: 'Company' }
    }
    
    return { app: 'Guide', role: null }
  }

  const { app, role } = getAppInfo()
  const title = role ? `${app} ${role} Guide` : `${app} Docs`

  // 검색어 변경 시 debounce 적용하여 검색 실행
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        const results = searchContent(searchQuery)
        setSearchResults(results)
        setIsSearchOpen(results.length > 0)
      } else {
        setSearchResults([])
        setIsSearchOpen(false)
      }
    }, 200) // 200ms debounce

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  // 검색창 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
        setIsSearchFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 검색어 입력 처리
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // 검색창 포커스 처리
  const handleSearchFocus = () => {
    setIsSearchFocused(true)
    if (searchQuery.trim() && searchResults.length > 0) {
      setIsSearchOpen(true)
    }
  }

  // 검색 드롭다운 닫기
  const handleCloseSearch = () => {
    setIsSearchOpen(false)
    setSearchQuery("")
    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  // Escape 키 처리
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseSearch()
    }
  }

  return (
    <header className="fixed w-full border-b border-border bg-background z-20">
      <div className="container relative flex h-14 max-w-screen-2xl items-center">
        {/* Logo */}
        <div className="ml-4 mr-6 flex items-center space-x-2">
          <SmallLogo className="w-7 h-7" />
          <Typography variant="smallBold">
            {title}
          </Typography>
        </div>
        
        {/* Search - 화면 중앙에 절대 위치 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div ref={searchRef} className="relative w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-text-subtle" />
            <Input
              ref={inputRef}
              type="search"
              placeholder="검색어를 입력하세요."
              className={`pl-8 w-full transition-all duration-200 ${
                isSearchFocused || isSearchOpen 
                  ? 'ring-2 ring-blue-500 border-blue-500' 
                  : ''
              }`}
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              onKeyDown={handleKeyDown}
            />
            
            {/* 검색 결과 드롭다운 */}
            <SearchDropdown
              results={searchResults}
              isOpen={isSearchOpen}
              onClose={handleCloseSearch}
              query={searchQuery}
            />
          </div>
        </div>
        
        {/* Right side - empty for now */}
        <div className="flex items-center space-x-2 ml-auto">
        </div>
      </div>
    </header>
  )
}

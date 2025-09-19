import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import SmallLogo from "~public/assets/logos/mobile-logo.svg?react"
import {Typography} from "@/components/ui/typography.tsx";

export const Header = () => {
  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <div className="mr-6 flex items-center space-x-2">
          <SmallLogo />
          <Typography variant="smallBold">
            Guide Docs
          </Typography>
        </div>
        
        {/* Search */}
        <div className="flex flex-1 items-center justify-center px-6">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search documentation..."
              className="pl-8"
            />
          </div>
        </div>
        
        {/* Right side - empty for now */}
        <div className="flex items-center space-x-2">
        </div>
      </div>
    </header>
  )
}

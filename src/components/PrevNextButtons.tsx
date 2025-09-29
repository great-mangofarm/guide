import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import {Typography} from "@/components/ui/typography.tsx";

interface PageLink {
  href: string
  title: string
}

interface PrevNextButtonsProps {
  previousPage?: PageLink
  nextPage?: PageLink
}

export function PrevNextButtons({ previousPage, nextPage }: PrevNextButtonsProps) {
  return (
    <div className="flex justify-between items-center gap-4 mt-15 py-8 border-t border-border">
      {/* 이전 페이지 버튼 */}
      <div>
        {previousPage ? (
          <Button variant="ghost" asChild>
            <Link to={previousPage.href} className="flex flex-col items-start !gap-0.5 group">
                <Typography variant="caption" className="text-text-subtle group-hover:text-gray-950">이전</Typography>
                <div className="flex gap-2 items-center group-hover:text-gray-950">
                    <ArrowLeft className="h-4 w-4 text-text-subtle group-hover:text-gray-950" />
                    {previousPage.title}
                </div>

            </Link>
          </Button>
        ) : (
          <div />
        )}
      </div>

      {/* 다음 페이지 버튼 */}
      <div>
        {nextPage ? (
            <Button variant="ghost" asChild>
                <Link to={nextPage.href} className="flex flex-col items-start !gap-0.5 group">
                    <Typography variant="caption" className="text-text-subtle group-hover:text-gray-950">다음</Typography>
                    <div className="flex gap-2 items-center group-hover:text-gray-950">
                        {nextPage.title}
                    <ArrowRight className="h-4 w-4 text-text-subtle group-hover:text-gray-950" />
                    </div>
                </Link>
            </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

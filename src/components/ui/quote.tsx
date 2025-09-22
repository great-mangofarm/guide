import * as React from "react"
import { cn } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import { cva, type VariantProps } from "class-variance-authority"

const quoteVariants = cva(
    "bg-secondary-soft px-3 py-3 mb-2 flex gap-3",
    {
      variants: {
        variant: {
          default: "",
          italic: "italic",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
)

interface QuoteProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof quoteVariants> {
  children: React.ReactNode
  title?: string
}

export function Quote({ className, variant, children, title, ...props }: QuoteProps) {
  return (
      <div
          className={cn(quoteVariants({ variant }), className)}
          {...props}
      >
        {/* 세로 라인 */}
        <div className="w-0.5 bg-text shrink-0" />

        <div className="flex-1 space-y-1">
          {title && (
            <Typography variant="smallBold">
              {title}
            </Typography>
          )}
          <Typography variant="caption" className={cn( "leading-5 break-keep", variant === "italic" && "italic")}>
            {children}
          </Typography>
        </div>
      </div>
  )
}

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-text-inverse",
        outline: "bg-background border border-primary text-primary",
        secondary: "bg-secondary text-text-inverse",
        "secondary-outline": "bg-background border border-secondary text-secondary",
        error: "bg-error text-text-inverse",
        "error-outline": "bg-background border border-error text-error",
        warning: "bg-warning text-text-inverse",
        "warning-outline": "bg-background border border-warning text-warning",
        subtle: "bg-text-subtle text-text-inverse",
        "subtle-outline": "bg-background border border-text-subtle text-text-subtle",
      },
      size: {
        default: "px-2 py-0.5 rounded-(--radius-md) text-xs font-(--font-weight-medium)",
        large: "px-3 py-1 rounded-(--radius-lg) text-sm font-(--font-weight-medium)",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Badge({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Badge }

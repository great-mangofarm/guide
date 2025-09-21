import { cva, type VariantProps } from "class-variance-authority"
import { Info, CircleCheck, TriangleAlert, CircleX } from "lucide-react"
import { cn } from "@/lib/utils"

const calloutVariants = cva(
  "flex items-start gap-3 p-4 rounded-lg border",
  {
    variants: {
      variant: {
        info: "[background-color:var(--color-primary-soft)] [border-color:var(--color-primary-light)] [color:var(--color-primary-strong)]",
        success: "[background-color:var(--color-primary-soft)] [border-color:var(--color-primary-light)] [color:var(--color-primary-strong)]", // 임시로 primary 사용
        warning: "[background-color:var(--color-warning-100)] [border-color:var(--color-warning-400)] [color:var(--color-warning-900)]",
        error: "[background-color:var(--color-error-soft)] [border-color:var(--color-error-light)] [color:var(--color-error-strong)]",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

const iconVariants = cva("flex-shrink-0 w-5 h-5 mt-0.5", {
  variants: {
    variant: {
      info: "[color:var(--color-primary)]",
      success: "[color:var(--color-primary)]", // 임시로 primary 사용
      warning: "[color:var(--color-warning-800)]",
      error: "[color:var(--color-error)]",
    },
  },
  defaultVariants: {
    variant: "info",
  },
})

const iconMap = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleX,
}

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {}

export function Callout({ className, variant = "info", children, ...props }: CalloutProps) {
  const IconComponent = iconMap[variant || "info"]
  
  return (
    <div
      className={cn(calloutVariants({ variant }), className)}
      {...props}
    >
      <IconComponent className={cn(iconVariants({ variant }))} />
      <div className="flex-1 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  )
}

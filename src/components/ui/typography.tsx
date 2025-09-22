import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { JSX } from "react";
import {cn} from "@/lib/utils.ts";

const typographyVariants = cva("text-text", {
    variants: {
        variant: {
            h1: "text-(length:--font-size-h1-lg) font-(--font-weight-extrabold)",
            h2: "text-(length:--font-size-h2) font-(--font-weight-bold)",
            h3: "text-(length:--font-size-h3) font-(--font-weight-bold) leading-(--line-height-h3)",
            h4: "text-(length:--font-size-h4) font-(--font-weight-semibold) leading-(--line-height-h4)",
            h5: "text-lg font-(--font-weight-semibold)",
            p: "typo-p",
            lead: "text-(length:--font-size-lead) ",
            large: "text-lg font-(--font-weight-medium)",
            medium: "text-(length:--font-size-p) font-(--font-weight-medium)",
            smallBold: "text-sm font-(--font-weight-bold) leading-(--line-height-sm)",
            small: "text-sm font-(--font-weight-regular) leading-(--line-height-sm)",
            label: "typo-label",
            link: "typo-link",
            caption: "text-xs font-(--font-weight-medium)",
            helper: "typo-helper",
            monoNum: "typo-mono-num",
            monoNumSm: "typo-mono-num-sm",
        },
    },
    defaultVariants: {
        variant: "p",
    },
});

type Variant = VariantProps<typeof typographyVariants>["variant"];
type AsElement = keyof JSX.IntrinsicElements;

const defaultTagByVariant = (v?: Variant): AsElement => {
    switch (v) {
        case "h1":
            return "h1";
        case "h2":
            return "h2";
        case "h3":
            return "h3";
        case "h4":
            return "h4";
        case "h5":
            return "h5";
        case "label":
            return "label";
        case "link":
            return "a";
        default:
            return "p";

    }
};

type PolymorphicProps<E extends AsElement, P> = P &
    Omit<React.ComponentPropsWithoutRef<E>, keyof P | "as" | "asChild"> & {
    as?: E;
    asChild?: boolean;
};

export type TypographyProps<E extends AsElement = "p"> = PolymorphicProps<E, VariantProps<typeof typographyVariants> & { "data-slot"?: string; className?: string }>;

/** 구현부: ref는 HTMLElement로 고정, any 미사용 */
const TypographyImpl = React.forwardRef<HTMLElement, TypographyProps<AsElement>>(({ as, asChild = false, className, variant, ...props }, ref) => {
    const tag = as ?? defaultTagByVariant(variant);
    const Comp: React.ElementType = asChild ? Slot : tag;

    return <Comp ref={ref} data-slot="typography" className={cn(typographyVariants({ variant }), className)} {...(props as Record<string, unknown>)} />;
});

TypographyImpl.displayName = "Typography";

type PolymorphicComponent = <E extends AsElement = "p">(p: TypographyProps<E> & { ref?: React.Ref<HTMLElement> }) => JSX.Element;

export const Typography = TypographyImpl as unknown as PolymorphicComponent;

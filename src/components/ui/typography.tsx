import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { JSX } from "react";
import {cn} from "@/lib/utils.ts";

const typographyVariants = cva("text-text", {
    variants: {
        variant: {
            h1: "text-(length:--font-size-h1-lg) font-(--font-weight-extrabold)",
            h2: "typo-h2",
            h3: "text-(length:--font-size-h3) font-(--font-weight-bold)",
            h4: "text-(length:--font-size-h4) font-(--font-weight-semibold)",
            p: "typo-p",
            lead: "typo-lead",
            large: "typo-large",
            smallBold: "typo-small-bold",
            small: "text-(length:--font-size-small) font-(--font-weight-medium)",
            label: "typo-label",
            link: "typo-link",
            caption: "typo-caption",
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

import React from "react";
import { ButtonSize, ButtonVariant } from "./button.types";

interface ButtonFreeStyleProps {
    onClick?: () => void;
    size?: ButtonSize;
    variant?: ButtonVariant;
    children: React.ReactNode;
}

export function ButtonFreeStyle({
    children,
    onClick,
    size = "md",
    variant = "primary",
}: ButtonFreeStyleProps) {

    const sizeClass: Record<ButtonSize, string> = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    }

    const variantClass: Record<ButtonVariant, string> = {
        primary: "bg-accent text-white",
        secondary: "bg-accent-light text-accent",
        ghost: "bg-transparent border border-accent text-accent",
    }

    return (
        <button className={`${sizeClass[size]} ${variantClass[variant]} w-full rounded-md`} onClick={onClick}>
            {children}
        </button>
    )
}
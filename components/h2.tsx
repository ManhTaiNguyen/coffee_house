import { BaseProps } from '@/lib/types'
import { cn } from "@/lib/utils";
import React from 'react'

export default function H2({ children, className }: BaseProps) {
    const words = children?.toString().split(" ")
    const lastWord = words?.pop()
    const remainingText = words?.join(" ")
    return (
        <h2 className={cn("text-3xl font-semibold font-poppins", className)}>
        {remainingText}{" "}
            <span className="border-b-4 border-primary">
        {lastWord}</span>
        </h2>
    )
}

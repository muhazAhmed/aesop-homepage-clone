import { ReactElement } from "react"

export type BorderBottomProp = {
    bgColor?: string
}

export type ButtonProp = {
    label: string
    onClick?: () => void
    disabled?: boolean
    className?: string
    variant?: "primary" | "secondary"
    Icon?: ReactElement
    loading?: boolean
    iconPosition?: "left" | "right"
    iconClassName?: string
    style?: React.CSSProperties
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handleNext: () => void;
    handlePrev: () => void;
    isPlaying: boolean;
    togglePlayPause: () => void;
}
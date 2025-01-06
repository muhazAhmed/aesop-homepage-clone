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

export interface ImageWithDescriptionProps {
    data: ImageWithDescriptionDataProp
    ImagePosition: "left" | "right"
    ImageHasSlider?: boolean
}

type ImageWithDescriptionDataProp = {
    title: string
    subTitle: string
    content: string
    imgUrl?: string
    videoUrl?: string
    buttonLabel: string
}

export interface ListSectionProps {
    title: string;
    items?: { text: string; href: string }[];
    isText?: boolean;
    content?: string;
    learnMoreHref?: string;
    className?: string
}

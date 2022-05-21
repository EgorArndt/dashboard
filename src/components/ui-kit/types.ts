import React from 'react'

export type DefaultProps = {
    as?: keyof React.ReactHTML
    children?: Children<React.ReactNode> 
    className?: string
    style?: React.CSSProperties
    ref?: React.RefObject<HTMLElement>
}
export type ResponsiveSize = 's' | 'm' | 'l'
export type SupportsArray<T> = T | T[]
export type Component<Props> = React.ComponentClass<Props> | React.FC<Props>
export type Element<Props> = React.ReactElement<Props>
export type Children<Props> = SupportsArray<Props>

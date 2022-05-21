import { memo, forwardRef, createElement, cloneElement, RefObject, ReactNode, ReactElement } from 'react'
import cn from 'classnames'

import { ResponsiveSize, DefaultProps } from '../types'

export type ButtonBaseProps = {
    before?: ReactElement
    after?: ReactElement
    text?: string | ReactNode
    variant?: 'ghost' | 'contained' | 'outlined' 
    size?: ResponsiveSize
    sizeS?: ResponsiveSize
    sizeM?: ResponsiveSize
    sizeL?: ResponsiveSize
    ref?: RefObject<HTMLButtonElement | HTMLLinkElement>
    [key: string]: unknown
  } & DefaultProps

const ButtonBase = memo(forwardRef(({ 
    as = 'button',
    before,
    after,
    text, 
    children = text,
    size = 'm',
    className,
    ...props
}: ButtonBaseProps, ref) => 
    createElement(
        as,
        {   
            children: <>
                {before && cloneElement(before, { ...before.props })}
                    {children}
                {after && cloneElement(after, { ...after.props })}
            </>,
            className: cn(
                'btn-core',
                {
                    'btn-s': size === 's',
                    'btn-m': size === 'm',
                    'btn-l': size === 'l',
                },
                className,
            ),
            ref,
            ...props
        }
    )
))

export default ButtonBase
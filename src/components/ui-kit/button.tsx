import { memo, forwardRef, RefObject, ReactNode, MouseEventHandler,  } from 'react'
import cn from 'classnames'

import { ResponsiveSize, DefaultProps } from './types'

export type ButtonProps = {
    type?: 'button' | 'submit' | 'reset'
    onClick?: MouseEventHandler<HTMLButtonElement>
    text?: string | ReactNode
    variant?: 'ghost' | 'contained' | 'outlined' 
    size?: ResponsiveSize
    sizeS?: ResponsiveSize
    sizeM?: ResponsiveSize
    sizeL?: ResponsiveSize
    ref?: RefObject<HTMLButtonElement>
  } & DefaultProps

const Button = memo(forwardRef(({ 
    text, 
    children = text,
    type = 'button',
    size = 'm',
    className,
    ...props
}: ButtonProps, ref) => 
    <button 
        type={type} 
        className={cn(
            'btn-core',
            {
                'btn-s': size === 's',
                'btn-m': size === 'm',
                'btn-l': size === 'l',
            },
            className,
        )} 
        ref={ref as RefObject<HTMLButtonElement>}
        {...props}
    >
        {children}
    </button>
))

export default Button
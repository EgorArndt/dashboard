import { forwardRef } from 'react'

import ButtonBase, { ButtonBaseProps} from './button/base'

export type LinkProps = {
    to: string
    newTab?: boolean
} & ButtonBaseProps

const Link = forwardRef(({ to, newTab, ...props }: LinkProps, ref) => 
    <ButtonBase 
        as='a' 
        href={to} 
        target={newTab ? '_blank' : null}
        rel={newTab ? 'noopener noreferrer' : null}
        ref={ref} 
        {...props} 
    />
)

export default Link
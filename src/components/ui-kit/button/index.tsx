import { forwardRef, MouseEventHandler } from 'react'

import ButtonBase, { ButtonBaseProps } from './base'

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset'
    onClick?: MouseEventHandler<HTMLButtonElement>
} & ButtonBaseProps

const Button = forwardRef(({ type = 'button', ...props }: ButtonProps, ref) => 
    <ButtonBase type={type} ref={ref} {...props} />
)

export default Button
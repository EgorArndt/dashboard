import { forwardRef, RefObject } from 'react'
import cn from 'classnames'

import { DefaultProps } from './types'

const List = forwardRef(({ children, className, ...props }: DefaultProps, ref) => 
    <ul className={cn('list', className)} {...props} ref={ref as RefObject<HTMLUListElement>}>
        {children}
    </ul>
)

export default List
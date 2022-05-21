import { ReactElement } from 'react'
import cn from 'classnames'

import { List } from '../../ui-kit'
import { capitalize } from '../../../utils'

type NavSectionProps = {
    heading?: string
    list: Array<ReactElement>
    className?: string
}

const NavSection = ({ heading, className, list, ...props }: NavSectionProps) => 
    <section 
        className={cn('flex column w-80 mt-2', className)}
        aria-labelledby={heading || 'nav-section'}
        {...props}
    >
        {heading && <h4 
            id={heading}
            className='caption uppercase weight-800 color-gray-600 bb'
            style={{ paddingBottom: 8, marginBottom: 15 }}
        >
            {capitalize(heading)}
        </h4>}
        <List className='w-100'>
            {list.map((item, idx) => 
                <li key={idx}>
                    {item}
                </li>
            )}
        </List>
    </section>

export default NavSection
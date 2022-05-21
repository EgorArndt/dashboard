import { cloneElement } from 'react'
import { CgLinear } from 'react-icons/cg'
import cn from 'classnames'

import NavSection from './NavSection'
import { Button, Link, Accordion, List } from '../../ui-kit'
import { navSections } from './constants'

const Nav = () => {

    return (
        <nav className='nav br flex column'>
            <header className='flex center palette-gray-100 p-1'>
                <span className='flex center gap-1 color-primary-600 weight-600'>
                    <CgLinear /> Marketscale
                </span>
            </header>
            <div className='flex column center'>
                {navSections.map(({ heading = '', list }, idx) => {
                    const listToJsxArr = list.map(item => {
                        const { text, before: BIcon } = item
                        const isAccordion = ['menu'].includes(heading)
                        const itemWithOwnProps = isAccordion 
                            ? <Button className='p-1' /> 
                            : <Link to='/' className='p-05 color-gray-300 dark-h' /> 
                        const itemWithCommonProps = (key: string, o?: boolean) => cloneElement(
                            itemWithOwnProps, 
                            { 
                                key, 
                                text, 
                                before: <BIcon />, 
                                className: cn(
                                    'btn-ghost gap-1 w-100 x-left pointer w-100',
                                    itemWithOwnProps.props.className,
                                    {   
                                        'palette-primary-500 color-base-100': o,
                                        'color-gray-300 dark-h': !o
                                    }
                                )
                            }
                        )

                        return isAccordion 
                            ? <Accordion 
                                key={text} 
                                trigger={(open) => itemWithCommonProps('', open)}
                              >
                                <List>
                                    {item.submenu?.map(i => 
                                        <li key={i.text}>{i.text}</li>    
                                    )}
                                </List>
                              </Accordion>
                            : itemWithCommonProps(text)
                    })
                    return <NavSection
                        key={heading || 'Settings'}
                        heading={heading}
                        list={listToJsxArr}
                        className={idx === 2 ? 'mt-0 bt py-1' : ''}
                    />
                })}
            </div>
        </nav>
    )
}

export default Nav
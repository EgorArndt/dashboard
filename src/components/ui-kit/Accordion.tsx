import { useState, cloneElement, ReactElement, MouseEventHandler, ReactNode } from 'react'
import cn from 'classnames'
import { RiArrowDownSLine } from 'react-icons/ri'

type Toggler = ReactElement<{onClick: MouseEventHandler, after: ReactElement}>

export type AccordionProps = {
    trigger: (isOpen: boolean) => Toggler | Toggler
    children: ReactNode
    [key: string]: unknown
} 

const Accordion = ({ trigger, children, ...props }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggler = trigger instanceof Function ? trigger(isOpen) : trigger

    return <>
        {cloneElement(
            toggler,
            { 
                ...toggler.props, 
                onClick: () => setIsOpen(!isOpen), 
                after: toggler.props.after ? toggler.props.after :
                    <RiArrowDownSLine 
                        style={{ 
                            transform: `rotate(${isOpen ? 180 : 0}deg)`, 
                            transition: 'transform ease 0.3s, background-color ease 0.1s',
                            marginLeft: 'auto'
                        }} 
                    />
            } 
        )}
        <div className={cn('accordion', { 'visible': isOpen })} {...props}>
            {children}
        </div>
    </>
}

export default Accordion
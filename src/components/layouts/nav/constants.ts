import { IconType } from 'react-icons'
import { BsGear, BsFillBarChartFill, BsBell, BsCreditCard } from 'react-icons/bs'
import { BiLockAlt } from 'react-icons/bi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { AiOutlineDesktop, AiOutlineCalendar } from 'react-icons/ai'

type NavSection = {
    heading?: string
    list: Array<{
        text: string, 
        before: IconType
        submenu?: Array<{ text: string }>
    }>
}

export const navSections: Array<NavSection> = [
    {
        heading: 'teams',
        list: [
            { text: 'Notary', before: BsGear },
            { text: '1A Collection', before: BsGear },
            { text: 'TMM BANK', before: BiLockAlt },
            { text: 'OIL Section', before: BiLockAlt },
        ],
    },
    {
        heading: 'menu',
        list: [
            { 
                text: 'Analytics', 
                before: BsFillBarChartFill,
                submenu: [
                    { text: 'Reports' },
                    { text: 'Live reports' }
                ]
            },
            { 
                text: 'Briefings', 
                before: AiOutlineDesktop,
                submenu: [
                    { text: 'Reports' },
                    { text: 'Live reports' }
                ]
            },
            { 
                text: 'Credits', 
                before: BsCreditCard,
                submenu: [
                    { text: 'Reports' },
                    { text: 'Live reports' }
                ]
            },
            { 
                text: 'Calendar', 
                before: AiOutlineCalendar,
                submenu: [
                    { text: 'Reports' },
                    { text: 'Live reports' }
                ]
            },
        ], 
    },   
    {
        list: [
            { text: 'Settings', before: BsGear },
        ]
    },
    {
        heading: 'account',
        list: [
            { text: 'Assigned values', before: IoIosCheckmarkCircleOutline },
            { text: 'Activities', before: BsBell },
        ]
    },   
]
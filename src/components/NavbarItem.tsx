import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
    text: string,
    url?: string
}

export const NavbarItem = ({ text, url, children }: Props) => {
    return (
        <a className='w-auto hover:bg-slate-200/50 hover:cursor-pointer px-2 py-3 rounded-lg transition' href={url}>
            <li className='flex items-center gap-3'>
                {children}
                <span>{text}</span>
            </li>
        </a>
    )
}

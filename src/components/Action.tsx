import React, { PropsWithChildren } from 'react'

export const Action = ({ children }: PropsWithChildren) => {
    return (
        <span className='cursor-pointer hover:text-gray-400'>
            {children}
        </span>
    )
}

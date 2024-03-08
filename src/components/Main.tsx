import React from 'react'
import { UserStories } from './UserStories'
import { Posts } from './post/Posts'
import { Sugerences } from './Sugerences'

export const Main = () => {
    return (
        <div className='p-2 grid grid-cols-[1fr,350px]'>
            <div className='flex flex-col w-full'>
                <UserStories />
                <Posts />
            </div>
            <Sugerences />
        </div>
    )
}

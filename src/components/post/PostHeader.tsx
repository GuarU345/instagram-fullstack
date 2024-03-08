import ThreeDotsIcon from '@/icons/ThreeDots'
import React from 'react'

interface Props {
    username: string
    photo: string
}

export const PostHeader = ({ username, photo }: Props) => {
    return (
        <header className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <img className='rounded-full w-10 h-10' src={photo} alt={`image of ${username}`} />
                <span className="font-bold">{username}</span>
            </div>
            <span >
                <ThreeDotsIcon />
            </span>
        </header>
    )
}

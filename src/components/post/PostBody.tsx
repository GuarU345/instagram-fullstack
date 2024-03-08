import React from 'react'
import { PostActions } from './PostAction'
import { PostLikes } from './PostLikes'
import { AddComment } from '../comment/AddComment'

interface Props {
    username: string
    image: string
}

export const PostBody = ({ image, username }: Props) => {
    return (
        <div className='mt-2'>
            <img src={image} alt={`post of user ${username}`} />
            <PostActions />
            <PostLikes />
            <section>
                <span className='text-gray-400 text-sm'>Ver 1 comentario</span>
                <AddComment />
            </section>
        </div>
    )
}

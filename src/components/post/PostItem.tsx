import { Post } from '@/interfaces/post'
import React from 'react'
import { PostHeader } from './PostHeader'
import { PostBody } from './PostBody'

interface Props {
    post: Post
}

export const PostItem = ({ post }: Props) => {
    return (
        <li className='p-2 w-[450px]'>
            <PostHeader username={post.username} photo={post.icon} />
            <PostBody username={post.username} image={post.image} />
        </li>
    )
}

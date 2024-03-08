import React from 'react'
import { POSTS as posts } from '@/data/posts'
import { PostItem } from './PostItem'

export const Posts = () => {
    return (
        <ul className='flex flex-col items-center justify-center mt-10'>
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </ul>
    )
}

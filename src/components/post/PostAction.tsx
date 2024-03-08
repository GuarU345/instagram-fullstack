import React from 'react'
import { Like } from '../Like'
import CommentIcon from '@/icons/Comment'
import ShareIcon from '@/icons/Share'
import SaveIcon from '@/icons/Save'
import { Action } from '../Action'

export const PostActions = () => {
    return (
        <div className='mt-4 flex justify-between'>
            <div className='flex items-center gap-4'>
                <Action>
                    <Like />
                </Action>
                <Action>
                    <CommentIcon />
                </Action>
                <Action>
                    <ShareIcon />
                </Action>
            </div>
            <Action>
                <SaveIcon />
            </Action>
        </div>
    )
}

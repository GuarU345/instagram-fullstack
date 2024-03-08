import React from 'react'
import { STORIES as stories } from '@/data/stories'

export const UserStories = () => {
    return (
        <section>
            <ul className="flex items-center gap-2 p-3 pt-5  relative overflow-hidden">
                {stories.map((storie) => {
                    return (
                        <li
                            key={storie.userName}
                            className="min-w-[64px] flex flex-col items-center gap-2"
                        >
                            <img
                                src={storie.image}
                                width={50}
                                height={50}
                                className="border-[3px] border-indigo-500/100 rounded-full"
                                alt={`user image of ${storie.userName}`}
                            />
                            <span className="text-xs">{storie.userName}</span>
                        </li>
                    );
                })}
                <li className="absolute right-0">
                    <span className="text-2xl text-white">
                        flecha
                    </span>
                </li>
            </ul>
        </section>
    )
}

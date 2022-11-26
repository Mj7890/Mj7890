import { faker } from '@faker-js/faker'
import { userAgent } from 'next/server'
import React, { useEffect, useState } from 'react'

const Suggestion = () => {
    const [suggestions, setSeggestions] = useState([])
    useEffect(() => {
        setSeggestions(
            [...Array(5)].map((profile) => ({
                userId: faker.datatype.uuid(),
                username: faker.internet.userName(),
                avatar: faker.image.avatar(),

            }))
        );

    }, [])
    console.log(suggestions)

    return (
        <div className='mt-4 '>
            <div className='flex justify-between items-center'>
                <p className='text-sm font-semibold'>Suggestion for you</p>
                <button className='text-xs font-semibold text-[#0095f6]'>See All</button>
            </div>
            {suggestions.map((profile) => (
                <div className='flex items-center justify-between mt-4 '>
                    <div className='flex items-center'>
                        <div className='w-8 h-8'>
                            <img src={profile.avatar} alt="" className='rounded-full' />
                        </div>
                        <div className='ml-3'>
                            <p className='text-sm font-semibold'>{profile.username}</p>
                            <p className='text-xs text-gray-800'>Suggested for you</p>
                        </div>
                    </div>

                    <button className='text-xs font-semibold text-[#0095f6]'>Follow</button>
                </div>
            ))}
            <div className='flex flex-wrap text-xs mt-6 text-semibold text-[#d2d2d2] space-x-1'>
                <p>About</p>
                <span>&#183;</span>
                <p>Help</p>
                <span>&#183;</span>
                <p>Press</p>
                <span>&#183;</span>
                <p>API</p>
                <span>&#183;</span>
                <p>Jobs</p>
                <span>&#183;</span>
                <p>privacy</p>
                <span>&#183;</span>
                <p>Terms</p>
                <span>&#183;</span>
                <p>Locations</p>
                <span className='mt-1'>&#183;</span>
                <p className="mt-1">Language</p>
            </div>
            <div className='text-xs mt-6 text-semibold text-[#d2d2d2]'>
                <p className=''>2022 INSTAGRAM FROM META</p>
            </div>
        </div>
    )


}

export default Suggestion
'use client'
import { Bell, User } from 'lucide-react'
import React from 'react'

const data = [
    {
        name: 'Ethan Walker',
        description: 'Book a package for dubai, miracle Garden'
    }, {
        name: 'Ethan Walker',
        description: 'Book a package for dubai, miracle Garden'
    }, {
        name: 'Ethan Walker',
        description: 'Book a package for dubai, miracle Garden'
    }, {
        name: 'Ethan Walker',
        description: 'Book a package for dubai, miracle Garden'
    },
]
const Page = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-3xl py-4'>Notification</h1>
                <div className='bg-[#C2F0EE] inline-block p-3 rounded-full'>
                    <Bell className='w-6 h-6 text-[#0AC4BB]' />
                </div>
            </div>
            <div className='flex items-center justify-center flex-col'>
                {data.map((item, index) => (
                    <div key={index} className={`flex items-center justify-center gap-2 ${index === 1 || index === 0 ? 'bg-[#0AC4BB] text-white' : "bg-[]"} rounded-xl px-8 p-3 m-2`}>

                        <div className='bg-[#C2F0EE] inline-block p-3  rounded-full'>
                            <User className='w-6 h-6 text-[#0AC4BB]' />
                        </div>
                        <div className=''>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Page
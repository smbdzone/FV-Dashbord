import MessageTable from '@/Components/tables/MessageTable'
import React from 'react'

const page = () => {
    return (
        <div>
            <div>
                <h1 className='font-bold text-3xl py-4'>Message/Inquiries</h1>
                <h1 className='font-bold text-xl'>List view of messages</h1>
            </div>
            <MessageTable />
        </div>
    )
}

export default page
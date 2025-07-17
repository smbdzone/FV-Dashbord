import BookingTable from '@/Components/BookingTable'
import React from 'react'

const Page = () => {
    return (
        <>
            <div>
                <h1 className='font-bold text-2xl py-4'>Manage Bookings</h1>
                <h3 className='font-semibold text-lg '>Manage all users bookings</h3>
                <BookingTable />
            </div>
        </>
    )
}

export default Page
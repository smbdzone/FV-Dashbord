import BookingTable from '@/Components/BookingTable'
import StatCard from '@/Components/StatCard'
import React from 'react'

const page = () => {
  return (
    <>
      <h1 className='font-bold text-2xl py-4'>Admin Dashboard</h1>
      <div className='flex   gap-3'>
        <StatCard label="Total Bookings" value={245} bgColor="bg-[#C2F0EE]" />
        <StatCard label="Active Packages" value={15} bgColor="bg-[#DCDCFB]" />
        <StatCard label="New Inquiries" value={32} bgColor="bg-[#BFDCFF]" />

      </div>

      <h2 className='font-bold text-xl py-2'>Recent Booking</h2>
      <BookingTable />
    </>
  )
}

export default page
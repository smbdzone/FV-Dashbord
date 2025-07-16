import UserTable from '@/Components/tables/UserTable'
import React from 'react'

const page = () => {
    return (
        <>
            <h1 className='font-bold text-3xl py-4'>Users</h1>
            <UserTable />
        </>
    )
}

export default page
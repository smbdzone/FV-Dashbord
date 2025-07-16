
import PackageTable from '@/Components/tables/PackageTable'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-2xl py-4'>Manage Packages</h1>
                <Link href={'/admin/packages/new'} className='font-bold text-lg py-4'> + Add New Package</Link>

            </div>
            <PackageTable />
        </>
    )
}

export default page
'use client'

import { bookings } from '@/data/booking'
import Link from 'next/link'
export default function PackageTable() {

    const handleEdit = (id: string) => {
        console.log('Edit booking with ID:', id)
    }

    const handleDelete = (id: string) => {
        const confirmed = window.confirm('Are you sure you want to delete this booking?')
        if (confirmed) {

        }
    }

    return (
        <div className="overflow-x-auto mx-2 md:mr-10 mb-5 mt-6 rounded-xl shadow-sm shadow-gray-400">
            <table className="w-full table-auto text-left p-4">
                <thead className="text-gray-600">
                    <tr>
                        <th className="p-3">Package Name</th>
                        <th className="p-3">Country</th>
                        <th className="p-3">Duration</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((item) => (
                        <tr key={item.id} className="border-t-[0.2px] border-gray-400 hover:bg-gray-50">
                            <td className="p-3 py-5">{item.packageName}</td>
                            <td className="p-3 py-5 text-[#4A739C]">{item.country}</td>

                            <td className="p-3 py-5 text-[#4A739C]">{item.duration}</td>
                            <td className="p-3 py-5 text-[#4A739C]">{item.price}</td>
                            <td className="p-3 py-5">
                                <div className="flex gap-3">
                                    <Link href={'/admin/packages/1/edit'}>
                                        <button onClick={() => handleEdit(item.id)} title="Edit">
                                            <img src="/icons/edit.png" alt="" />
                                        </button>
                                    </Link>
                                    <button onClick={() => handleDelete(item.id)} title="Delete">
                                        <img src="/icons/delete.png" alt="" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

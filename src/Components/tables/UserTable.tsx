'use client'
import { Pencil, Trash2 } from 'lucide-react'



const users = [
    {
        id: '1',
        name: 'test user',
        email: 'test@example.com',
        country: "test",
        status: 'Active'
    }
]

export default function UserTable() {

    const handleEdit = (id: string) => {
        console.log('Edit booking with ID:', id)
    }

    const handleDelete = (id: string) => {
        const confirmed = window.confirm('Are you sure you want to delete this booking?')
        if (confirmed) {

        }
    }


    return (
        <div className="overflow-x-auto mx-2 md:mr-10  mb-5 mt-6 rounded-xl shadow-sm shadow-gray-400 ">
            <table className="w-full table-auto text-left p-4 ">
                <thead className=" text-gray-600">
                    <tr>
                        <th className="p-3">User Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Country</th>
                        <th className="p-3">status</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => (
                        <tr key={item.id} className="border-t-[0.2px] border-gray-400  hover:bg-gray-50">

                            <td className="p-3 py-5">{item.name}</td>
                            <td className="p-3 py-5 text-[#4A739C]">{item.email}</td>
                            <td className="p-3 py-5 text-[#4A739C]">{item.country}</td>
                            <td className="p-3 py-5 text-[#4A739C]">{item.status}</td>
                            <td className="p-3 py-5">
                                <div className="flex gap-1">
                                    <button onClick={() => handleEdit(item.id)} title="Edit">
                                        <img src="/icons/update.png" alt="" className='' />
                                    </button>
                                    <button onClick={() => handleEdit(item.id)} title="Edit">
                                        <img src="/icons/edit.png" alt="" className='' />
                                    </button>
                                    <button onClick={() => handleDelete(item.id)} title="Delete">
                                        <img src="/icons/delete.png" alt="" className='' />
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

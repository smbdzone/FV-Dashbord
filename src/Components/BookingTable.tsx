import { bookings } from '@/data/booking'
import { Pencil, Trash2 } from 'lucide-react'

export default function BookingTable() {
    return (
        <div className="overflow-x-auto mr-10  mb-5 mt-6 rounded-xl shadow-sm shadow-gray-400 ">
            <table className="w-full table-auto text-left p-4 ">
                <thead className=" text-gray-600">
                    <tr>
                        <th className="p-3">Booking ID</th>
                        <th className="p-3">Package Name</th>
                        <th className="p-3">Country</th>
                        <th className="p-3">Duration</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((item) => (
                        <tr key={item.id} className="border-t-[0.2px] border-gray-400  hover:bg-gray-50">
                            <td className="p-3 py-5 text-blue-500 cursor-pointer">{item.id}</td>
                            <td className="p-3 py-5">{item.packageName}</td>
                            <td className="p-3 py-5 text-blue-500">{item.country}</td>
                            <td className="p-3 py-5">{item.duration}</td>
                            <td className="p-3 py-5">{item.price}</td>
                            <td className="p-3 flex py-5 gap-2">
                                <Pencil className="w-4 h-4 text-purple-500 cursor-pointer" />
                                <Trash2 className="w-4 h-4 text-teal-500 cursor-pointer" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

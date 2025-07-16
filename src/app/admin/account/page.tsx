'use client'

import { useState } from 'react'
import { PhoneCall, Key } from 'lucide-react'

export default function page() {
    const [isEditing, setIsEditing] = useState(false)
    const [info, setInfo] = useState({
        phone: '+971 58 458 0082',
        email: 'info@gmail.com',
    })

    const [formData, setFormData] = useState(info)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleUpdate = () => {
        if (isEditing) {
            setInfo(formData)
        } else {
            setFormData(info)
        }
        setIsEditing(!isEditing)
    }

    return (
        <>
            <h1 className='font-bold text-3xl py-4'>Account</h1>
            <div className='flex flex-col w-full md:w-96' >

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center text-teal-800">
                            <PhoneCall size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-medium">Phone Number</p>
                        </div>
                    </div>
                    {isEditing ? (
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-transparent border-b border-teal-300 outline-none text-right text-sm"
                        />
                    ) : (
                        <p className="text-sm">{info.phone}</p>
                    )}
                </div>


                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center text-teal-800">
                            <Key size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-medium">Request account info</p>
                        </div>
                    </div>
                    {isEditing ? (
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-transparent border-b border-teal-300 outline-none text-right text-sm"
                        />
                    ) : (
                        <p className="text-sm">{info.email}</p>
                    )}
                </div>

                <button
                    onClick={handleUpdate}
                    className="mt-10 bg-teal-400 hover:bg-teal-500 text-white font-semibold py-2 rounded-md transition"
                >
                    {isEditing ? 'Save' : 'Update'}
                </button>
            </div>


        </>
    )
}

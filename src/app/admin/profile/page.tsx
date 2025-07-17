'use client'

import {
    User,
    Mail,
    Lock,
    ArrowLeft,
    Camera,
} from 'lucide-react'
import Link from 'next/link'
import { useState, useRef } from 'react'

export default function Page() {
    const [showDetails, setShowDetails] = useState(false)

    const [user, setUser] = useState({
        name: 'Ali Raza',
        email: 'ali@gmail.com',
        password: '******'
    })

    const [formData, setFormData] = useState(user)

    const [imagePreview, setImagePreview] = useState<string>('/images/profile-image.png')
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handleViewProfile = () => {
        setShowDetails(!showDetails)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleUpdateProfile = () => {
        setUser(formData)
        setShowDetails(false)
        alert('Profile updated successfully!')
    }

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="flex flex-col items-start px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Manage Profile</h1>

            <div className="relative mb-4">
                <img
                    src={imagePreview}
                    alt="Profile"
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow"
                />
                <div
                    onClick={handleImageClick}
                    className="absolute bottom-2 right-4 bg-cyan-300 rounded-full p-2 cursor-pointer"
                >
                    <Camera className="w-4 h-4 text-white" />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                />
            </div>

            <div className="text-center mb-4">
                <p className="text-xl font-bold">{user.name}</p>
                <p className="italic text-gray-500">Neked Amin</p>
            </div>

            <button
                onClick={handleViewProfile}
                className="bg-[#0AC4BB] text-white font-medium w-full md:w-sm py-2 px-6 rounded mb-6"
            >
                {showDetails ? 'Hide Profile' : 'View Profile'}
            </button>

            {showDetails ? (
                <div className='flex flex-col gap-4 bg-[#d8faf8] rounded-sm w-full md:w-sm p-4'>
                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='bg-[#C2F0EE] p-3 rounded-full text-[#0AC4BB]'>
                                <User className='w-5 h-5 ' />
                            </div>
                            <h3 className='text-[15px] font-medium'>User Name</h3>
                        </div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-white border rounded px-2 py-1 text-sm"
                        />
                    </div>

                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='bg-[#C2F0EE] p-3 rounded-full text-[#0AC4BB]'>
                                <Mail className='w-5 h-5 ' />
                            </div>
                            <h3 className='text-[15px] font-medium'>Email</h3>
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-white border rounded px-2 py-1 text-sm"
                        />
                    </div>

                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='bg-[#C2F0EE] p-3 rounded-full text-[#0AC4BB]'>
                                <Lock className='w-5 h-5 ' />
                            </div>
                            <h3 className='text-[15px] font-medium'>Password</h3>
                        </div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="bg-white border rounded px-2 py-1 text-sm"
                        />
                    </div>

                    <button
                        onClick={handleUpdateProfile}
                        className="bg-[#0AC4BB] text-white font-medium w-full md:w-sm py-2 px-6 rounded mx-auto md:-ml-4 mb-1"
                    >
                        Update profile
                    </button>

                    <Link href={'/admin/dashboard'} className='flex items-center justify-center gap-2'>
                        <div className='bg-[#C2F0EE] p-3 rounded-full text-[#0AC4BB]'>
                            <ArrowLeft className='w-5 h-5 ' />
                        </div>
                        <h3 className='text-[15px] font-medium'>Back</h3>
                    </Link>
                </div>
            ) : (
                <div className='flex flex-col items-start gap-4'>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='bg-[#C2F0EE] p-3 rounded-full text-[#0AC4BB]'>
                            <User className='w-5 h-5 ' />
                        </div>
                        <h3 className='text-[15px] font-medium'>User Name</h3>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='bg-[#C2F0EE] p-3 rounded-full text-[#0AC4BB]'>
                            <Mail className='w-5 h-5 ' />
                        </div>
                        <h3 className='text-[15px] font-medium'>Email</h3>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='bg-[#C2F0EE] p-3 rounded-full text-[#0AC4BB]'>
                            <Lock className='w-5 h-5 ' />
                        </div>
                        <h3 className='text-[15px] font-medium'>Password</h3>
                    </div>

                    <Link href={'/admin/dashboard'} className='flex items-center justify-center gap-2'>
                        <div className='bg-[#C2F0EE] p-3 rounded-full text-[#0AC4BB]'>
                            <ArrowLeft className='w-5 h-5 ' />
                        </div>
                        <h3 className='text-[15px] font-medium'>Back</h3>
                    </Link>
                </div>
            )}
        </div>
    )
}

'use client'

import { useState } from 'react'

interface PackageFormProps {
    initialData?: {
        title: string
        duration: string
        price: string
        country: string
        description: string
        text: string
    }
    onSubmit: (data: any) => void
    submitLabel: string
}

export default function PackageForm({
    initialData,
    onSubmit,
    submitLabel,
    text
}: PackageFormProps) {
    const [formData, setFormData] = useState(
        initialData || {
            title: '',
            duration: '',
            price: '',
            country: '',
            description: '',
        }
    )
    const [image, setImage] = useState<File | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({ ...formData, image })
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-2 space-y-4">
            <h1 className="text-2xl font-bold">{text}</h1>

            <div>
                <label className="block mb-1 font-medium">Package Title</label>
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter package title"
                    className="w-full rounded-md md:w-1/2 bg-[#C2F0EE] placeholder:text-[#0AC4BB] px-4 py-2"
                    required
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">Duration</label>
                <input
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g., 7 days"
                    className="w-full rounded-md  px-4 py-2 md:w-1/2 bg-[#C2F0EE] placeholder:text-[#0AC4BB]"
                    required
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">Price per Person</label>
                <input
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                    className="w-full rounded-md md:w-1/2 bg-[#C2F0EE] placeholder:text-[#0AC4BB] px-4 py-2"
                    required
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">Country</label>
                <input
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Enter country"
                    className="w-full rounded-md md:w-1/2 bg-[#C2F0EE] placeholder:text-[#0AC4BB] px-4 py-2"
                    required


                />
            </div>

            <div>
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full h-28 resize-none rounded-md md:w-1/2 bg-[#C2F0EE] placeholder:text-[#0AC4BB] px-4 py-2"
                />
            </div>



            <div className="border border-dashed border-gray-300 p-6 rounded-md text-center bg-white">
                <p className="font-semibold mb-1">Upload Image</p>
                <p className="text-sm text-gray-500 mb-4">Click or drag an image here to upload</p>
                <label>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    <div className="inline-block bg-[#C2F0EE] px-4 py-2 rounded cursor-pointer">
                        Upload Image
                    </div>
                </label>
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-medium"
                >
                    {submitLabel}
                </button>
            </div>
        </form>
    )
}

'use client'
import PackageForm, { PackageData } from '@/Components/forms/PackageForm'

// Simulate fetching existing data
const dummyData = {
    title: 'Cultural Tour of Kyoto',
    duration: '7 Days',
    price: '275',
    country: 'Japan',
    description: 'An amazing cultural experience...',
}

export default function EditPackagePage() {
    const handleUpdate = (data: PackageData) => {
        console.log('Update package:', data)

    }

    return (
        <PackageForm
            initialData={dummyData}
            onSubmit={handleUpdate}
            submitLabel="Update Package"
            text="Update Package"
        />
    )
}

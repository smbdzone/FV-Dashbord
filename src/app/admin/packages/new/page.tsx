'use client'
import PackageForm from '@/Components/forms/PackageForm'

export default function AddPackagePage() {
    const handleAdd = (data: any) => {
        console.log('Add package:', data)
        // TODO: Send to backend
    }

    return <PackageForm onSubmit={handleAdd} submitLabel="Save Package" text="Add New Package" />
}

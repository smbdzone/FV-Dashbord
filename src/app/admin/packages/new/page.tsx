'use client'

import PackageForm, { PackageData } from '@/Components/forms/PackageForm'

export default function AddPackagePage() {
    const handleAdd = (data: PackageData) => {
        console.log('Add package:', data)
       //api call
    }

    return (
        <PackageForm
            onSubmit={handleAdd}
            submitLabel="Save Package"
            text="Add New Package"
        />
    )
}

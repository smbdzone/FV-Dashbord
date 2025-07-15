type StatCardProps = {
    label: string
    value: number | string
    bgColor: string
}

export default function StatCard({ label, value, bgColor }: StatCardProps) {
    return (
        <div className={`p-6 rounded-md ${bgColor} w-[300px]`}>
            <div className="text-sm">{label}</div>
            <div className="text-2xl font-bold">{value}</div>
        </div>
    )
}

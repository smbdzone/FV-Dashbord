import { Bell, Search, UserCircle } from 'lucide-react'

export default function Topbar() {
    return (
        <header className=" p-4 shadow flex justify-between items-center">
            <div className="px-6">
                <img src="/images/logo-1.png" alt="" />
            </div>
            <div className="flex items-center gap-6">
                <div className='bg-[#0AC4BB]'>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full border px-4 py-2 rounded-md placeholder:text-white text-white"
                    />
                    <Search className="absolute right-48 top-11  w-4 h-4 text-white" />
                </div>
                <Bell className="w-5 h-5 text-[#0AC4BB]" />
                <UserCircle className="w-7 h-7 text-[#0AC4BB]" />
                <span className="text-sm font-semibold">Admin</span>
            </div>
        </header>
    )
}


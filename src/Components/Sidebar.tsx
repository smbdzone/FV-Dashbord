'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
    Home,
    Package,
    Plus,
    Book,
    Users,
    Mail,
    Image,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react'

const links = [
    { href: '/admin/dashboard', label: 'Dashboard Overview', icon: Home },
    { href: '/admin/packages', label: 'Manage Packages', icon: Package },
    { href: '/admin/packages/new', label: 'Add New Package', icon: Plus },
    { href: '/admin/bookings', label: 'Bookings', icon: Book },
    { href: '/admin/users', label: 'Users', icon: Users },
    { href: '/admin/messages', label: 'Messages / Inquiries', icon: Mail },
    { href: '/admin/blogs', label: 'Blogs', icon: Book },
    { href: '/admin/media', label: 'Manage Media Centre', icon: Image },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden fixed top-30 left-4 z-50 bg-[#0AC4BB] text-white p-2 rounded-md"
            >
                <Menu className="w-5 h-5" />
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={`
          fixed md:static top-0 left-0 z-50
           w-80 md:w-96 h-full md:h-[650px] 
          p-6 flex flex-col justify-between transition-transform duration-300
          ${isOpen ? 'translate-x-0 bg-white' : '-translate-x-full'} md:translate-x-0
        `}
            >
                <div>
                    <div className="flex justify-between items-center mb-8 md:mb-8">
                        <div className="text-xl font-bold text-primary">Dubai Neked Admin</div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="md:hidden text-gray-600"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-2">
                        {links.map(({ href, label, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#0AC4BB] hover:text-white ${pathname === href
                                        ? 'bg-[#0AC4BB] text-white'
                                        : 'text-gray-700'
                                    }`}
                                onClick={() => setIsOpen(false)} 
                            >
                                <Icon className="w-4 h-4" />
                                <span>{label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="pt-4">
                    <button className="flex items-center gap-2 hover:underline">
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </aside>
        </>
    )
}

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Package, Plus, Book, Users, Mail, Image, Settings, LogOut } from 'lucide-react'

const links = [
    { href: '/', label: 'Dashboard Overview', icon: Home },
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

    return (
        <aside className="w-96 flex flex-col gap-20 items-start h-[650px] border-none  p-6 ">
            <div>
                <div className="text-xl font-bold text-primary mb-8">Dubai Neked Admin</div>
                <nav className="flex flex-col gap-2">
                    {links.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#0AC4BB] hover:text-white ${pathname === href ? 'bg-[#0AC4BB] text-white' : 'text-gray-700'
                                }`}
                        >
                            <Icon className="w-4 h-4" />
                            <span>{label}</span>
                        </Link>
                    ))}

                </nav>
            </div>
            <div className=" pt-4">
                <button className="flex items-center gap-2 hover:underline">
                    <LogOut className="w-4 h-4" /> Logout
                </button>
            </div>
        </aside>
    )
}

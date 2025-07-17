'use client'

import { Key, User, Mail, Bell, Lock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


type MenuItem = {
    icon: React.JSX.Element
    title: string
    subtitle?: string
    link?: string
}

const menuItems: MenuItem[] = [
    {
        icon: <Key className="w-6 h-6 text-[#0AC4BB]" />,
        title: 'Account',
        subtitle: 'Change number, request account info',
        link: "/admin/account"
    },
    {
        icon: <User className="w-6 h-6 text-[#0AC4BB]" />,
        title: 'Profile',
        subtitle: 'Change name, photo, Password',
        link: "/admin/profile"
    },
    {
        icon: <Mail className="w-6 h-6 text-[#0AC4BB]" />,
        title: 'Email',
        subtitle: 'Change email address',
        link: "/admin/dashboard"
    },
    {
        icon: <Bell className="w-6 h-6 text-[#0AC4BB]" />,
        title: 'Notification',
        subtitle: 'View all notification',
        link: "/admin/notifications"
    },
    {
        icon: <Lock className="w-6 h-6 text-[#0AC4BB]" />,
        title: 'Help',
        link: "/admin/help"
    },
    {
        icon: <ArrowLeft className="w-6 h-6 text-[#0AC4BB]" />,
        title: 'Back',
        link: "/admin/dashboard"
    },
]

export default function SettingsMenu() {
    return (
        <>
            <h1 className='font-bold text-3xl py-4'>Settings</h1>

            <div className="p-6  flex flex-col gap-6 text-gray-800 font-sans">
                {menuItems.map((item, index) => (
                    <Link href={item.link!} key={index} className="flex items-start gap-4">
                        <div className="bg-[#C2F0EE] p-3 rounded-full">
                            {item.icon}
                        </div>
                        <div>
                            <p className="font-medium text-[16px]">{item.title}</p>
                            {item.subtitle && (
                                <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
                            )}
                        </div>
                    </Link>
                ))}


            </div>
        </>
    )
}

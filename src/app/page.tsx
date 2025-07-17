'use client'

import { CalendarDays, ChevronDown, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function HeroSection() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  return (
    <section className="relative h-[100vh] w-full">

      <div className="absolute inset-0 z-0">
        <img
          src="/images/header-image.png"
          alt="Hero"
          className="w-full h-full md:h-[80%] object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />

      <div className="relative z-20 h-full flex flex-col">
        {/* Navbar */}
        <nav className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-6 md:px-10 py-4 text-white">

          <img src="/images/logo-2.png" className="w-16 h-16" alt="logo" />



          <ul className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm font-medium items-center bg-[#FFFFFF4D] rounded-full px-1 py-2">
            <li className="bg-[#0AC4BB] px-6 py-2 md:px-8 md:py-3 rounded-full text-white">Home</li>
            <li className="bg-[#FFFFFF80] px-6 py-2 md:px-8 md:py-3 rounded-full text-white">Offers</li>
            <li className="bg-[#FFFFFF80] px-6 py-2 md:px-8 md:py-3 rounded-full text-white">Contact</li>
            <li className="bg-[#FFFFFF80] px-6 py-2 md:px-8 md:py-3 rounded-full text-white">
              <Link href={'/admin/dashboard'}>Dashboard</Link>
            </li>
          </ul>

          <div className="hidden md:flex gap-4 items-center">
            <ShoppingCart className="w-6 text-white" />
            <User className="w-6 text-white" />
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex flex-col items-center mt-10 md:mt-28 flex-1 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">HEADER</h1>

          {/* Search Bar */}
          <div className="bg-white text-black flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-3 px-6 py-4 rounded-3xl shadow-lg w-full max-w-5xl">

            <div className="flex items-center gap-2 px-2 md:px-4 w-full md:w-auto">
              <div className="text-cyan-500 font-bold">●</div>
              <div>
                <p className="text-sm text-gray-500">Destination</p>
                <input
                  className="text-sm font-semibold border-none outline-none w-full"
                  placeholder="Enter your destination"
                  type="text"
                />
              </div>
              <ChevronDown className="text-gray-400 w-4 h-4 ml-2 hidden md:block" />
            </div>


            <div className="flex items-center gap-2 px-2 md:px-4 relative w-full md:w-auto">
              <CalendarDays className="text-indigo-500" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <div
                  className="text-sm font-semibold cursor-pointer"
                  onClick={() => setShowCalendar(!showCalendar)}
                >
                  {selectedDate ? selectedDate.toDateString() : 'Choose your dates'}
                </div>
              </div>
              {showCalendar && (
                <div className="absolute top-20 left-0 bg-white rounded-xl p-4 shadow-md z-50 text-black w-80">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date)
                      setShowCalendar(false)
                    }}
                    inline
                  />
                </div>
              )}
            </div>


            <div className="flex items-center gap-2 px-2 md:px-4 w-full md:w-auto">
              <div>
                <p className="text-sm text-gray-500">Passengers</p>
                <input
                  className="text-sm font-semibold w-full"
                  placeholder="How many adults/children"
                  type="text"
                />
              </div>
              <ChevronDown className="text-gray-400 w-4 h-4 ml-2 hidden md:block" />
            </div>

            {/* Search Button */}
            <button className="bg-[#0AC4BB] text-white w-full md:w-auto px-6 py-3 rounded-full font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

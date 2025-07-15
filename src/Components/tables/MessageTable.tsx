

export default function MessageTable() {

    const messages = [
        {
            "name": "Ethan Harper",
            "subject": "Flight Booking",
            "date": "05-06-2025",
            "message": "Book a park tickets in the evening and also provide transport"
        },
        {
            "name": "Olivia Bennett",
            "subject": "Hotel Reservation",
            "date": "06-06-2025",
            "message": "Book a park tickets in the evening and also provide transpor"
        },
        {
            "name": "Liam Carter",
            "subject": "Tour Package",
            "date": "06-06-2025",
            "message": "Book a park tickets in the evening and also provide transpor"
        },
        {
            "name": "Sophia Davis",
            "subject": "Cruise Booking",
            "date": "06-06-2025",
            "message": "Book a park tickets in the evening and also provide transpor"
        },
        {
            "name": "Noah Evans",
            "subject": "Car Rental",
            "date": "06-06-2025",
            "message": "Book a park tickets in the evening and also provide transpor"
        }
    ]



    return (
        <div className="overflow-x-auto mr-10  mb-5 mt-6 rounded-xl shadow-sm shadow-gray-400 ">
            <table className="w-full table-auto text-left p-4 ">
                <thead className=" text-gray-600">
                    <tr>
                        <th className="p-3">User Name</th>
                        <th className="p-3">Subject</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((item) => (
                        <tr key={item.name} className="border-t-[0.2px]  border-gray-400  hover:bg-gray-50">
                            <td className="p-3 py-5  cursor-pointer">{item.name}</td>
                            <td className="p-3 py-5 text-[#4A739C]">{item.subject}</td>
                            <td className="p-3 py-5 text-[#4A739C]">{item.date}</td>
                            <td className="p-3 py-5 text-[#4A739C]">{item.message}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

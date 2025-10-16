import { tree } from 'next/dist/build/templates/app-page';
import { Carter_One } from 'next/font/google';
import React from 'react'

const Sidebar = () => {

    const categories = [
        {
            category: "Electronics",
            pushleft: true,
            options: [
                "Electronics",
                "Accessories",
                "Cameras & Photography",
                "Car & Vehicle Electronics",
                "Computers & Accessories",
                "GPS & Accessories",
                "Home Audio",
                "Home Theater, TV & Video",
                "Mobiles & Accessories",
                "Portable Media Players",
                "Radio Communication",
                "Tablets",
                "Telephones & Accessories",
                "Warranties",
                "eBook Readers & Accessories",
                "Wearable Technology",
                "General Purpose Batteries & Battery Chargers",
                "Headphones, Earbuds & Accessories",
                "Power Accessories",
            ],
        },
        {
            category: "Amazon Prime",
            hascheckbox: true,
            options: ["Prime Eligible"],
        },
        {
            category: "Delivery Day",
            hascheckbox: true,
            options: ["Get It Today", "Get It by Tomorrow"],
        },
        {
            category: "Brands",
            hascheckbox: false,
            options: ["JAGGER"],
        },
        {
            category: "Customer Reviews",
            hascheckbox: false,
            options: ["4 Stars & Up"],
        },
        {
            category: "Item Condition",
            hascheckbox: true,
            options: ["New", "Renewed"],
        },
        {
            category: "Price",
            options: ["Under ₹1,000", "₹1,000 - ₹5,000", "₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "Over ₹20,000"],
        },
        {
            category: "Discount",
            options: ["Great Indian Festival Deals"]
        },
        {
            category: "Made for Amazon Brands",
            hascheckbox: true,
            options: ["Made for Amazon"]
        },
        {
            category: "Seller",
            hascheckbox: true,
            options: ["Clicktech Retail Private"]
        },
        {
            categroy: "Ltd",
            hascheckbox: true,
            options: ["Cocoblue Retail", "Cocoblu Retail", "Clicktech Business", "Clicktech Business", "TheGiftKart", "TheGiftKart", "Pikkme", "Pikkme", "Polestar Etail", "Polestar Etail", "Spigen India", "Spigen India"]
        },
        {
            category: "Top Brands in Electronics",
            hascheckbox: true,
            options: ["Top Brands"]
        },
        {
            category: "Discount",
            hascheckbox: false,
            options: ["10% Off or more", "25% Off or more", "50% Off or more", "70% Off or more "]
        },
        {
            category: "Availability",
            hascheckbox: true,
            options: ["Last 30 days", "Last 90 days"]
        },
        {
            category: "Pay On Delivery",
            hascheckbox: true,
            options: ["Eligible for Pay On Delivery"]
        }
    ];
    return (
        <div className='p-2 mt-2'>
            <div className='p-2 border-r-2 text-sm font-sans tracking-wide'>
                <h2 className='font-bold mb-2'>Category</h2>
                {categories.map((cat, idx) => (
                    <div key={idx} className="mb-6">
                        <h3 className="font-bold mb-2 ml-2">{cat.category}</h3>
                        <ul className='w-48 text-wrap'>
                            {cat.options.map((option, i) => (
                                <li key={i} className={`mb-1 ml-2 ${cat.pushleft ? "ml-4" : ""}`} >
                                    <label className="flex items-center space-x-2 cursor-pointer hover:text-orange-700">
                                        {cat.hascheckbox && <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />}
                                        <span>{option}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
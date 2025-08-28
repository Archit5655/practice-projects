import React from "react";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-100 via-white to-rose-200 flex items-center justify-center px-6">
      {/* Outer container with rounded corners */}
      <div className="relative w-full max-w-6xl bg-white/70 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden p-12 text-center">
        
        {/* Navbar */}
        <div className="flex items-center justify-between mb-10">
          <div className="bg-white rounded-xl px-4 py-2 shadow">
            <img src="/logo.png" alt="Logo" className="h-6" />
          </div>
          <div className="flex items-center space-x-6 font-medium text-gray-700">
            <a href="#">Home</a>
            <a href="#">How It Works</a>
            <a href="#">Resources</a>
          </div>
          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 text-white shadow-lg">
            Install Customizer
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          Cut Support Tickets & Let <br /> Customers Edit Orders
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Let Customers Edit Orders Themselves: Save your customers time and
          yourself from support email headaches
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 rounded-lg border border-rose-400 text-rose-500 font-medium hover:bg-rose-50">
            Get Demo
          </button>
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 text-white font-medium shadow-md hover:opacity-90">
            Install Customizer
          </button>
        </div>

        {/* Floating Cards */}
        <div className="relative mt-16">
          {/* Center card */}
          <div className="relative z-10 mx-auto w-80 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-3">🎉 Your Order is Completed!</h3>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="h-20 w-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/tshirt.png" alt="Tshirt" className="h-16" />
              </div>
              <div>
                <p className="text-green-600 font-semibold text-lg">$15</p>
                <p className="text-gray-500">Quantity: 1</p>
              </div>
            </div>
            <button className="w-full py-2 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 text-white font-medium">
              Edit Your Order
            </button>
            <p className="mt-2 text-xs text-gray-500">You have 29 mins to edit</p>
          </div>

          {/* Left floating cards */}
          <div className="absolute left-0 top-10 -ml-44 w-64 rotate-[-5deg] bg-white rounded-xl shadow-md p-4">
            <p className="text-sm font-medium">Change Quantities / Remove Items</p>
            <input className="mt-2 w-full border rounded px-3 py-2 text-sm" placeholder="Phone" />
            <input className="mt-2 w-full border rounded px-3 py-2 text-sm" placeholder="Email" />
          </div>
          <div className="absolute left-0 bottom-0 -ml-36 w-64 rotate-[5deg] bg-white rounded-xl shadow-md p-4">
            <p className="text-sm font-medium">Change Quantities / Remove Items</p>
            <input className="mt-2 w-full border rounded px-3 py-2 text-sm" placeholder="Shipping Address" />
          </div>

          {/* Right floating cards */}
          <div className="absolute right-0 top-10 -mr-44 w-64 rotate-[5deg] bg-white rounded-xl shadow-md p-4">
            <p className="text-sm font-medium">Change Quantities / Remove Items</p>
            <p className="text-xs mt-2">Preferred Delivery Date</p>
            <p className="text-sm font-semibold">Friday, 7 March</p>
          </div>
          <div className="absolute right-0 bottom-0 -mr-36 w-64 rotate-[-5deg] bg-white rounded-xl shadow-md p-4">
            <p className="text-sm font-medium">Change Quantities / Remove Items</p>
            <p className="mt-2 text-sm">Quantity: <span className="px-2 py-1 border rounded">2</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

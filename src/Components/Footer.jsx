import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-900 text-white py-20"> {/* Main container with background and padding */}
    <div className="container mx-auto px-4"> {/* Centered container with horizontal padding */}
      <h1 className="text-5xl font-bold mb-4">
        Launch Your Product with a Cool Landing Page
      </h1>
      <p className="text-xl mb-8">
        Your 1-2 sentence elevator pitch for what your product does and why goes here. Be concise, get to the point, don't use jargon.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
        Get Started
      </button>
    </div>
  </div>
  )
}

export default Footer
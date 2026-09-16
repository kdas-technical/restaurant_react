import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
function Navbar() {


const [isOpen, setIsOpen] = useState(false);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

// Tailwind styling logic based on active state
const linkStyles = ({ isActive }) =>
  `text-lg font-medium transition duration-300 hover:text-amber-500 ${
    isActive ? 'text-amber-600 border-b-2 border-amber-600 pb-1' : 'text-neutral-700'
  }`;

const mobileLinkStyles = ({ isActive }) =>
  `block px-4 py-2 rounded-md font-medium text-lg transition duration-300 ${
    isActive ? 'bg-amber-600 text-white' : 'text-neutral-700 hover:bg-amber-100 hover:text-amber-500'
  }`;
  return (
   <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-2">
    <div className="flex items-center justify-between h-16">
        
        {/* Restaurant Brand Logo */}
        <NavLink to="/" className="flex items-center space-x-2 text-2xl font-bold text-neutral-900">
      
          <div className="tracking-wide">Food<span className="text-amber-600">Online</span></div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkStyles}>
              {link.name}
            </NavLink>
          ))}
          {/* CTA Button */}
          <NavLink
            to="/contact"
            className="bg-amber-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-amber-700 transition duration-300"
          >
            Book a Table
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-700 hover:text-amber-600 focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Drawer Dropdown */}
    <div
      className={`md:hidden absolute top-20 left-0 w-full bg-white border-t border-neutral-100 shadow-lg transform transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}
    >
      <div className="px-4 pt-2 pb-6 space-y-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={mobileLinkStyles}
            onClick={() => setIsOpen(false)} // Auto-close drawer on path change
          >
            {link.name}
          </NavLink>
        ))}
        <div className="pt-4 border-t border-neutral-100">
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-amber-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-amber-700 transition duration-300"
          >
            Book a Table
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
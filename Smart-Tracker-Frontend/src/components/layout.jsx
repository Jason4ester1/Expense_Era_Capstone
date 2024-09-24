import React, { useState } from 'react'
import { Link } from 'react-router-dom'  // React Router link
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
import { Search, Menu } from 'lucide-react'

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-green-50">
      <nav className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">ExpenseTracker</Link>  {/* Use 'to' for React Router */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/about" className="hover:text-green-200">About</Link>
            <Link to="/services" className="hover:text-green-200">Services</Link>
            <Link to="/contact" className="hover:text-green-200">Contact</Link>
          </div>
          <div className="flex items-center space-x-2">
            <form className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 pr-2 py-1 rounded-full bg-green-600 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-green-200" size={18} />
            </form>
            <Button variant="outline" className="text-white border-white hover:bg-green-600">
              Sign In
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-green-600 text-white">
          <Link to="/" className="block p-2 hover:bg-green-700">Home</Link> {/* Use 'to' for React Router */}
          <Link to="/about" className="block p-2 hover:bg-green-700">About</Link>
          <Link to="/services" className="block p-2 hover:bg-green-700">Services</Link>
          <Link to="/contact" className="block p-2 hover:bg-green-700">Contact</Link>
        </div>
      )}
      <main className="container mx-auto mt-8 px-4">
        {children}
      </main>
      <footer className="bg-green-700 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          © 2023 ExpenseTracker. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

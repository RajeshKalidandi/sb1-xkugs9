import React from 'react'
import { Link } from 'react-router-dom'
import { PenTool, Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <PenTool className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">ContentCraft</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link></li>
            <li><Link to="/create" className="text-gray-600 hover:text-blue-600 transition duration-300">Create</Link></li>
            <li><Link to="/settings" className="text-gray-600 hover:text-blue-600 transition duration-300">Settings</Link></li>
            <li><Link to="/help" className="text-gray-600 hover:text-blue-600 transition duration-300">Help</Link></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/create" className="text-gray-600 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Create</Link></li>
            <li><Link to="/settings" className="text-gray-600 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Settings</Link></li>
            <li><Link to="/help" className="text-gray-600 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Help</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
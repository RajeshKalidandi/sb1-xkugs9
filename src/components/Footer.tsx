import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">ContentCraft</h3>
            <p className="text-sm">Intelligent content creation made easy. Optimize your social media presence with AI-powered tools.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><Link to="/about" className="hover:text-blue-400 transition duration-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition duration-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition duration-300" aria-label="Facebook"><Facebook /></a>
              <a href="#" className="hover:text-blue-400 transition duration-300" aria-label="Twitter"><Twitter /></a>
              <a href="#" className="hover:text-blue-400 transition duration-300" aria-label="Instagram"><Instagram /></a>
              <a href="#" className="hover:text-blue-400 transition duration-300" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} ContentCraft. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
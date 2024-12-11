'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X, HardHat } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <HardHat className="w-8 h-8 mr-2 text-blue-500" />
          <span className="hidden sm:inline">Civil Engineering Insights</span>
          <span className="sm:hidden">CEI</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-md"
        >
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

export default Header


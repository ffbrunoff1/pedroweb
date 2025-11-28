import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showServicesMenu, setShowServicesMenu] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { 
      name: 'Serviços', 
      path: '/servicos',
      hasDropdown: true,
      submenu: [
        { name: 'Sites Corporativos', path: '/servicos/sites-corporativos' },
        { name: 'Lojas Virtuais', path: '/servicos/lojas-virtuais' },
        { name: 'Blogs', path: '/servicos/blogs' },
        { name: 'Landing Pages', path: '/servicos/landing-pages' }
      ]
    },
    { name: 'Contato', path: '/contato' }
  ]

  const handlePhoneClick = () => {
    window.open('tel:+5565992452042', '_self')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-secondary-900/95 backdrop-blur-md shadow-lg border-b border-primary-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/a4471a11-ec3c-46e3-a009-0066e4810b0a/logo_1764294083251_0.png"
              alt="Pedro Web"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setShowServicesMenu(true)}
                onMouseLeave={() => item.hasDropdown && setShowServicesMenu(false)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary-400'
                      : 'text-gray-300 hover:text-primary-400'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item.hasDropdown && showServicesMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-secondary-800 rounded-lg shadow-xl border border-primary-500/20 overflow-hidden"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-secondary-700 transition-all duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(65) 99245-2042</span>
            </motion.button>
            <Link to="/contato" className="btn-primary">
              Solicitar Orçamento
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary-800 rounded-lg mt-4 mb-4 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary-400'
                        : 'text-gray-300 hover:text-primary-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-gray-400 hover:text-primary-400 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-secondary-700 space-y-3">
                <button
                  onClick={() => {
                    handlePhoneClick()
                    setIsOpen(false)
                  }}
                  className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(65) 99245-2042</span>
                </button>
                <Link
                  to="/contato"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
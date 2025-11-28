import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Contato', path: '/contato' }
  ]

  const services = [
    { name: 'Sites Corporativos', path: '/servicos/sites-corporativos' },
    { name: 'Lojas Virtuais', path: '/servicos/lojas-virtuais' },
    { name: 'Blogs', path: '/servicos/blogs' },
    { name: 'Landing Pages', path: '/servicos/landing-pages' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(65) 99245-2042',
      action: () => window.open('tel:+5565992452042', '_self')
    },
    {
      icon: MapPin,
      text: 'Nova Mutum - MT',
      action: null
    }
  ]

  return (
    <footer className="bg-secondary-900 border-t border-secondary-700 pb-20">
      <div className="section-container">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Link to="/" className="inline-block">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/a4471a11-ec3c-46e3-a009-0066e4810b0a/logo_1764294083251_0.png"
                  alt="Pedro Web"
                  className="h-12 w-auto"
                />
              </Link>
              
              <p className="text-gray-400 leading-relaxed">
                Especialista em criação de sites premium para empresários de Nova Mutum - MT. 
                Desenvolvimento web com foco em resultados e atendimento presencial.
              </p>

              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={item.action ? { x: 5 } : {}}
                    onClick={item.action}
                    className={`flex items-center space-x-3 ${
                      item.action ? 'cursor-pointer text-primary-400 hover:text-primary-300' : 'text-gray-400'
                    } transition-colors`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-white mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-white mb-6">Nossos Serviços</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white mb-6">Entre em Contato</h3>
              <p className="text-gray-400 mb-6">
                Pronto para transformar sua presença digital? Entre em contato conosco!
              </p>
              
              <div className="space-y-4">
                <Link
                  to="/contato"
                  className="btn-primary w-full text-center block"
                >
                  Solicitar Orçamento
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const message = 'Olá! Gostaria de solicitar um orçamento para criação de site.'
                    window.open(`https://wa.me/5565992452042?text=${encodeURIComponent(message)}`, '_blank')
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                >
                  WhatsApp
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-secondary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>© 2024 Pedro Web. Todos os direitos reservados.</p>
              <p className="mt-1">
                Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">Papum</a></em>
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, MapPin, Phone, CheckCircle } from 'lucide-react'

export default function Hero() {
  const handlePhoneClick = () => {
    window.open('tel:+5565992452042', '_self')
  }

  const benefits = [
    'Atendimento presencial em Nova Mutum',
    'Sites responsivos e otimizados',
    'Design premium e moderno',
    'Foco em conversão de vendas'
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900/20"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent"
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 text-primary-400"
              >
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Nova Mutum - MT</span>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-300">5.0 (47 avaliações)</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Criação de</span>{' '}
                <span className="gradient-text">Sites Premium</span>{' '}
                <span className="text-white">para Empresários</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Desenvolvo sites corporativos, lojas virtuais e landing pages que convertem visitantes em clientes. 
                <strong className="text-primary-400"> Atendimento presencial em Nova Mutum</strong> para empresários que 
                querem resultados reais.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contato" className="btn-primary flex items-center justify-center space-x-2">
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePhoneClick}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Ligar Agora</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-8 text-sm text-gray-400"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">50+</div>
                <div>Sites Criados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">100%</div>
                <div>Responsivos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">24h</div>
                <div>Suporte</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity }
                }}
                className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-xl"
              />
              
              <motion.img
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a4471a11-ec3c-46e3-a009-0066e4810b0a/1764293940962_24kzy5v9wow_Logo_com_fundo.png"
                alt="Sites Corporativos Premium"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl shadow-lg"
              >
                <div className="text-sm font-semibold">Desenvolvido com</div>
                <div className="text-lg font-bold">Tecnologia Premium</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-400"
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Monitor, ShoppingCart, FileText, Zap, CheckCircle, Star } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'sites-corporativos',
      title: 'Sites Corporativos',
      description: 'Sites empresariais premium com design moderno e responsivo. Ideais para estabelecer credibilidade e fortalecer sua marca no mercado digital.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a4471a11-ec3c-46e3-a009-0066e4810b0a/1764293940962_24kzy5v9wow_Logo_com_fundo.png',
      icon: Monitor,
      features: ['Design Premium', 'SEO Otimizado', 'Responsivo', 'Suporte Incluso'],
      price: 'A partir de R$ 1.200',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'lojas-virtuais',
      title: 'Lojas Virtuais',
      description: 'E-commerce completo com sistema de pagamento, gestão de produtos e vendas. Transforme seu negócio físico em uma máquina de vendas online.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=600',
      icon: ShoppingCart,
      features: ['Pagamento Online', 'Gestão Completa', 'Mobile First', 'Analytics'],
      price: 'A partir de R$ 2.500',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'blogs',
      title: 'Blogs Profissionais',
      description: 'Plataforma de conteúdo otimizada para SEO e engajamento. Perfeita para construir autoridade e atrair clientes através do marketing de conteúdo.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600',
      icon: FileText,
      features: ['CMS Intuitivo', 'SEO Avançado', 'Social Media', 'Newsletter'],
      price: 'A partir de R$ 800',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      description: 'Páginas de alta conversão focadas em capturar leads e vender produtos. Otimizadas para transformar visitantes em clientes qualificados.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
      icon: Zap,
      features: ['Alta Conversão', 'A/B Testing', 'Analytics', 'Integração CRM'],
      price: 'A partir de R$ 600',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="servicos" className="py-20 bg-secondary-900">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full font-semibold mb-4"
          >
            Nossos Serviços
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Soluções <span className="gradient-text">Digitais Completas</span>
            <br />para Seu Negócio
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Desenvolvemos sites que não apenas impressionam visualmente, mas que realmente geram resultados 
            para empresários de Nova Mutum e região.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative bg-secondary-800 rounded-2xl overflow-hidden border ${service.borderColor} card-hover`}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-secondary-800 via-transparent to-transparent`} />
                
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-semibold">4.9</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-primary-400 font-bold text-lg">{service.price}</span>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Link
                    to={`/servicos/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-primary-600 hover:to-primary-700 hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Ver Detalhes</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <Link
                    to="/contato"
                    className="flex-1 px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 text-center"
                  >
                    Orçamento
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Precisa de uma Solução Personalizada?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Cada negócio é único. Desenvolvemos soluções sob medida para atender suas necessidades específicas 
              com a qualidade e eficiência que você merece.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <span>Conversar com Especialista</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
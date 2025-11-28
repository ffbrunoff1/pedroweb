import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Monitor, ShoppingCart, FileText, Zap, ArrowRight, Star, CheckCircle, Award } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      id: 'sites-corporativos',
      title: 'Sites Corporativos',
      description: 'Sites empresariais premium com design moderno e responsivo, ideais para estabelecer credibilidade e fortalecer sua marca no mercado digital.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a4471a11-ec3c-46e3-a009-0066e4810b0a/1764293940962_24kzy5v9wow_Logo_com_fundo.png',
      icon: Monitor,
      features: ['Design Premium', 'SEO Otimizado', 'Responsivo', 'Suporte Incluso', 'Painel Admin', 'SSL Grátis'],
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
      features: ['Gateway de Pagamento', 'Gestão de Estoque', 'Mobile First', 'Analytics', 'Marketing', 'Multi-moedas'],
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
      features: ['CMS Intuitivo', 'SEO Avançado', 'Social Media', 'Newsletter', 'Comentários', 'Tags'],
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
      features: ['Alta Conversão', 'A/B Testing', 'Analytics', 'Integração CRM', 'Forms', 'Pop-ups'],
      price: 'A partir de R$ 600',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    }
  ]

  const benefits = [
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Desenvolvemos com as melhores práticas do mercado'
    },
    {
      icon: Zap,
      title: 'Performance Superior',
      description: 'Sites rápidos e otimizados para todos os dispositivos'
    },
    {
      icon: Star,
      title: 'Atendimento 5 Estrelas',
      description: 'Suporte dedicado durante todo o projeto'
    }
  ]

  return (
    <main className="pt-20 bg-secondary-900 min-h-screen overflow-hidden">
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full font-semibold mb-4">
              Nossos Serviços
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Soluções <span className="gradient-text">Digitais Completas</span>
              <br />para Seu Sucesso
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos sites que não apenas impressionam visualmente, mas que realmente geram 
              resultados para empresários de Nova Mutum e região.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group bg-secondary-800 rounded-2xl overflow-hidden border ${service.borderColor} card-hover`}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-800 via-transparent to-transparent" />
                  
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-secondary-800 rounded-xl p-8 text-center border border-secondary-600 card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl p-12 border border-primary-500/20"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Precisa de uma Solução Personalizada?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Cada negócio é único. Desenvolvemos soluções sob medida para atender suas necessidades específicas 
              com a qualidade e eficiência que você merece.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center space-x-2 btn-primary text-lg px-8 py-4"
            >
              <span>Conversar com Especialista</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, TrendingUp, CheckCircle2, Zap, Shield, Target } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Sites desenvolvidos com as melhores práticas do mercado'
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Projetos finalizados em tempo recorde sem perder qualidade'
    },
    {
      icon: Users,
      title: 'Atendimento Local',
      description: 'Atendimento presencial em Nova Mutum para maior confiança'
    },
    {
      icon: TrendingUp,
      title: 'Foco em Resultados',
      description: 'Sites que realmente convertem visitantes em clientes'
    }
  ]

  const advantages = [
    'Design responsivo para todos os dispositivos',
    'Otimização completa para Google (SEO)',
    'Velocidade de carregamento superior',
    'Integração com redes sociais',
    'Formulários inteligentes de contato',
    'Painel administrativo intuitivo',
    'Certificado de segurança SSL',
    'Backup automático e segurança'
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="sobre" className="py-20 bg-secondary-800">
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
            Sobre o Pedro Web
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Criando <span className="gradient-text">Experiências Digitais</span> 
            <br />que Transformam Negócios
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Especialista em desenvolvimento web com foco em resultados para empresários de Nova Mutum e região. 
            Cada projeto é desenvolvido com tecnologia de ponta e estratégia voltada para conversão.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Por que escolher o Pedro Web?
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Em um mundo cada vez mais digital, ter um site profissional não é mais um luxo, é uma necessidade. 
              Meu compromisso é desenvolver soluções web que não apenas impressionem visualmente, mas que 
              realmente gerem resultados para o seu negócio.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-8 border border-primary-500/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">Vantagens Exclusivas</h4>
              </div>
              
              <div className="grid gap-3">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary-500/5 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-300">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Shield,
              title: 'Segurança Garantida',
              description: 'Todos os sites incluem certificado SSL e proteção contra ataques',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: Zap,
              title: 'Performance Superior',
              description: 'Otimização avançada para velocidade máxima de carregamento',
              color: 'from-yellow-500 to-yellow-600'
            },
            {
              icon: Users,
              title: 'Suporte Dedicado',
              description: 'Atendimento personalizado durante e após o desenvolvimento',
              color: 'from-blue-500 to-blue-600'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-secondary-700/50 rounded-xl p-8 border border-secondary-600 card-hover backdrop-blur-sm"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4">{item.title}</h3>
              <p className="text-gray-400 text-center leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
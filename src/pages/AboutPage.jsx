import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, Users, Clock, TrendingUp, MapPin, Phone, Star, CheckCircle2, Zap, Shield, Target } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: '50+', label: 'Sites Criados', icon: Award },
    { number: '100%', label: 'Responsivos', icon: Zap },
    { number: '5.0', label: 'Avaliação Média', icon: Star },
    { number: '24h', label: 'Suporte', icon: Clock }
  ]

  const values = [
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Desenvolvemos cada projeto com as mais altas práticas de qualidade, garantindo sites que impressionam e convertem.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção dedicada e atendimento presencial em Nova Mutum para máxima confiança.'
    },
    {
      icon: TrendingUp,
      title: 'Foco em Resultados',
      description: 'Não criamos apenas sites bonitos, criamos ferramentas que geram leads, vendas e crescimento real.'
    },
    {
      icon: Shield,
      title: 'Confiabilidade',
      description: 'Entregamos projetos no prazo, com suporte contínuo e a segurança que seu negócio merece.'
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
    'Backup automático e segurança avançada'
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
              Sobre o Pedro Web
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transformando <span className="gradient-text">Negócios</span>
              <br />Através da Web
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Especialista em desenvolvimento web com foco em resultados para empresários de Nova Mutum e região. 
              Cada projeto é desenvolvido com tecnologia de ponta e estratégia voltada para conversão.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Criando Experiências Digitais que Convertem
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Em um mundo cada vez mais digital, ter um site profissional não é mais um luxo, é uma necessidade. 
                  Como especialista em desenvolvimento web em Nova Mutum - MT, meu compromisso é desenvolver 
                  soluções que não apenas impressionem visualmente, mas que realmente gerem resultados para o seu negócio.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Trabalho com as mais modernas tecnologias do mercado, sempre focando na experiência do usuário 
                  e na conversão de visitantes em clientes. Cada projeto é único e desenvolvido sob medida para 
                  atender as necessidades específicas do seu negócio.
                </p>

                <div className="flex items-center space-x-4 text-primary-400">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg font-semibold">Atendimento presencial em Nova Mutum - MT</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-8 border border-primary-500/20">
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/a4471a11-ec3c-46e3-a009-0066e4810b0a/logo_1764294083251_0.png"
                  alt="Pedro Web - Especialista em Desenvolvimento Web"
                  className="w-full max-w-sm mx-auto rounded-xl"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
                    {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-secondary-800 rounded-xl p-8 text-center border border-secondary-600 card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nossos <span className="gradient-text">Valores</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Princípios que orientam nossa abordagem no desenvolvimento de soluções digitais
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="bg-secondary-800 rounded-xl p-8 border border-secondary-600 card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                Por que escolher o Pedro Web?
              </h3>
              
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-secondary-800 rounded-xl p-8 border border-secondary-600">
                <h4 className="text-2xl font-bold text-white mb-6">Entre em Contato</h4>
                
                <div className="space-y-6">
                  <div
                    onClick={() => window.open('tel:+5565992452042', '_self')}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-secondary-600 cursor-pointer hover:border-primary-500/50 hover:bg-secondary-700/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Telefone</div>
                      <div className="text-primary-400">(65) 99245-2042</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-lg border border-secondary-600">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Localização</div>
                      <div className="text-gray-400">Nova Mutum - MT</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/contato" className="btn-primary flex-1 text-center">
                    Solicitar Orçamento
                  </Link>
                  <Link to="/servicos" className="btn-secondary flex-1 text-center">
                    Ver Serviços
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl p-12 border border-primary-500/20"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para Transformar Seu Negócio?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Vamos conversar sobre como posso ajudar a levar sua empresa para o próximo nível 
              com uma presença digital profissional e eficaz.
            </p>
            <Link
              to="/contato"
              className="btn-primary text-lg px-8 py-4"
            >
              Vamos Conversar
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Award, Zap, Shield, Users } from 'lucide-react'

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams()

  const serviceData = {
    'sites-corporativos': {
      title: 'Sites Corporativos Premium',
      subtitle: 'Presença digital profissional que gera credibilidade e resultados',
      description: 'Sites corporativos são essenciais para empresas que desejam estabelecer uma presença sólida na internet. Com um design moderno e responsivo, esses sites são projetados para serem atrativos e funcionais, proporcionando uma experiência de navegação agradável para os usuários. Acreditamos que cada empresa tem uma identidade única e, por isso, adaptamos nosso serviço para atender às suas necessidades específicas.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a4471a11-ec3c-46e3-a009-0066e4810b0a/1764293940962_24kzy5v9wow_Logo_com_fundo.png',
      price: 'A partir de R$ 1.200',
      color: 'from-blue-500 to-blue-600',
      features: [
        'Design responsivo para todos os dispositivos',
        'Otimização completa para motores de busca (SEO)',
        'Painel administrativo intuitivo',
        'Integração com redes sociais',
        'Formulários de contato inteligentes',
        'Certificado SSL incluído',
        'Velocidade de carregamento superior',
        'Suporte técnico por 12 meses'
      ],
      benefits: [
        { icon: Award, title: 'Credibilidade', description: 'Transmite profissionalismo e confiança' },
        { icon: Zap, title: 'Performance', description: 'Carregamento rápido e otimizado' },
        { icon: Shield, title: 'Segurança', description: 'Proteção avançada contra ameaças' }
      ]
    },
    'lojas-virtuais': {
      title: 'Lojas Virtuais Completas',
      subtitle: 'E-commerce profissional para vender online 24/7',
      description: 'Descubra o poder das lojas virtuais e transforme seu negócio em uma vitrine digital. Com a crescente popularidade do comércio eletrônico, ter uma loja online se tornou essencial para empreendedores que desejam alcançar um público mais amplo. Nossas soluções oferecem uma plataforma intuitiva, onde você pode gerenciar seus produtos, processar pagamentos de forma segura e acompanhar o desempenho das vendas em tempo real.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=600',
      price: 'A partir de R$ 2.500',
      color: 'from-green-500 to-green-600',
      features: [
        'Sistema completo de e-commerce',
        'Gateway de pagamento integrado',
        'Gestão de estoque e produtos',
        'Carrinho de compras otimizado',
        'Relatórios de vendas em tempo real',
        'Integração com marketplace',
        'Sistema de cupons e promoções',
        'APP mobile responsivo'
      ],
      benefits: [
        { icon: Users, title: 'Alcance Global', description: 'Venda para clientes em qualquer lugar' },
        { icon: Award, title: 'Conversão', description: 'Otimizado para maximizar vendas' },
        { icon: Zap, title: 'Automação', description: 'Processe vendas automaticamente' }
      ]
    },
    'blogs': {
      title: 'Blogs Profissionais',
      subtitle: 'Marketing de conteúdo que atrai e converte clientes',
      description: 'Os blogs se tornaram uma ferramenta essencial para compartilhar ideias, experiências e conhecimento de forma acessível e envolvente. Com uma plataforma que permite a expressão pessoal e profissional, os blogs podem ajudar a construir uma comunidade em torno de interesses comuns. Seja você um empresário buscando promover sua marca, um profissional que deseja se destacar no mercado ou alguém apaixonado por um hobby, criar um blog é uma excelente maneira de se conectar com um público diversificado.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600',
      price: 'A partir de R$ 800',
      color: 'from-purple-500 to-purple-600',
      features: [
        'CMS intuitivo para publicação',
        'SEO otimizado para Google',
        'Sistema de comentários',
        'Newsletter integrada',
        'Categorias e tags organizadas',
        'Compartilhamento social',
        'Analytics de conteúdo',
        'Templates personalizáveis'
      ],
      benefits: [
        { icon: Award, title: 'Autoridade', description: 'Construa sua reputação como especialista' },
        { icon: Users, title: 'Engajamento', description: 'Conecte-se com sua audiência' },
        { icon: Zap, title: 'SEO Power', description: 'Melhore seu ranking no Google' }
      ]
    },
    'landing-pages': {
      title: 'Landing Pages de Alto Impacto',
      subtitle: 'Páginas que convertem visitantes em clientes',
      description: 'Landing Pages são páginas projetadas para converter visitantes em leads ou clientes. Elas têm um objetivo específico, focando em uma oferta ou mensagem que atrai a atenção do usuário e facilita a ação desejada, como preencher um formulário ou realizar uma compra. A estrutura de uma Landing Page é otimizada para minimizar distrações e aumentar a taxa de conversão, utilizando elementos como títulos impactantes, imagens atraentes e chamadas para ação claras.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
      price: 'A partir de R$ 600',
      color: 'from-orange-500 to-orange-600',
      features: [
        'Design focado em conversão',
        'Formulários otimizados',
        'A/B Testing integrado',
        'Analytics detalhado',
        'Pop-ups inteligentes',
        'Integração com CRM',
        'Carregamento ultra-rápido',
        'Mobile-first design'
      ],
      benefits: [
        { icon: Zap, title: 'Conversão', description: 'Taxa de conversão até 300% maior' },
        { icon: Award, title: 'ROI', description: 'Retorno sobre investimento comprovado' },
        { icon: Users, title: 'Leads', description: 'Capture leads qualificados 24/7' }
      ]
    }
  }

  const service = serviceData[serviceSlug]

  if (!service) {
    return (
      <main className="pt-20 bg-secondary-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Serviço não encontrado</h1>
          <Link to="/servicos" className="btn-primary">
            Ver Todos os Serviços
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 bg-secondary-900 min-h-screen overflow-hidden">
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-4"
                >
                  {service.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-primary-400 font-semibold mb-6"
                >
                  {service.subtitle}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  {service.description}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <span className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {service.price}
                </span>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-400">5.0 (47 avaliações)</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contato" className="btn-primary flex items-center justify-center space-x-2">
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <button
                  onClick={() => {
                    const message = `Olá! Gostaria de um orçamento para ${service.title}.`
                    window.open(`https://wa.me/5565992452042?text=${encodeURIComponent(message)}`, '_blank')
                  }}
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <span>WhatsApp</span>
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={service.image}
                alt={service.title}
                className="w-full rounded-2xl shadow-2xl"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-xl shadow-xl"
              >
                <div className="text-sm font-semibold">Desenvolvido com</div>
                <div className="text-lg font-bold">Tecnologia Premium</div>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Recursos Incluídos</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary-800/50 transition-all duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Principais Benefícios</h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-secondary-800/50 rounded-xl border border-secondary-700"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl p-12 border border-primary-500/20"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para Começar?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Transforme sua presença digital com nosso {service.title}. 
              Entre em contato conosco e solicite seu orçamento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="btn-primary text-lg px-8 py-4"
              >
                Solicitar Orçamento Personalizado
              </Link>
              
              <Link
                to="/servicos"
                className="btn-secondary text-lg px-8 py-4"
              >
                Ver Outros Serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
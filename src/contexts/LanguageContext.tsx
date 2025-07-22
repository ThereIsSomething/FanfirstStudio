import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'ja' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    // Header
    'header.services': '服务项目',
    'header.success': '成功案例',
    'header.pricing': '价格方案',
    'header.apply': '立即申请',
    'header.joinElite': '加入精英团队',
    
    // Hero
    'hero.badge': '精英创作者管理',
    'hero.title': '专业创作者',
    'hero.titleHighlight': '管理机构',
    'hero.subtitle': '内容创作者成功的顶级机构。我们提供完整的管理解决方案来最大化您的潜力。',
    'hero.getStarted': '立即开始',
    'hero.viewStories': '查看成功案例',
    'hero.avgGrowth': '平均增长',
    'hero.revenue': '产生的收入',
    'hero.creators': '满意的创作者',
    
    // Services
    'services.badge': '完整解决方案',
    'services.title': '完整的创作者',
    'services.titleHighlight': '管理套件',
    'services.subtitle': '专为最大化您的成功和简化您的业务而设计的专业服务',
    
    'services.content.title': '内容精通',
    'services.content.desc': '专业的内容策略和制作，将您的创意愿景转化为病毒式传播',
    
    'services.chat.title': '粉丝帝国建设',
    'services.chat.desc': '专业的参与策略，将普通观众转化为忠诚的高价值超级粉丝',
    
    'services.revenue.title': '收入工程',
    'services.revenue.desc': '先进的优化算法，系统性地最大化您在所有平台上的收入潜力',
    
    'services.account.title': '平台主导',
    'services.account.desc': '完整的多平台管理，具有精确自动化和24/7监控系统',
    
    'services.marketing.title': '病毒式营销',
    'services.marketing.desc': '建立您的品牌存在并推动指数级受众扩张的战略增长活动',
    
    'services.legal.title': '精英保护',
    'services.legal.desc': '全面的法律和隐私保护服务，保护您的业务和个人安全',
    
    // Pricing
    'pricing.badge': '高级定价计划',
    'pricing.title': '选择您的',
    'pricing.titleHighlight': '成功级别',
    'pricing.subtitle': '每个计划都旨在将创作者转变为行业领导者，并保证结果',
    'pricing.monthly': '月付',
    'pricing.yearly': '年付',
    'pricing.save': '节省17%',
    'pricing.mostPopular': '最受欢迎',
    'pricing.eliteTier': '精英级',
    'pricing.getStarted': '开始',
    'pricing.choosePlan': '选择计划',
    'pricing.getElite': '获得精英',
    
    // Pricing Plans
    'pricing.onetime': '一次性设置',
    'pricing.monthly': '月度管理',
    'pricing.starter.name': '入门设置',
    'pricing.starter.desc': '适合准备专业启动的新创作者',
    'pricing.professional.name': '专业启动',
    'pricing.professional.desc': '为认真的创作者提供全面设置',
    'pricing.elite.name': '精英帝国建设者',
    'pricing.elite.desc': '终极创作者转型套餐',
    'pricing.growth.name': '成长伙伴',
    'pricing.growth.desc': '持续支持以实现一致增长',
    'pricing.success.name': '成功加速器',
    'pricing.success.desc': '为认真创作者提供全方位服务管理',
    'pricing.domination.name': '精英统治',
    'pricing.domination.desc': '顶级创作者的高级管理',
    
    // Contact
    'contact.badge': '立即开始',
    'contact.title': '准备好转变',
    'contact.titleHighlight': '您的成功了吗？',
    'contact.subtitle': '填写我们的申请表，让我们讨论如何帮助您实现目标',
    'contact.formTitle': '申请表',
    'contact.name': '全名',
    'contact.email': '电子邮件地址（请确保准确）',
    'contact.phone': '电话号码',
    'contact.experience': '经验水平',
    'contact.platforms': '感兴趣的平台',
    'contact.message': '告诉我们您的情况和目标',
    'contact.submit': '提交申请',
    
    // Common
    'common.loading': '加载中...',
    'common.error': '发生错误',
    'common.success': '成功！',
    
    // Benefits
    'benefits.revenue.title': '平均收入增长300%',
    'benefits.revenue.desc': '我们的创作者在前3个月内看到显著的收入增长',
    'benefits.time.title': '每周节省40+小时',
    'benefits.time.desc': '专注于内容创作，我们处理聊天、营销和管理任务',
    'benefits.privacy.title': '完整的隐私保护',
    'benefits.privacy.desc': '为您的安全提供先进的安全措施和法律支持',
    'benefits.manager.title': '专属客户经理',
    'benefits.manager.desc': '来自了解您目标的行业专家的个人支持',
    'benefits.platform.title': '多平台优化',
    'benefits.platform.desc': '在OnlyFans、Fansly、Fansone等平台上最大化收益',
    
    // Testimonials
    'testimonials.title': '我们创作者的成功故事',
    'testimonials.subtitle': '选择与FanFirst Studio合作的真实创作者的真实结果。',
    'testimonials.role1': '内容创作者',
    'testimonials.role2': '模特和影响者',
    'testimonials.role3': '内容创作者',
    'testimonials.content1': 'FanFirst Studio完全改变了我的业务。仅仅3个月，我的收入增长了400%。他们的团队处理一切都非常专业。',
    'testimonials.content2': '我收到的支持和指导令人难以置信。他们帮助我建立了一个可持续的业务，同时保持我的隐私和安全。',
    'testimonials.content3': '我一个人很难管理所有事情。现在我可以专注于创作，而他们处理商业方面。我做过的最好的决定！',
    
    // Footer
    'footer.newsletter.title': '获取模特洞察更新',
    'footer.newsletter.desc': '获取独家技巧、中英文聊天模板、内容策略、行业洞察和成功策略，直接发送到您的收件箱',
    'footer.newsletter.placeholder': '输入您的电子邮件地址',
    'footer.newsletter.subscribe': '订阅',
    'footer.company.desc': '专业内容创作者代理机构，专门从事高级平台管理、收入优化和创作者成功。将创作者转变为行业领导者。',
    'footer.copyright': '© 2025 FanFirst Studio. 保留所有权利。',
    'footer.tagline': '专业内容创作者管理与优化',
  },
  en: {
    // Header
    'header.services': 'Services',
    'header.success': 'Success Stories',
    'header.pricing': 'Pricing',
    'header.apply': 'Apply',
    'header.joinElite': 'Join Elite',
    
    // Hero
    'hero.badge': 'Elite Creator Management',
    'hero.title': 'Professional Creator',
    'hero.titleHighlight': 'Management Agency',
    'hero.subtitle': 'The premier agency for content creator success. We provide complete management solutions to maximize your potential.',
    'hero.getStarted': 'Get Started Today',
    'hero.viewStories': 'View Success Stories',
    'hero.avgGrowth': 'Average Growth',
    'hero.revenue': 'Revenue Generated',
    'hero.creators': 'Happy Creators',
    
    // Services
    'services.badge': 'Complete Solution Suite',
    'services.title': 'Complete Creator',
    'services.titleHighlight': 'Management Suite',
    'services.subtitle': 'Professional services designed to maximize your success and streamline your business.',
    
    'services.content.title': 'Content Mastery',
    'services.content.desc': 'Professional content strategy and production that transforms your creative vision into viral sensations.',
    
    'services.chat.title': 'Fan Empire Building',
    'services.chat.desc': 'Expert engagement strategies that convert casual viewers into devoted, high-value superfans.',
    
    'services.revenue.title': 'Revenue Engineering',
    'services.revenue.desc': 'Advanced optimization algorithms that systematically maximize your earning potential across all platforms.',
    
    'services.account.title': 'Platform Domination',
    'services.account.desc': 'Complete multi-platform management with precision automation and 24/7 monitoring systems.',
    
    'services.marketing.title': 'Viral Marketing',
    'services.marketing.desc': 'Strategic growth campaigns that establish your brand presence and drive exponential audience expansion.',
    
    'services.legal.title': 'Elite Protection',
    'services.legal.desc': 'Comprehensive legal and privacy protection services to safeguard your business and personal security.',
    
    // Pricing
    'pricing.badge': 'Premium Pricing Plans',
    'pricing.title': 'Choose Your',
    'pricing.titleHighlight': 'Success Level',
    'pricing.subtitle': 'Every plan designed to transform creators into industry leaders with guaranteed results.',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly',
    'pricing.save': 'Save 17%',
    'pricing.mostPopular': 'Most Popular',
    'pricing.eliteTier': 'Elite Tier',
    'pricing.getStarted': 'Get Started',
    'pricing.choosePlan': 'Choose Plan',
    'pricing.getElite': 'Get Elite',
    
    // Pricing Plans
    'pricing.onetime': 'One-Time Setup',
    'pricing.monthly': 'Monthly Management',
    'pricing.starter.name': 'Starter Setup',
    'pricing.starter.desc': 'Perfect for new creators ready to launch professionally',
    'pricing.professional.name': 'Professional Launch',
    'pricing.professional.desc': 'Comprehensive setup for serious creators',
    'pricing.elite.name': 'Elite Empire Builder',
    'pricing.elite.desc': 'The ultimate creator transformation package',
    'pricing.growth.name': 'Growth Partner',
    'pricing.growth.desc': 'Ongoing support for consistent growth',
    'pricing.success.name': 'Success Accelerator',
    'pricing.success.desc': 'Full-service management for serious creators',
    'pricing.domination.name': 'Elite Domination',
    'pricing.domination.desc': 'Premium management for top-tier creators',
    
    // Contact
    'contact.badge': 'Get Started Today',
    'contact.title': 'Ready to Transform',
    'contact.titleHighlight': 'Your Success?',
    'contact.subtitle': 'Complete our application form and let\'s discuss how we can help you achieve your goals.',
    'contact.formTitle': 'Application Form',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address (make sure its accurate)',
    'contact.phone': 'Phone Number',
    'contact.experience': 'Experience Level',
    'contact.platforms': 'Platforms of Interest',
    'contact.message': 'Tell us about yourself and your goals',
    'contact.submit': 'Submit Application',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error occurred',
    'common.success': 'Success!',
    
    // Benefits
    'benefits.revenue.title': '300% Average Revenue Increase',
    'benefits.revenue.desc': 'Our creators see dramatic income growth within the first 3 months',
    'benefits.time.title': 'Save 40+ Hours Per Week',
    'benefits.time.desc': 'Focus on content while we handle chat, marketing, and admin tasks',
    'benefits.privacy.title': 'Complete Privacy Protection', 
    'benefits.privacy.desc': 'Advanced security measures and legal support for your safety',
    'benefits.manager.title': 'Dedicated Account Manager',
    'benefits.manager.desc': 'Personal support from industry experts who understand your goals',
    'benefits.platform.title': 'Multi-Platform Optimization',
    'benefits.platform.desc': 'Maximize earnings across OnlyFans, Fansly, Fansone, and more',
    
    // Testimonials
    'testimonials.title': 'Success Stories from Our Creators',
    'testimonials.subtitle': 'Real results from real creators who chose to partner with FanFirst Studio.',
    'testimonials.role1': 'Content Creator',
    'testimonials.role2': 'Model & Influencer', 
    'testimonials.role3': 'Content Creator',
    'testimonials.content1': 'FanFirst Studio completely transformed my business. In just 3 months, my earnings increased by 400%. Their team handles everything so professionally.',
    'testimonials.content2': 'The support and guidance I received was incredible. They helped me build a sustainable business while maintaining my privacy and safety.',
    'testimonials.content3': 'I was struggling to manage everything on my own. Now I can focus on creating while they handle the business side. Best decision I ever made!',
    
    // Footer
    'footer.newsletter.title': 'Stay Updated with Model Insights',
    'footer.newsletter.desc': 'Get exclusive tips, English/Chinese Chat Templates, Content Strategy, industry insights, and success strategies delivered to your inbox.',
    'footer.newsletter.placeholder': 'Enter your email address',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.company.desc': 'The premier content creator agency specializing in premium platform management, revenue optimization, and creator success. Transforming creators into industry leaders.',
    'footer.copyright': '© 2025 FanFirst Studio. All rights reserved.',
    'footer.tagline': 'Professional content creator management & optimization',
  },
  es: {
    // Header
    'header.services': 'Servicios',
    'header.success': 'Historias de Éxito',
    'header.pricing': 'Precios',
    'header.apply': 'Aplicar',
    'header.joinElite': 'Únete a Elite',
    
    // Hero
    'hero.badge': 'Gestión Elite de Creadores',
    'hero.title': 'Agencia Profesional de',
    'hero.titleHighlight': 'Gestión de Creadores',
    'hero.subtitle': 'La agencia premier para el éxito de creadores de contenido. Proporcionamos soluciones completas de gestión para maximizar tu potencial.',
    'hero.getStarted': 'Comenzar Hoy',
    'hero.viewStories': 'Ver Historias de Éxito',
    'hero.avgGrowth': 'Crecimiento Promedio',
    'hero.revenue': 'Ingresos Generados',
    'hero.creators': 'Creadores Felices',
    
    // Services
    'services.badge': 'Suite de Solución Completa',
    'services.title': 'Suite Completa de',
    'services.titleHighlight': 'Gestión de Creadores',
    'services.subtitle': 'Servicios profesionales diseñados para maximizar tu éxito y optimizar tu negocio.',
    
    'services.content.title': 'Maestría de Contenido',
    'services.content.desc': 'Estrategia y producción de contenido profesional que transforma tu visión creativa en sensaciones virales.',
    
    'services.chat.title': 'Construcción de Imperio de Fans',
    'services.chat.desc': 'Estrategias expertas de engagement que convierten espectadores casuales en superfans devotos de alto valor.',
    
    'services.revenue.title': 'Ingeniería de Ingresos',
    'services.revenue.desc': 'Algoritmos avanzados de optimización que maximizan sistemáticamente tu potencial de ganancias en todas las plataformas.',
    
    'services.account.title': 'Dominación de Plataforma',
    'services.account.desc': 'Gestión completa multi-plataforma con automatización de precisión y sistemas de monitoreo 24/7.',
    
    'services.marketing.title': 'Marketing Viral',
    'services.marketing.desc': 'Campañas estratégicas de crecimiento que establecen la presencia de tu marca y impulsan la expansión exponencial de audiencia.',
    
    'services.legal.title': 'Protección Elite',
    'services.legal.desc': 'Servicios integrales de protección legal y privacidad para salvaguardar tu negocio y seguridad personal.',
    
    // Pricing
    'pricing.badge': 'Planes de Precios Premium',
    'pricing.title': 'Elige Tu',
    'pricing.titleHighlight': 'Nivel de Éxito',
    'pricing.subtitle': 'Cada plan diseñado para transformar creadores en líderes de la industria con resultados garantizados.',
    'pricing.monthly': 'Mensual',
    'pricing.yearly': 'Anual',
    'pricing.save': 'Ahorra 17%',
    'pricing.mostPopular': 'Más Popular',
    'pricing.eliteTier': 'Nivel Elite',
    'pricing.getStarted': 'Comenzar',
    'pricing.choosePlan': 'Elegir Plan',
    'pricing.getElite': 'Obtener Elite',
    
    // Pricing Plans
    'pricing.onetime': 'Configuración Única',
    'pricing.monthly': 'Gestión Mensual',
    'pricing.starter.name': 'Configuración Inicial',
    'pricing.starter.desc': 'Perfecto para nuevos creadores listos para lanzarse profesionalmente',
    'pricing.professional.name': 'Lanzamiento Profesional',
    'pricing.professional.desc': 'Configuración integral para creadores serios',
    'pricing.elite.name': 'Constructor de Imperio Elite',
    'pricing.elite.desc': 'El paquete definitivo de transformación de creadores',
    'pricing.growth.name': 'Socio de Crecimiento',
    'pricing.growth.desc': 'Soporte continuo para crecimiento consistente',
    'pricing.success.name': 'Acelerador de Éxito',
    'pricing.success.desc': 'Gestión de servicio completo para creadores serios',
    'pricing.domination.name': 'Dominación Elite',
    'pricing.domination.desc': 'Gestión premium para creadores de primer nivel',
    
    // Contact
    'contact.badge': 'Comenzar Hoy',
    'contact.title': 'Listo para Transformar',
    'contact.titleHighlight': 'Tu Éxito?',
    'contact.subtitle': 'Completa nuestro formulario de aplicación y discutamos cómo podemos ayudarte a lograr tus objetivos.',
    'contact.formTitle': 'Formulario de Aplicación',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Dirección de Email',
    'contact.phone': 'Número de Teléfono',
    'contact.experience': 'Nivel de Experiencia',
    'contact.platforms': 'Plataformas de Interés',
    'contact.message': 'Cuéntanos sobre ti y tus objetivos',
    'contact.submit': 'Enviar Aplicación',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Ocurrió un error',
    'common.success': '¡Éxito!',
    
    // Benefits  
    'benefits.revenue.title': 'Aumento de Ingresos Promedio del 300%',
    'benefits.revenue.desc': 'Nuestros creadores ven un crecimiento dramático de ingresos en los primeros 3 meses',
    'benefits.time.title': 'Ahorra 40+ Horas por Semana',
    'benefits.time.desc': 'Enfócate en el contenido mientras manejamos chat, marketing y tareas administrativas',
    'benefits.privacy.title': 'Protección Completa de Privacidad',
    'benefits.privacy.desc': 'Medidas de seguridad avanzadas y soporte legal para tu seguridad',
    'benefits.manager.title': 'Gerente de Cuenta Dedicado',
    'benefits.manager.desc': 'Soporte personal de expertos de la industria que entienden tus objetivos',
    'benefits.platform.title': 'Optimización Multi-Plataforma',
    'benefits.platform.desc': 'Maximiza ganancias en OnlyFans, Fansly, Fansone y más',
    
    // Testimonials
    'testimonials.title': 'Historias de Éxito de Nuestros Creadores',
    'testimonials.subtitle': 'Resultados reales de creadores reales que eligieron asociarse con FanFirst Studio.',
    'testimonials.role1': 'Creador de Contenido',
    'testimonials.role2': 'Modelo e Influencer',
    'testimonials.role3': 'Creador de Contenido',
    'testimonials.content1': 'FanFirst Studio transformó completamente mi negocio. En solo 3 meses, mis ganancias aumentaron un 400%. Su equipo maneja todo tan profesionalmente.',
    'testimonials.content2': 'El apoyo y orientación que recibí fue increíble. Me ayudaron a construir un negocio sostenible manteniendo mi privacidad y seguridad.',
    'testimonials.content3': 'Estaba luchando por manejar todo por mi cuenta. Ahora puedo enfocarme en crear mientras ellos manejan el lado comercial. ¡La mejor decisión que tomé!',
    
    // Footer
    'footer.newsletter.title': 'Mantente Actualizado con Perspectivas de Modelos',
    'footer.newsletter.desc': 'Obtén consejos exclusivos, plantillas de chat en inglés/chino, estrategia de contenido, perspectivas de la industria y estrategias de éxito entregadas en tu bandeja de entrada.',
    'footer.newsletter.placeholder': 'Ingresa tu dirección de correo electrónico',
    'footer.newsletter.subscribe': 'Suscribirse',
    'footer.company.desc': 'La agencia premier de creadores de contenido especializada en gestión de plataformas premium, optimización de ingresos y éxito de creadores. Transformando creadores en líderes de la industria.',
    'footer.copyright': '© 2025 FanFirst Studio. Todos los derechos reservados.',
    'footer.tagline': 'Gestión y optimización profesional de creadores de contenido',
  },
  fr: {
    // Header
    'header.services': 'Services',
    'header.success': 'Histoires de Succès',
    'header.pricing': 'Tarifs',
    'header.apply': 'Postuler',
    'header.joinElite': 'Rejoindre Elite',
    
    // Hero
    'hero.badge': 'Gestion Elite de Créateurs',
    'hero.title': 'Agence Professionnelle de',
    'hero.titleHighlight': 'Gestion de Créateurs',
    'hero.subtitle': 'L\'agence de premier plan pour le succès des créateurs de contenu. Nous fournissons des solutions de gestion complètes pour maximiser votre potentiel.',
    'hero.getStarted': 'Commencer Aujourd\'hui',
    'hero.viewStories': 'Voir les Histoires de Succès',
    'hero.avgGrowth': 'Croissance Moyenne',
    'hero.revenue': 'Revenus Générés',
    'hero.creators': 'Créateurs Heureux',
    
    // Services
    'services.badge': 'Suite de Solution Complète',
    'services.title': 'Suite Complète de',
    'services.titleHighlight': 'Gestion de Créateurs',
    'services.subtitle': 'Services professionnels conçus pour maximiser votre succès et rationaliser votre entreprise.',
    
    'services.content.title': 'Maîtrise du Contenu',
    'services.content.desc': 'Stratégie et production de contenu professionnel qui transforme votre vision créative en sensations virales.',
    
    'services.chat.title': 'Construction d\'Empire de Fans',
    'services.chat.desc': 'Stratégies d\'engagement expertes qui convertissent les spectateurs occasionnels en superfans dévoués de haute valeur.',
    
    'services.revenue.title': 'Ingénierie des Revenus',
    'services.revenue.desc': 'Algorithmes d\'optimisation avancés qui maximisent systématiquement votre potentiel de gains sur toutes les plateformes.',
    
    'services.account.title': 'Domination de Plateforme',
    'services.account.desc': 'Gestion complète multi-plateforme avec automatisation de précision et systèmes de surveillance 24/7.',
    
    'services.marketing.title': 'Marketing Viral',
    'services.marketing.desc': 'Campagnes de croissance stratégiques qui établissent la présence de votre marque et stimulent l\'expansion exponentielle de l\'audience.',
    
    'services.legal.title': 'Protection Elite',
    'services.legal.desc': 'Services complets de protection juridique et de confidentialité pour sauvegarder votre entreprise et votre sécurité personnelle.',
    
    // Pricing
    'pricing.badge': 'Plans de Tarification Premium',
    'pricing.title': 'Choisissez Votre',
    'pricing.titleHighlight': 'Niveau de Succès',
    'pricing.subtitle': 'Chaque plan conçu pour transformer les créateurs en leaders de l\'industrie avec des résultats garantis.',
    'pricing.monthly': 'Mensuel',
    'pricing.yearly': 'Annuel',
    'pricing.save': 'Économisez 17%',
    'pricing.mostPopular': 'Le Plus Populaire',
    'pricing.eliteTier': 'Niveau Elite',
    'pricing.getStarted': 'Commencer',
    'pricing.choosePlan': 'Choisir le Plan',
    'pricing.getElite': 'Obtenir Elite',
    
    // Pricing Plans
    'pricing.onetime': 'Configuration Unique',
    'pricing.monthly': 'Gestion Mensuelle',
    'pricing.starter.name': 'Configuration de Démarrage',
    'pricing.starter.desc': 'Parfait pour les nouveaux créateurs prêts à se lancer professionnellement',
    'pricing.professional.name': 'Lancement Professionnel',
    'pricing.professional.desc': 'Configuration complète pour les créateurs sérieux',
    'pricing.elite.name': 'Constructeur d\'Empire Elite',
    'pricing.elite.desc': 'Le package ultime de transformation de créateurs',
    'pricing.growth.name': 'Partenaire de Croissance',
    'pricing.growth.desc': 'Support continu pour une croissance cohérente',
    'pricing.success.name': 'Accélérateur de Succès',
    'pricing.success.desc': 'Gestion de service complet pour les créateurs sérieux',
    'pricing.domination.name': 'Domination Elite',
    'pricing.domination.desc': 'Gestion premium pour les créateurs de premier plan',
    
    // Contact
    'contact.badge': 'Commencer Aujourd\'hui',
    'contact.title': 'Prêt à Transformer',
    'contact.titleHighlight': 'Votre Succès?',
    'contact.subtitle': 'Complétez notre formulaire de candidature et discutons de la façon dont nous pouvons vous aider à atteindre vos objectifs.',
    'contact.formTitle': 'Formulaire de Candidature',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.phone': 'Numéro de Téléphone',
    'contact.experience': 'Niveau d\'Expérience',
    'contact.platforms': 'Plateformes d\'Intérêt',
    'contact.message': 'Parlez-nous de vous et de vos objectifs',
    'contact.submit': 'Soumettre la Candidature',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Erreur survenue',
    'common.success': 'Succès!',
    
    // Benefits
    'benefits.revenue.title': 'Augmentation Moyenne des Revenus de 300%',
    'benefits.revenue.desc': 'Nos créateurs voient une croissance dramatique des revenus dans les 3 premiers mois',
    'benefits.time.title': 'Économisez 40+ Heures par Semaine',
    'benefits.time.desc': 'Concentrez-vous sur le contenu pendant que nous gérons le chat, le marketing et les tâches administratives',
    'benefits.privacy.title': 'Protection Complète de la Confidentialité',
    'benefits.privacy.desc': 'Mesures de sécurité avancées et support juridique pour votre sécurité',
    'benefits.manager.title': 'Gestionnaire de Compte Dédié',
    'benefits.manager.desc': 'Support personnel d\'experts de l\'industrie qui comprennent vos objectifs',
    'benefits.platform.title': 'Optimisation Multi-Plateforme',
    'benefits.platform.desc': 'Maximisez les gains sur OnlyFans, Fansly, Fansone et plus',
    
    // Testimonials
    'testimonials.title': 'Histoires de Succès de Nos Créateurs',
    'testimonials.subtitle': 'Résultats réels de vrais créateurs qui ont choisi de s\'associer avec FanFirst Studio.',
    'testimonials.role1': 'Créateur de Contenu',
    'testimonials.role2': 'Modèle et Influenceur',
    'testimonials.role3': 'Créateur de Contenu',
    'testimonials.content1': 'FanFirst Studio a complètement transformé mon entreprise. En seulement 3 mois, mes revenus ont augmenté de 400%. Leur équipe gère tout si professionnellement.',
    'testimonials.content2': 'Le soutien et les conseils que j\'ai reçus étaient incroyables. Ils m\'ont aidé à construire une entreprise durable tout en maintenant ma vie privée et ma sécurité.',
    'testimonials.content3': 'Je luttais pour tout gérer seule. Maintenant je peux me concentrer sur la création pendant qu\'ils gèrent le côté commercial. Meilleure décision que j\'aie jamais prise!',
    
    // Footer
    'footer.newsletter.title': 'Restez Informé avec les Perspectives de Modèles',
    'footer.newsletter.desc': 'Obtenez des conseils exclusifs, des modèles de chat anglais/chinois, une stratégie de contenu, des perspectives de l\'industrie et des stratégies de succès livrées dans votre boîte de réception.',
    'footer.newsletter.placeholder': 'Entrez votre adresse e-mail',
    'footer.newsletter.subscribe': 'S\'abonner',
    'footer.company.desc': 'L\'agence de créateurs de contenu de premier plan spécialisée dans la gestion de plateformes premium, l\'optimisation des revenus et le succès des créateurs. Transformer les créateurs en leaders de l\'industrie.',
    'footer.copyright': '© 2025 FanFirst Studio. Tous droits réservés.',
    'footer.tagline': 'Gestion et optimisation professionnelles de créateurs de contenu',
  },
  de: {
    // Header
    'header.services': 'Dienstleistungen',
    'header.success': 'Erfolgsgeschichten',
    'header.pricing': 'Preise',
    'header.apply': 'Bewerben',
    'header.joinElite': 'Elite Beitreten',
    
    // Hero
    'hero.badge': 'Elite Creator Management',
    'hero.title': 'Professionelle Creator',
    'hero.titleHighlight': 'Management Agentur',
    'hero.subtitle': 'Die führende Agentur für Content Creator Erfolg. Wir bieten komplette Management-Lösungen zur Maximierung Ihres Potentials.',
    'hero.getStarted': 'Heute Starten',
    'hero.viewStories': 'Erfolgsgeschichten Ansehen',
    'hero.avgGrowth': 'Durchschnittliches Wachstum',
    'hero.revenue': 'Generierte Einnahmen',
    'hero.creators': 'Glückliche Creators',
    
    // Services
    'services.badge': 'Komplette Lösungssuite',
    'services.title': 'Komplette Creator',
    'services.titleHighlight': 'Management Suite',
    'services.subtitle': 'Professionelle Dienstleistungen zur Maximierung Ihres Erfolgs und Optimierung Ihres Geschäfts.',
    
    'services.content.title': 'Content Meisterschaft',
    'services.content.desc': 'Professionelle Content-Strategie und -Produktion, die Ihre kreative Vision in virale Sensationen verwandelt.',
    
    'services.chat.title': 'Fan-Imperium Aufbau',
    'services.chat.desc': 'Experten-Engagement-Strategien, die gelegentliche Zuschauer in hingebungsvolle, hochwertige Superfans verwandeln.',
    
    'services.revenue.title': 'Einnahmen Engineering',
    'services.revenue.desc': 'Fortgeschrittene Optimierungsalgorithmen, die systematisch Ihr Verdienstpotential auf allen Plattformen maximieren.',
    
    'services.account.title': 'Plattform Dominanz',
    'services.account.desc': 'Komplettes Multi-Plattform-Management mit Präzisionsautomatisierung und 24/7-Überwachungssystemen.',
    
    'services.marketing.title': 'Virales Marketing',
    'services.marketing.desc': 'Strategische Wachstumskampagnen, die Ihre Markenpräsenz etablieren und exponentielles Publikumswachstum vorantreiben.',
    
    'services.legal.title': 'Elite Schutz',
    'services.legal.desc': 'Umfassende rechtliche und Datenschutz-Dienstleistungen zum Schutz Ihres Geschäfts und Ihrer persönlichen Sicherheit.',
    
    // Pricing
    'pricing.badge': 'Premium Preispläne',
    'pricing.title': 'Wählen Sie Ihr',
    'pricing.titleHighlight': 'Erfolgsniveau',
    'pricing.subtitle': 'Jeder Plan entwickelt, um Creators in Branchenführer mit garantierten Ergebnissen zu verwandeln.',
    'pricing.monthly': 'Monatlich',
    'pricing.yearly': 'Jährlich',
    'pricing.save': '17% Sparen',
    'pricing.mostPopular': 'Am Beliebtesten',
    'pricing.eliteTier': 'Elite Stufe',
    'pricing.getStarted': 'Starten',
    'pricing.choosePlan': 'Plan Wählen',
    'pricing.getElite': 'Elite Erhalten',
    
    // Pricing Plans
    'pricing.onetime': 'Einmalige Einrichtung',
    'pricing.monthly': 'Monatliche Verwaltung',
    'pricing.starter.name': 'Starter-Einrichtung',
    'pricing.starter.desc': 'Perfekt für neue Creators, die professionell starten möchten',
    'pricing.professional.name': 'Professioneller Start',
    'pricing.professional.desc': 'Umfassende Einrichtung für ernsthafte Creators',
    'pricing.elite.name': 'Elite Empire Builder',
    'pricing.elite.desc': 'Das ultimative Creator-Transformationspaket',
    'pricing.growth.name': 'Wachstumspartner',
    'pricing.growth.desc': 'Kontinuierliche Unterstützung für beständiges Wachstum',
    'pricing.success.name': 'Erfolgsbeschleuniger',
    'pricing.success.desc': 'Full-Service-Management für ernsthafte Creators',
    'pricing.domination.name': 'Elite-Dominanz',
    'pricing.domination.desc': 'Premium-Management für Top-Tier-Creators',
    
    // Contact
    'contact.badge': 'Heute Starten',
    'contact.title': 'Bereit Ihren',
    'contact.titleHighlight': 'Erfolg zu Transformieren?',
    'contact.subtitle': 'Füllen Sie unser Bewerbungsformular aus und lassen Sie uns besprechen, wie wir Ihnen helfen können, Ihre Ziele zu erreichen.',
    'contact.formTitle': 'Bewerbungsformular',
    'contact.name': 'Vollständiger Name',
    'contact.email': 'E-Mail-Adresse',
    'contact.phone': 'Telefonnummer',
    'contact.experience': 'Erfahrungsniveau',
    'contact.platforms': 'Interessante Plattformen',
    'contact.message': 'Erzählen Sie uns von sich und Ihren Zielen',
    'contact.submit': 'Bewerbung Einreichen',
    
    // Common
    'common.loading': 'Laden...',
    'common.error': 'Fehler aufgetreten',
    'common.success': 'Erfolg!',
    
    // Benefits
    'benefits.revenue.title': '300% Durchschnittliche Umsatzsteigerung',
    'benefits.revenue.desc': 'Unsere Creators sehen dramatisches Einkommenswachstum in den ersten 3 Monaten',
    'benefits.time.title': 'Sparen Sie 40+ Stunden pro Woche',
    'benefits.time.desc': 'Konzentrieren Sie sich auf Inhalte, während wir Chat, Marketing und Verwaltungsaufgaben übernehmen',
    'benefits.privacy.title': 'Vollständiger Datenschutz',
    'benefits.privacy.desc': 'Erweiterte Sicherheitsmaßnahmen und rechtliche Unterstützung für Ihre Sicherheit',
    'benefits.manager.title': 'Dedizierter Account Manager',
    'benefits.manager.desc': 'Persönliche Unterstützung von Branchenexperten, die Ihre Ziele verstehen',
    'benefits.platform.title': 'Multi-Plattform-Optimierung',
    'benefits.platform.desc': 'Maximieren Sie Einnahmen auf OnlyFans, Fansly, Fansone und mehr',
    
    // Testimonials
    'testimonials.title': 'Erfolgsgeschichten Unserer Creators',
    'testimonials.subtitle': 'Echte Ergebnisse von echten Creators, die sich für eine Partnerschaft mit FanFirst Studio entschieden haben.',
    'testimonials.role1': 'Content Creator',
    'testimonials.role2': 'Model und Influencer',
    'testimonials.role3': 'Content Creator',
    'testimonials.content1': 'FanFirst Studio hat mein Geschäft komplett transformiert. In nur 3 Monaten stiegen meine Einnahmen um 400%. Ihr Team handhabt alles so professionell.',
    'testimonials.content2': 'Die Unterstützung und Anleitung, die ich erhielt, war unglaublich. Sie halfen mir, ein nachhaltiges Geschäft aufzubauen und dabei meine Privatsphäre und Sicherheit zu wahren.',
    'testimonials.content3': 'Ich hatte Schwierigkeiten, alles alleine zu verwalten. Jetzt kann ich mich auf das Erstellen konzentrieren, während sie die Geschäftsseite übernehmen. Beste Entscheidung, die ich je getroffen habe!',
    
    // Footer
    'footer.newsletter.title': 'Bleiben Sie auf dem Laufenden mit Model-Einblicken',
    'footer.newsletter.desc': 'Erhalten Sie exklusive Tipps, englische/chinesische Chat-Vorlagen, Content-Strategie, Brancheneinblicke und Erfolgsstrategien in Ihrem Posteingang.',
    'footer.newsletter.placeholder': 'Geben Sie Ihre E-Mail-Adresse ein',
    'footer.newsletter.subscribe': 'Abonnieren',
    'footer.company.desc': 'Die führende Content-Creator-Agentur, spezialisiert auf Premium-Plattform-Management, Umsatzoptimierung und Creator-Erfolg. Verwandlung von Creators in Branchenführer.',
    'footer.copyright': '© 2025 FanFirst Studio. Alle Rechte vorbehalten.',
    'footer.tagline': 'Professionelles Content-Creator-Management und -Optimierung',
  },
  pt: {
    // Header
    'header.services': 'Serviços',
    'header.success': 'Histórias de Sucesso',
    'header.pricing': 'Preços',
    'header.apply': 'Candidatar',
    'header.joinElite': 'Juntar-se à Elite',
    
    // Hero
    'hero.badge': 'Gestão Elite de Criadores',
    'hero.title': 'Agência Profissional de',
    'hero.titleHighlight': 'Gestão de Criadores',
    'hero.subtitle': 'A agência premier para o sucesso de criadores de conteúdo. Fornecemos soluções completas de gestão para maximizar seu potencial.',
    'hero.getStarted': 'Começar Hoje',
    'hero.viewStories': 'Ver Histórias de Sucesso',
    'hero.avgGrowth': 'Crescimento Médio',
    'hero.revenue': 'Receita Gerada',
    'hero.creators': 'Criadores Felizes',
    
    // Services
    'services.badge': 'Suíte de Solução Completa',
    'services.title': 'Suíte Completa de',
    'services.titleHighlight': 'Gestão de Criadores',
    'services.subtitle': 'Serviços profissionais projetados para maximizar seu sucesso e otimizar seu negócio.',
    
    'services.content.title': 'Maestria de Conteúdo',
    'services.content.desc': 'Estratégia e produção de conteúdo profissional que transforma sua visão criativa em sensações virais.',
    
    'services.chat.title': 'Construção de Império de Fãs',
    'services.chat.desc': 'Estratégias especializadas de engajamento que convertem espectadores casuais em superfãs devotos de alto valor.',
    
    'services.revenue.title': 'Engenharia de Receita',
    'services.revenue.desc': 'Algoritmos avançados de otimização que maximizam sistematicamente seu potencial de ganhos em todas as plataformas.',
    
    'services.account.title': 'Dominação de Plataforma',
    'services.account.desc': 'Gestão completa multi-plataforma com automação de precisão e sistemas de monitoramento 24/7.',
    
    'services.marketing.title': 'Marketing Viral',
    'services.marketing.desc': 'Campanhas estratégicas de crescimento que estabelecem a presença da sua marca e impulsionam a expansão exponencial da audiência.',
    
    'services.legal.title': 'Proteção Elite',
    'services.legal.desc': 'Serviços abrangentes de proteção legal e privacidade para salvaguardar seu negócio e segurança pessoal.',
    
    // Pricing
    'pricing.badge': 'Planos de Preços Premium',
    'pricing.title': 'Escolha Seu',
    'pricing.titleHighlight': 'Nível de Sucesso',
    'pricing.subtitle': 'Cada plano projetado para transformar criadores em líderes da indústria com resultados garantidos.',
    'pricing.monthly': 'Mensal',
    'pricing.yearly': 'Anual',
    'pricing.save': 'Economize 17%',
    'pricing.mostPopular': 'Mais Popular',
    'pricing.eliteTier': 'Nível Elite',
    'pricing.getStarted': 'Começar',
    'pricing.choosePlan': 'Escolher Plano',
    'pricing.getElite': 'Obter Elite',
    
    // Pricing Plans
    'pricing.onetime': 'Configuração Única',
    'pricing.monthly': 'Gestão Mensal',
    'pricing.starter.name': 'Configuração Inicial',
    'pricing.starter.desc': 'Perfeito para novos criadores prontos para lançar profissionalmente',
    'pricing.professional.name': 'Lançamento Profissional',
    'pricing.professional.desc': 'Configuração abrangente para criadores sérios',
    'pricing.elite.name': 'Construtor de Império Elite',
    'pricing.elite.desc': 'O pacote definitivo de transformação de criadores',
    'pricing.growth.name': 'Parceiro de Crescimento',
    'pricing.growth.desc': 'Suporte contínuo para crescimento consistente',
    'pricing.success.name': 'Acelerador de Sucesso',
    'pricing.success.desc': 'Gestão de serviço completo para criadores sérios',
    'pricing.domination.name': 'Dominação Elite',
    'pricing.domination.desc': 'Gestão premium para criadores de primeira linha',
    
    // Contact
    'contact.badge': 'Começar Hoje',
    'contact.title': 'Pronto para Transformar',
    'contact.titleHighlight': 'Seu Sucesso?',
    'contact.subtitle': 'Complete nosso formulário de candidatura e vamos discutir como podemos ajudá-lo a alcançar seus objetivos.',
    'contact.formTitle': 'Formulário de Candidatura',
    'contact.name': 'Nome Completo',
    'contact.email': 'Endereço de Email',
    'contact.phone': 'Número de Telefone',
    'contact.experience': 'Nível de Experiência',
    'contact.platforms': 'Plataformas de Interesse',
    'contact.message': 'Conte-nos sobre você e seus objetivos',
    'contact.submit': 'Enviar Candidatura',
    
    // Common
    'common.loading': 'Carregando...',
    'common.error': 'Erro ocorreu',
    'common.success': 'Sucesso!',
    
    // Benefits
    'benefits.revenue.title': 'Aumento Médio de Receita de 300%',
    'benefits.revenue.desc': 'Nossos criadores veem crescimento dramático de renda nos primeiros 3 meses',
    'benefits.time.title': 'Economize 40+ Horas por Semana',
    'benefits.time.desc': 'Foque no conteúdo enquanto cuidamos do chat, marketing e tarefas administrativas',
    'benefits.privacy.title': 'Proteção Completa de Privacidade',
    'benefits.privacy.desc': 'Medidas de segurança avançadas e suporte legal para sua segurança',
    'benefits.manager.title': 'Gerente de Conta Dedicado',
    'benefits.manager.desc': 'Suporte pessoal de especialistas da indústria que entendem seus objetivos',
    'benefits.platform.title': 'Otimização Multi-Plataforma',
    'benefits.platform.desc': 'Maximize ganhos no OnlyFans, Fansly, Fansone e mais',
    
    // Testimonials
    'testimonials.title': 'Histórias de Sucesso dos Nossos Criadores',
    'testimonials.subtitle': 'Resultados reais de criadores reais que escolheram fazer parceria com o FanFirst Studio.',
    'testimonials.role1': 'Criador de Conteúdo',
    'testimonials.role2': 'Modelo e Influenciador',
    'testimonials.role3': 'Criador de Conteúdo',
    'testimonials.content1': 'O FanFirst Studio transformou completamente meu negócio. Em apenas 3 meses, meus ganhos aumentaram 400%. Sua equipe lida com tudo tão profissionalmente.',
    'testimonials.content2': 'O suporte e orientação que recebi foram incríveis. Eles me ajudaram a construir um negócio sustentável mantendo minha privacidade e segurança.',
    'testimonials.content3': 'Eu estava lutando para gerenciar tudo sozinha. Agora posso focar na criação enquanto eles cuidam do lado comercial. Melhor decisão que já tomei!',
    
    // Footer
    'footer.newsletter.title': 'Mantenha-se Atualizado com Insights de Modelos',
    'footer.newsletter.desc': 'Receba dicas exclusivas, modelos de chat em inglês/chinês, estratégia de conteúdo, insights da indústria e estratégias de sucesso entregues na sua caixa de entrada.',
    'footer.newsletter.placeholder': 'Digite seu endereço de e-mail',
    'footer.newsletter.subscribe': 'Inscrever-se',
    'footer.company.desc': 'A agência premier de criadores de conteúdo especializada em gestão de plataformas premium, otimização de receita e sucesso de criadores. Transformando criadores em líderes da indústria.',
    'footer.copyright': '© 2025 FanFirst Studio. Todos os direitos reservados.',
    'footer.tagline': 'Gestão e otimização profissional de criadores de conteúdo',
  },
  ja: {
    // Header
    'header.services': 'サービス',
    'header.success': 'サクセスストーリー',
    'header.pricing': '料金',
    'header.apply': '応募',
    'header.joinElite': 'エリートに参加',
    
    // Hero
    'hero.badge': 'エリートクリエイター管理',
    'hero.title': 'プロフェッショナル',
    'hero.titleHighlight': 'クリエイター管理エージェンシー',
    'hero.subtitle': 'コンテンツクリエイターの成功のためのプレミアエージェンシー。あなたの可能性を最大化するための完全な管理ソリューションを提供します。',
    'hero.getStarted': '今日から始める',
    'hero.viewStories': 'サクセスストーリーを見る',
    'hero.avgGrowth': '平均成長率',
    'hero.revenue': '生成された収益',
    'hero.creators': '満足したクリエイター',
    
    // Services
    'services.badge': '完全ソリューションスイート',
    'services.title': '完全なクリエイター',
    'services.titleHighlight': '管理スイート',
    'services.subtitle': 'あなたの成功を最大化し、ビジネスを合理化するために設計されたプロフェッショナルサービス。',
    
    'services.content.title': 'コンテンツマスタリー',
    'services.content.desc': 'あなたの創造的なビジョンをバイラルセンセーションに変換するプロフェッショナルなコンテンツ戦略と制作。',
    
    'services.chat.title': 'ファン帝国構築',
    'services.chat.desc': 'カジュアルな視聴者を献身的で高価値なスーパーファンに変換する専門的なエンゲージメント戦略。',
    
    'services.revenue.title': '収益エンジニアリング',
    'services.revenue.desc': 'すべてのプラットフォームであなたの収益ポテンシャルを体系的に最大化する高度な最適化アルゴリズム。',
    
    'services.account.title': 'プラットフォーム支配',
    'services.account.desc': '精密自動化と24/7監視システムによる完全なマルチプラットフォーム管理。',
    
    'services.marketing.title': 'バイラルマーケティング',
    'services.marketing.desc': 'あなたのブランドプレゼンスを確立し、指数関数的なオーディエンス拡大を推進する戦略的成長キャンペーン。',
    
    'services.legal.title': 'エリート保護',
    'services.legal.desc': 'あなたのビジネスと個人のセキュリティを保護するための包括的な法的およびプライバシー保護サービス。',
    
    // Pricing
    'pricing.badge': 'プレミアム料金プラン',
    'pricing.title': 'あなたの',
    'pricing.titleHighlight': '成功レベルを選択',
    'pricing.subtitle': 'クリエイターを保証された結果で業界リーダーに変換するように設計された各プラン。',
    'pricing.monthly': '月額',
    'pricing.yearly': '年額',
    'pricing.save': '17%節約',
    'pricing.mostPopular': '最も人気',
    'pricing.eliteTier': 'エリートティア',
    'pricing.getStarted': '開始',
    'pricing.choosePlan': 'プランを選択',
    'pricing.getElite': 'エリートを取得',
    
    // Pricing Plans
    'pricing.onetime': '一回限りの設定',
    'pricing.monthly': '月次管理',
    'pricing.starter.name': 'スターター設定',
    'pricing.starter.desc': 'プロフェッショナルに始める準備ができた新しいクリエイターに最適',
    'pricing.professional.name': 'プロフェッショナル・ローンチ',
    'pricing.professional.desc': '真剣なクリエイターのための包括的な設定',
    'pricing.elite.name': 'エリート帝国ビルダー',
    'pricing.elite.desc': '究極のクリエイター変革パッケージ',
    'pricing.growth.name': '成長パートナー',
    'pricing.growth.desc': '一貫した成長のための継続的なサポート',
    'pricing.success.name': '成功アクセラレーター',
    'pricing.success.desc': '真剣なクリエイターのためのフルサービス管理',
    'pricing.domination.name': 'エリート支配',
    'pricing.domination.desc': 'トップティアクリエイターのためのプレミアム管理',
    
    // Contact
    'contact.badge': '今日から始める',
    'contact.title': 'あなたの成功を',
    'contact.titleHighlight': '変革する準備はできていますか？',
    'contact.subtitle': '私たちの応募フォームに記入して、あなたの目標達成をどのようにサポートできるかを話し合いましょう。',
    'contact.formTitle': '応募フォーム',
    'contact.name': 'フルネーム',
    'contact.email': 'メールアドレス',
    'contact.phone': '電話番号',
    'contact.experience': '経験レベル',
    'contact.platforms': '興味のあるプラットフォーム',
    'contact.message': 'あなた自身とあなたの目標について教えてください',
    'contact.submit': '応募を送信',
    
    // Common
    'common.loading': '読み込み中...',
    'common.error': 'エラーが発生しました',
    'common.success': '成功！',
    
    // Benefits
    'benefits.revenue.title': '平均300%の収益増加',
    'benefits.revenue.desc': '私たちのクリエイターは最初の3ヶ月で劇的な収入成長を見ています',
    'benefits.time.title': '週40時間以上の節約',
    'benefits.time.desc': 'チャット、マーケティング、管理業務を私たちが処理している間、コンテンツに集中してください',
    'benefits.privacy.title': '完全なプライバシー保護',
    'benefits.privacy.desc': 'あなたの安全のための高度なセキュリティ対策と法的サポート',
    'benefits.manager.title': '専任アカウントマネージャー',
    'benefits.manager.desc': 'あなたの目標を理解する業界専門家からの個人的なサポート',
    'benefits.platform.title': 'マルチプラットフォーム最適化',
    'benefits.platform.desc': 'OnlyFans、Fansly、Fansoneなどで収益を最大化',
    
    // Testimonials
    'testimonials.title': '私たちのクリエイターのサクセスストーリー',
    'testimonials.subtitle': 'FanFirst Studioとのパートナーシップを選択した実際のクリエイターからの実際の結果。',
    'testimonials.role1': 'コンテンツクリエイター',
    'testimonials.role2': 'モデル＆インフルエンサー',
    'testimonials.role3': 'コンテンツクリエイター',
    'testimonials.content1': 'FanFirst Studioは私のビジネスを完全に変革しました。わずか3ヶ月で収益が400%増加しました。彼らのチームはすべてを非常にプロフェッショナルに処理します。',
    'testimonials.content2': '受けたサポートとガイダンスは素晴らしかったです。プライバシーと安全を維持しながら持続可能なビジネスを構築するのを助けてくれました。',
    'testimonials.content3': '一人ですべてを管理するのに苦労していました。今はビジネス面を彼らが処理している間、創作に集中できます。今まで下した最高の決断です！',
    
    // Footer
    'footer.newsletter.title': 'モデルインサイトで最新情報を入手',
    'footer.newsletter.desc': '独占的なヒント、英語/中国語チャットテンプレート、コンテンツ戦略、業界インサイト、成功戦略をあなたの受信箱にお届けします。',
    'footer.newsletter.placeholder': 'メールアドレスを入力してください',
    'footer.newsletter.subscribe': '購読する',
    'footer.company.desc': 'プレミアムプラットフォーム管理、収益最適化、クリエイター成功を専門とするプレミアコンテンツクリエイターエージェンシー。クリエイターを業界リーダーに変革します。',
    'footer.copyright': '© 2025 FanFirst Studio. 全著作権所有。',
    'footer.tagline': 'プロフェッショナルコンテンツクリエイター管理・最適化',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('fanfirst-language');
    if (saved && Object.keys(translations).includes(saved)) {
      return saved as Language;
    }
    
    // Auto-detect based on browser language
    const browserLang = navigator.language.split('-')[0];
    return Object.keys(translations).includes(browserLang) ? browserLang as Language : 'en';
  });

  useEffect(() => {
    localStorage.setItem('fanfirst-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
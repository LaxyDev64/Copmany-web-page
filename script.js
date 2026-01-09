document.addEventListener('DOMContentLoaded', () => {
  // ============================================
  // Diccionario de traducciones
  // ============================================
  const translations = {
    es: {
      nav_about: 'Nosotros',
      nav_services: 'Servicios',
      nav_cases: 'Casos',
      nav_contact: 'Contacto',
      hero_title: 'Impulsamos tu presencia digital',
      hero_desc: 'Diseñamos y desarrollamos soluciones web a medida que ayudan a las empresas a crecer y conectar con sus clientes.',
      btn_services: 'Nuestros servicios',
      btn_quote: 'Solicitar presupuesto',
      btn_hello: 'Ejecutar saludo',
      about_title: 'Sobre Nosotros',
      about_desc: 'Somos un equipo de diseñadores y desarrolladores con experiencia en crear productos digitales centrados en resultados. Trabajamos con empresas de todos los tamaños para definir, diseñar y entregar experiencias digitales sólidas.',
      services_title: 'Servicios',
      service_web_title: 'Desarrollo Web',
      service_web_desc: 'Aplicaciones y sitios web responsivos, optimizados para rendimiento y SEO.',
      service_ui_title: 'Diseño UX/UI',
      service_ui_desc: 'Diseños centrados en el usuario que aumentan la conversión y la retención.',
      service_strategy_title: 'Estrategia Digital',
      service_strategy_desc: 'Planes adaptados a tus objetivos: posicionamiento, captación de clientes y crecimiento.',
      work_title: 'Casos de éxito',
      work_project_title: 'Proyecto destacado: Plataforma e-commerce',
      work_project_desc: 'Desarrollamos una tienda online con mejoras en la velocidad y la conversión, aumentando ventas en un 45%.',
      btn_case_study: 'Ver case study',
      work_portal_title: 'Portal Corporativo',
      work_portal_desc: 'Rediseño completo y migración de contenido con enfoque accesible.',
      work_app_title: 'App de reservas',
      work_app_desc: 'Solución móvil para gestionar reservas y pagos en línea.',
      work_system_title: 'Sistema interno',
      work_system_desc: 'Herramienta de administración y reporting para procesos internos.',
      contact_title: 'Contacto',
      contact_desc: '¿Listo para empezar? Cuéntanos sobre tu proyecto y te responderemos en 24 horas hábiles.',
      input_name: 'Nombre',
      input_email: 'Correo',
      input_message: 'Mensaje',
      btn_send: 'Enviar mensaje',
      follow_text: 'Síguenos en',
      footer_copyright: '© 2026 Nombre de la Empresa',
      footer_info: 'Av. Ejemplo 123, Ciudad • +34 600 000 000 • contacto@empresa.com'
    },
    en: {
      nav_about: 'About',
      nav_services: 'Services',
      nav_cases: 'Cases',
      nav_contact: 'Contact',
      hero_title: 'Boost your digital presence',
      hero_desc: 'We design and develop custom web solutions that help companies grow and connect with their customers.',
      btn_services: 'Our services',
      btn_quote: 'Request a quote',
      btn_hello: 'Run greeting',
      about_title: 'About Us',
      about_desc: 'We are a team of designers and developers experienced in creating digital products focused on results. We work with companies of all sizes to define, design, and deliver solid digital experiences.',
      services_title: 'Services',
      service_web_title: 'Web Development',
      service_web_desc: 'Responsive applications and websites, optimized for performance and SEO.',
      service_ui_title: 'UX/UI Design',
      service_ui_desc: 'User-centered designs that increase conversion and retention.',
      service_strategy_title: 'Digital Strategy',
      service_strategy_desc: 'Plans tailored to your goals: positioning, customer acquisition and growth.',
      work_title: 'Success cases',
      work_project_title: 'Featured project: E-commerce platform',
      work_project_desc: 'We developed an online store with improvements in speed and conversion, increasing sales by 45%.',
      btn_case_study: 'View case study',
      work_portal_title: 'Corporate Portal',
      work_portal_desc: 'Complete redesign and content migration with accessibility focus.',
      work_app_title: 'Booking app',
      work_app_desc: 'Mobile solution to manage reservations and online payments.',
      work_system_title: 'Internal system',
      work_system_desc: 'Administration tool and reporting for internal processes.',
      contact_title: 'Contact',
      contact_desc: 'Ready to start? Tell us about your project and we\'ll get back to you within 24 business hours.',
      input_name: 'Name',
      input_email: 'Email',
      input_message: 'Message',
      btn_send: 'Send message',
      follow_text: 'Follow us on',
      footer_copyright: '© 2026 Company Name',
      footer_info: 'Example Ave 123, City • +34 600 000 000 • contact@company.com'
    },
    ja: {
      nav_about: '概要',
      nav_services: 'サービス',
      nav_cases: 'ケーススタディ',
      nav_contact: 'お問い合わせ',
      hero_title: 'デジタルプレゼンスを強化',
      hero_desc: '企業の成長と顧客とのつながりを支援するカスタムウェブソリューションを設計・開発します。',
      btn_services: 'サービスを見る',
      btn_quote: 'お見積もりをリクエスト',
      btn_hello: 'あいさつを実行',
      about_title: '私たちについて',
      about_desc: '結果を重視したデジタル製品の開発に経験のあるデザイナーと開発者のチームです。あらゆる規模の企業と協力して、優れたデジタル体験を定義、設計、提供します。',
      services_title: 'サービス',
      service_web_title: 'ウェブ開発',
      service_web_desc: 'パフォーマンスとSEOに最適化されたレスポンシブアプリケーションとウェブサイト。',
      service_ui_title: 'UX/UIデザイン',
      service_ui_desc: 'コンバージョンと顧客保持を向上させるユーザー中心のデザイン。',
      service_strategy_title: 'デジタル戦略',
      service_strategy_desc: 'あなたの目標に合わせたプラン：ポジショニング、顧客獲得、成長。',
      work_title: '成功事例',
      work_project_title: '注目プロジェクト：Eコマースプラットフォーム',
      work_project_desc: 'スピードとコンバージョンを改善したオンラインストアを開発し、売上が45%増加しました。',
      btn_case_study: 'ケーススタディを見る',
      work_portal_title: 'コーポレートポータル',
      work_portal_desc: 'アクセシビリティに配慮した完全なリデザインとコンテンツ移行。',
      work_app_title: '予約アプリ',
      work_app_desc: '予約とオンライン支払いを管理するモバイルソリューション。',
      work_system_title: '内部システム',
      work_system_desc: '内部プロセスの管理ツールとレポーティング。',
      contact_title: 'お問い合わせ',
      contact_desc: 'ご質問やご要望がある場合は、24営業時間以内にご対応させていただきます。',
      input_name: '名前',
      input_email: 'メールアドレス',
      input_message: 'メッセージ',
      btn_send: 'メッセージを送信',
      follow_text: 'フォローする',
      footer_copyright: '© 2026 企業名',
      footer_info: '例：住所 123、市区町村 • +34 600 000 000 • contact@company.com'
    },
    ru: {
      nav_about: 'О сайте',
      nav_services: 'Услуги',
      nav_cases: 'Кейсы',
      nav_contact: 'Контакты',
      hero_title: 'Усиление цифрового присутствия',
      hero_desc: 'Мы проектируем и разрабатываем кастомные веб-решения, которые помогают компаниям расти и взаимодействовать с клиентами.',
      btn_services: 'Наши услуги',
      btn_quote: 'Запросить котировку',
      btn_hello: 'Запустить приветствие',
      about_title: 'О нас',
      about_desc: 'Мы — команда дизайнеров и разработчиков, имеющих опыт создания цифровых продуктов, ориентированных на результат. Мы сотрудничаем с компаниями любого масштаба, чтобы определить, спроектировать и предоставить качественные цифровые решения.',
      services_title: 'Услуги',
      service_web_title: 'Веб-разработка',
      service_web_desc: 'Адаптивные приложения и веб-сайты, оптимизированные для производительности и SEO.',
      service_ui_title: 'UX/UI дизайн',
      service_ui_desc: 'Пользовательские дизайны, которые увеличивают конверсию и удерживают клиентов.',
      service_strategy_title: 'Цифровая стратегия',
      service_strategy_desc: 'Планы, адаптированные под ваши цели: позиционирование, привлечение клиентов и рост.',
      work_title: 'Успешные кейсы',
      work_project_title: 'Избранный проект: E-commerce платформа',
      work_project_desc: 'Мы разработали онлайн-магазин с улучшениями скорости и конверсии, увеличив продажи на 45%.',
      btn_case_study: 'Посмотреть кейс',
      work_portal_title: 'Корпоративный портал',
      work_portal_desc: 'Полностью переработанный портал с акцентом на доступность и миграцией контента.',
      work_app_title: 'Бронирование',
      work_app_desc: 'Мобильное решение для управления бронированиями и онлайн-платежами.',
      work_system_title: 'Внутренняя система',
      work_system_desc: 'Инструмент администрирования и отчетности для внутренних процессов.',
      contact_title: 'Контакты',
      contact_desc: 'Готовы начать? Расскажите нам о вашем проекте, и мы свяжемся с вами в течение 24 рабочих часов.',
      input_name: 'Имя',
      input_email: 'Электронная почта',
      input_message: 'Сообщение',
      btn_send: 'Отправить сообщение',
      follow_text: 'Следите за нами в',
      footer_copyright: '© 2026 Название компании',
      footer_info: 'Example Ave 123, City • +34 600 000 000 • contact@company.com'
    }
  };

  // ============================================
  // Función para cambiar idioma
  // ============================================
  function setLanguage(lang) {
    const dict = translations[lang] || translations.es;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    localStorage.setItem('lang', lang);
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = lang.toUpperCase();
  }

  // Inicializar idioma desde localStorage o idioma del navegador
  (function initLanguage() {
    let savedLang = localStorage.getItem('lang');
    if (!savedLang) {
      const browserLang = navigator.language.split('-')[0];
      savedLang = (browserLang === 'es' || browserLang === 'en') ? browserLang : 'es';
    }
    setLanguage(savedLang);
  })();

  // Botón para cambiar idioma
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = localStorage.getItem('lang') || 'es';
      let newLang;
      if (currentLang === 'es') {
        newLang = 'en';
      } else if (currentLang === 'en') {
        newLang = 'ja';
      } else if (currentLang === 'ja') {
        newLang = 'ru';
      } else {
        newLang = 'es';
      }
      setLanguage(newLang);
    });
  }

  // ============================================
  // Menú móvil
  // ============================================
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('nav-open');
      });
    });
  }

  // ============================================
  // Tema (dark/light)
  // ============================================
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  function updateThemeIcon(isDark) {
    if (!themeIcon) return;
    if (isDark) {
      // Sol (para indicar que al pulsar volverá a modo claro)
      themeIcon.innerHTML = `<circle cx="12" cy="12" r="5" fill="currentColor"/>`;
    } else {
      // Luna
      themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1012 21a9 9 0 009-8.21z" fill="currentColor"/>`;
    }
  }

  function setTheme(isDark) {
    if (isDark) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      if (themeToggle) themeToggle.setAttribute('aria-pressed', 'true');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      if (themeToggle) themeToggle.setAttribute('aria-pressed', 'false');
    }
    updateThemeIcon(isDark);
  }

  // Inicializar tema según preferencia guardada o sistema
  (function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    setTheme(isDark);
  })();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDarkNow = document.body.classList.contains('dark-mode');
      setTheme(!isDarkNow);
    });
  }

  // ============================================
  // Botón Hello Scene
  // ============================================
  const runHelloBtn = document.getElementById('run-hello');
  if (runHelloBtn) {
    runHelloBtn.addEventListener('click', () => {
      if (typeof window.helloMain === 'function') {
        window.helloMain();
      } else if (typeof window.renderHelloScene === 'function') {
        window.renderHelloScene();
      } else {
        console.error('hello.js no está cargado o helloMain no está disponible');
      }
    });
  }
});

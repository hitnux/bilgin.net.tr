export type Locale = 'tr' | 'en'

export const locales: Locale[] = ['tr', 'en']
export const defaultLocale: Locale = 'tr'

const tr = {
  nav: {
    services: 'Hizmetler',
    projects: 'Projeler',
    about: 'Hakkında',
    contact: 'İletişim',
  },
  hero: {
    badge: 'Yazılım · Tasarım · 3D',
    words: [
      'Kendi ürünlerimizi geliştiriyoruz',
      'Yazılım ve tasarım stüdyosu',
      'Fikirleri ürüne dönüştürüyoruz',
    ],
    explore: 'Keşfet',
    contact: 'İletişim',
  },
  marquee: [
    'Ürün Geliştirme',
    'Mobil Uygulama',
    'UI/UX Tasarım',
    '3D Modelleme',
    'E-Ticaret',
    'Next.js',
    'React',
    'TypeScript',
  ],
  services: {
    label: 'Hizmetler',
    title: 'Ne yapıyoruz',
    items: [
      {
        title: 'Ürün Geliştirme',
        description:
          'Kendi ürünlerimizi geliştiriyoruz — web uygulamaları, mobil uygulamalar ve masaüstü araçlar. Fikirden yayına kadar tüm süreci kendimiz yönetiyoruz; dışarıdan yazılım işi almıyoruz.',
        tags: ['Next.js', 'React Native', 'PocketBase', 'TypeScript'],
      },
      {
        title: 'UI/UX Tasarım',
        description:
          'Ürünlerimizin arayüzünü kendimiz tasarlıyoruz; kapasite ve proje takvimine göre dışarıdan tasarım işi de alıyoruz. Araştırmadan prototipe, wireframe\'den final tasarıma kadar eksiksiz teslim.',
        tags: ['Figma', 'Prototip', 'Design System', 'Web & Mobil'],
      },
      {
        title: '3D Modelleme',
        description:
          'Ürün görselleştirme, prototip ve baskıya hazır 3D model çalışmaları. Seçili modelleri Pazarora üzerinden satışa sunuyoruz.',
        tags: ['Modelleme', 'Prototip', 'Render', 'Pazarora'],
      },
    ],
  },
  projects: {
    label: 'Geliştirdiğimiz Ürünler',
    title: 'Projeler',
  },
  model3d: {
    label: '3D Modelleme',
    title1: 'Fikirden modele,',
    title2: 'modelden satışa',
    description1: 'Ürün görselleştirme, prototip ve baskıya hazır 3D model çalışmaları yapıyoruz. Seçtiğimiz modelleri kendi e-ticaret altyapımız',
    description2: 'üzerinden satışa sunuyoruz — ödeme sisteminden teslimata kadar altyapı tamamen bizim.',
    chips: ['Ürün Görselleştirme', 'Baskıya Hazır Model', 'Prototip', "Pazarora'da Satışta"],
    cardTitle: 'Pazarora',
    cardSub: 'Kıyafet kalıpları ve 3D modeller satışta',
  },
  process: {
    label: 'Süreç',
    title: 'Nasıl çalışıyoruz',
    steps: [
      { title: 'Keşif', description: 'İhtiyaçlarınızı dinliyor, hedeflerinizi ve kısıtlarınızı anlıyoruz.' },
      { title: 'Tasarım', description: 'Wireframe ve prototiplerle vizyonu somutlaştırıyor, sizinle birlikte şekillendiriyoruz.' },
      { title: 'Geliştirme', description: 'Modern teknolojilerle temiz, test edilebilir kod yazıyoruz. Süreç boyunca şeffafız.' },
      { title: 'Teslim & Destek', description: 'Zamanında teslim ediyor, yayından sonraki süreçte yanınızda kalıyoruz.' },
    ],
  },
  about: {
    label: 'Hakkında',
    text: 'Kendi ürünlerimizi tasarlıyor, geliştiriyor ve satıyoruz. Basitlik karmaşıklığın en yüksek hâlidir — işimizi bu inançla yapıyoruz.',
    stats: [
      { label: 'Yıl' },
      { label: 'Ürün' },
      { label: 'Model' },
    ],
  },
  contact: {
    label: 'İletişim',
    title: 'Merhaba deyin',
    text: 'Ürünlerimiz, tasarımlarımız veya 3D modellerimiz hakkında konuşalım. Genellikle 24 saat içinde dönüş yapıyoruz.',
    location: 'Burdur, Türkiye',
  },
  footer: {
    privacy: 'Gizlilik',
    kvkk: 'KVKK',
  },
  notFound: {
    label: 'Hata 404',
    title: 'Kayıp yıldız',
    text: 'Aradığın sayfa bu gökyüzünde değil. Belki taşınmıştır, belki hiç parlamamıştır.',
    back: 'Ana sayfaya dön',
  },
  status: {
    live: 'Yayında',
    development: 'Geliştirme',
  },
  projectDetail: {
    back: 'Tüm projeler',
    about: 'Hakkında',
    features: 'Özellikler',
    stack: 'Teknolojiler',
    category: 'Kategori',
    started: 'Başlangıç',
    status: 'Durum',
  },
  langToggle: 'EN',
}

export type Dictionary = typeof tr

const en: Dictionary = {
  nav: {
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    badge: 'Software · Design · 3D',
    words: [
      'We build our own products',
      'Software and design studio',
      'Turning ideas into products',
    ],
    explore: 'Explore',
    contact: 'Contact',
  },
  marquee: [
    'Product Development',
    'Mobile Apps',
    'UI/UX Design',
    '3D Modeling',
    'E-Commerce',
    'Next.js',
    'React',
    'TypeScript',
  ],
  services: {
    label: 'Services',
    title: 'What we do',
    items: [
      {
        title: 'Product Development',
        description:
          'We build our own products — web apps, mobile apps and desktop tools. We run the whole journey from idea to launch ourselves; we do not take on external software work.',
        tags: ['Next.js', 'React Native', 'PocketBase', 'TypeScript'],
      },
      {
        title: 'UI/UX Design',
        description:
          'We design our own product interfaces; depending on capacity and schedule we also take on external design work. Full delivery from research to prototype, wireframe to final design.',
        tags: ['Figma', 'Prototype', 'Design System', 'Web & Mobile'],
      },
      {
        title: '3D Modeling',
        description:
          'Product visualization, prototypes and print-ready 3D models. Selected models are sold through Pazarora.',
        tags: ['Modeling', 'Prototype', 'Render', 'Pazarora'],
      },
    ],
  },
  projects: {
    label: 'Products we build',
    title: 'Projects',
  },
  model3d: {
    label: '3D Modeling',
    title1: 'From idea to model,',
    title2: 'from model to sale',
    description1: 'We do product visualization, prototypes and print-ready 3D modeling. We sell selected models through our own e-commerce platform',
    description2: '— the infrastructure, from payments to delivery, is entirely ours.',
    chips: ['Product Visualization', 'Print-Ready Models', 'Prototypes', 'On Sale at Pazarora'],
    cardTitle: 'Pazarora',
    cardSub: 'Sewing patterns and 3D models on sale',
  },
  process: {
    label: 'Process',
    title: 'How we work',
    steps: [
      { title: 'Discovery', description: 'We listen to your needs and understand your goals and constraints.' },
      { title: 'Design', description: 'We shape the vision with wireframes and prototypes, together with you.' },
      { title: 'Development', description: 'We write clean, testable code with modern technologies. Transparent throughout.' },
      { title: 'Delivery & Support', description: 'We deliver on time and stay by your side after launch.' },
    ],
  },
  about: {
    label: 'About',
    text: 'We design, build and sell our own products. Simplicity is the highest form of complexity — that is the belief we work by.',
    stats: [
      { label: 'Years' },
      { label: 'Products' },
      { label: 'Models' },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Say hello',
    text: 'Let\'s talk about our products, designs or 3D models. We usually respond within 24 hours.',
    location: 'Burdur, Türkiye',
  },
  footer: {
    privacy: 'Privacy',
    kvkk: 'KVKK',
  },
  notFound: {
    label: 'Error 404',
    title: 'Lost star',
    text: 'The page you are looking for is not in this sky. Maybe it moved, maybe it never shone.',
    back: 'Back to home',
  },
  status: {
    live: 'Live',
    development: 'In development',
  },
  projectDetail: {
    back: 'All projects',
    about: 'About',
    features: 'Features',
    stack: 'Technologies',
    category: 'Category',
    started: 'Started',
    status: 'Status',
  },
  langToggle: 'TR',
}

const dictionaries: Record<Locale, Dictionary> = { tr, en }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export interface Project {
  slug: string
  title: string
  category: string
  year: string
  description: string
  longDescription: string[]
  features: string[]
  stack: string[]
  gradient: string
  status: 'live' | 'development'
  link?: { label: string; href: string }
}

export const projects: Project[] = [
  {
    slug: 'filamify',
    title: 'Filamify',
    category: 'SaaS · Workshop OS',
    year: '2025',
    description:
      '3D baskı atölyeleri için ERP: reçete maliyetlendirme, filament/makine envanteri, yazıcı izleme ve müşteri teklifleri.',
    longDescription: [
      'Filamify, 3D baskı atölyelerinin günlük operasyonunu tek panelde toplayan bir Workshop OS. Reçete maliyetlendirme, filament ve makine envanteri, yazıcı izleme ve müşteri teklifleri — hepsi Türkçe arayüzle.',
      'Ücretsiz Standart planı ile başlayıp Pro planıyla sınırsız reçete, PDF teklif/fatura ve gelişmiş raporlamaya geçilen iki üyelik modeliyle çalışır.',
    ],
    features: [
      'Reçete maliyetlendirme ve kâr marjı hesaplama',
      'Filament ve makine envanteri, düşük stok uyarıları',
      'Yazıcı durumu izleme (Bambu Lab, Prusa, vb.)',
      'PDF teklif/fatura oluşturucu (Pro)',
      'CSV içe/dışa aktarma ve otomatik yedekleme',
      'Authentik SSO ile güvenli giriş',
    ],
    stack: ['Next.js', 'PocketBase', 'Authentik', 'TypeScript'],
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 100%)',
    status: 'live',
  },
  {
    slug: 'oktos',
    title: 'OktOs',
    category: 'AI Arayüz',
    year: '2024',
    description:
      'Senaryo odaklı yapay zekâ arayüzü. Vite React istemci ve Hono API üzerine kurulu; OpenRouter ile çoklu model desteği.',
    longDescription: [
      'OktOs, yapay zekâ etkileşimini senaryolar üzerinden kuran bir arayüz deneyi. Sohbet kutusundan çok, akışa ve bağlama odaklı bir kullanım modeli hedefliyor.',
      'Vite React istemci ve Hono API ayrı katmanlarda çalışır; API anahtarı yalnızca backend tarafında tutulur, tarayıcıya asla sızmaz.',
    ],
    features: [
      'Senaryo odaklı arayüz akışı',
      'OpenRouter ile çoklu model desteği',
      'API anahtarı yalnızca backend\'de',
      'Anahtar yoksa yerel fallback akışı',
    ],
    stack: ['React', 'Vite', 'Hono', 'OpenRouter'],
    gradient: 'linear-gradient(135deg, #16161d 0%, #252533 100%)',
    status: 'development',
  },
  {
    slug: 'e-cuzdan',
    title: 'e-Cüzdan',
    category: 'FinTech',
    year: '2026',
    description:
      'Kişisel gelir/gider takip uygulaması. Çoklu para birimi, altın/gümüş takibi, düzenli ödemeler ve RBAC ile çoklu kullanıcı.',
    longDescription: [
      'e-Cüzdan, kişisel finansı Türk kullanıcı alışkanlıklarına göre yöneten bir gelir/gider takip uygulaması. Wallos benzeri sade bir tasarımla, PocketBase backend üzerinde çalışır.',
      'Çoklu para birimi ve değerli maden takibinin yanında alt sınır uyarısı, düzenli ödemeler ve admin/user rolleriyle çoklu kullanıcı desteği sunar.',
    ],
    features: [
      'Çoklu para birimi: TL, USD, EUR, GBP ve fazlası',
      'Altın, gümüş, platin takibi',
      'Alt sınır (minimum bakiye) uyarısı',
      'Abonelik, kira, maaş gibi düzenli ödemeler',
      'Gelir/gider grupları ve arama',
      'Admin/user rolleri, MUI X Charts ile analiz',
    ],
    stack: ['React 19', 'MUI', 'PocketBase', 'Zustand'],
    gradient: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
    status: 'development',
  },
  {
    slug: 'hazne',
    title: 'Hazne',
    category: 'Mobil Uygulama',
    year: '2026',
    description:
      'Mobil üretkenlik uygulaması: hızlı komut erişimi, tema özelleştirme ve eklenti desteğiyle iş akışını hızlandırır.',
    longDescription: [
      'Hazne, mobil cihazda üretkenliği artırmak için tasarlanmış bir React Native uygulaması. Hızlı komut erişimi, tema özelleştirmesi ve eklenti desteğiyle iş akışını hızlandırır.',
      'Glassmorphism arama çubuğu, gerçek zamanlı komut filtreleme ve kategori bazlı filtreleme ile istediğin komuta saniyeler içinde ulaşırsın.',
    ],
    features: [
      'Hızlı komut erişimi ve gerçek zamanlı filtreleme',
      'Glassmorphism arama deneyimi',
      'Tema özelleştirmesi',
      'Eklenti desteği',
      'SQLite + AsyncStorage ile yerel veri',
    ],
    stack: ['React Native', 'Expo', 'SQLite'],
    gradient: 'linear-gradient(135deg, #0d1117 0%, #1c2530 100%)',
    status: 'development',
  },
  {
    slug: 'pazarora',
    title: 'Pazarora',
    category: 'E-Ticaret',
    year: '2024',
    description:
      'Kendi e-ticaret altyapımız: aktif ödeme sistemi ve ürün satışı. Kıyafet kalıpları ve seçili 3D modeller burada satılıyor.',
    longDescription: [
      'Pazarora, kendi ürünlerimizi sattığımız e-ticaret platformu. Aktif ödeme sistemi ve e-ticaret altyapısı tamamen kurulu — kıyafet kalıpları satışı burada yapılıyor.',
      'Ayrıca Bilgin tarafından üretilen seçili 3D modellerin satış kanalı. Ürün gamı büyüdükçe yeni kategoriler burada açılıyor.',
    ],
    features: [
      'Aktif ödeme sistemi',
      'Kıyafet kalıpları satışı',
      '3D model satış kanalı',
      'Authentik gruplarıyla üyelik yönetimi',
    ],
    stack: ['WooCommerce', 'WordPress', 'Authentik'],
    gradient: 'linear-gradient(135deg, #1f1c2c 0%, #2c3e50 100%)',
    status: 'live',
    link: { label: 'pazarora.com', href: 'https://pazarora.com' },
  },
  {
    slug: 'teknikenerji',
    title: 'Teknikenerji',
    category: 'Web Platform',
    year: '2025',
    description:
      'Teknik enerji içerik platformu: Astro + Sanity ile hızlı, SEO odaklı yayın sitesi.',
    longDescription: [
      'Teknikenerji, enerji sektörüne odaklanan teknik içerik platformu. Astro + Sanity + Tailwind üzerine kurulu, statik üretimle hızlı ve SEO odaklı bir yayın sitesi.',
      'Sanity ile içerik yönetimi, static export ile CDN seviyesinde performans hedeflenir.',
    ],
    features: [
      'Astro static export ile hızlı sayfalar',
      'Sanity headless CMS ile içerik yönetimi',
      'SEO odaklı yayın yapısı',
    ],
    stack: ['Astro', 'Sanity', 'Tailwind'],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    status: 'live',
    link: { label: 'teknikenerji.netlify.app', href: 'https://teknikenerji.netlify.app' },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

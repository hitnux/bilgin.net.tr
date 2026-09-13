import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası — Bilgin',
  description: 'Bilgin gizlilik politikası.',
}

const sections = [
  {
    title: 'Topladığımız Veriler',
    body: 'Sitemizi ziyaret ettiğinizde kişisel veri toplanmaz. Yalnızca bizimle e-posta yoluyla iletişime geçtiğinizde, e-posta adresiniz ve mesajınız bizimle paylaşılır.',
  },
  {
    title: 'Verilerin Kullanımı',
    body: 'İletişim için ilettiğiniz bilgiler yalnızca mesajınıza yanıt vermek amacıyla kullanılır. Üçüncü taraflarla paylaşılmaz, pazarlama amacıyla kullanılmaz.',
  },
  {
    title: 'Çerezler',
    body: 'Sitemizde üçüncü taraf analitik veya reklam çerezi kullanılmaz. Tarayıcınızın varsayılan teknik depolaması (tercihler) dışında izleme yapılmaz.',
  },
  {
    title: 'Veri Güvenliği',
    body: 'E-posta yoluyla iletilen veriler, e-posta sağlayıcısının güvenlik önlemlerine tabidir. Hassas bilgileri (kimlik, kart bilgisi vb.) e-posta yoluyla iletmenizi önermeyiz.',
  },
  {
    title: 'Haklarınız',
    body: 'KVKK m. 11 kapsamındaki haklarınız için KVKK Aydınlatma Metnimizi inceleyebilir veya mail@bilgin.net.tr adresine yazabilirsiniz.',
  },
]

export default function GizlilikPage() {
  return (
    <main className="relative min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-24 max-w-3xl">
        <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-4">
          Yasal
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Gizlilik Politikası
        </h1>
        <p className="mt-4 text-sm text-white/30">
          Son güncelleme: Eylül 2026
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-medium text-white/90">{s.title}</h2>
              <p className="mt-3 text-sm text-white/50 leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

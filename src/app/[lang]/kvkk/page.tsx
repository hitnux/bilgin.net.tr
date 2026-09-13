import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni — Bilgin',
  description: 'Bilgin kişisel verilerin korunması aydınlatma metni.',
}

const sections = [
  {
    title: '1. Veri Sorumlusu',
    body: '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca kişisel verileriniz, veri sorumlusu olarak Bilgin ("Bilgin", "biz") tarafından aşağıda açıklanan kapsamda işlenmektedir.',
  },
  {
    title: '2. İşlenen Kişisel Veriler ve İşleme Amaçları',
    body: 'Sitemiz üzerinden bizimle iletişime geçtiğinizde (e-posta yoluyla) adınız, e-posta adresiniz ve mesaj içeriğiniz gibi iletişim formunda yer alan veriler işlenir. Bu veriler yalnızca talebinize yanıt vermek, soru ve görüşlerinizi değerlendirmek amacıyla işlenir. Sitemizde kullanıcı hesabı veya üyelik sistemi bulunmamaktadır.',
  },
  {
    title: '3. Verilerin Aktarımı',
    body: 'Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesiyle sınırlı olmak kaydıyla, KVKK m. 8 ve 9\'da öngörülen hukuki sebeplere dayanılarak; barındırma ve e-posta altyapısı hizmeti aldığımız tedarikçilere aktarılabilir. Verileriniz yurt dışına aktarılmaz.',
  },
  {
    title: '4. Verilerin Saklanması',
    body: 'İletişim amacıyla ilettiğiniz veriler, talebinizin sonuçlandırılmasından itibaren yasal saklama yükümlülükleri dışında, amaç için gerekli olan süre boyunca saklanır; sürenin sonunda silinir veya anonim hale getirilir.',
  },
  {
    title: '5. KVKK m. 11 Kapsamındaki Haklarınız',
    body: 'KVKK m. 11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, eksik/yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme ve işlemenin kanuna aykırılığı nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme haklarına sahipsiniz.',
  },
  {
    title: '6. Başvuru Yolu',
    body: 'Yukarıda sayılan haklarınız kapsamındaki taleplerinizi mail@bilgin.net.tr adresine iletebilirsiniz. Talebiniz, en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılır.',
  },
  {
    title: '7. Çerezler',
    body: 'Sitemiz temel işlevlerin sağlanması dışında üçüncü taraf izleme çerezi kullanmaz. Ziyaretçi hareketleri profillenmez, reklam amacıyla veri toplanmaz.',
  },
]

export default function KvkkPage() {
  return (
    <main className="relative min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-24 max-w-3xl">
        <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-4">
          Yasal
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          KVKK Aydınlatma Metni
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

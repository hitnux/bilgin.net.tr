import type { Locale } from './i18n'

type LegalSection = { title: string; body: string }

const content: Record<Locale, { privacy: { label: string; title: string; description: string; sections: LegalSection[] }; legal: { label: string; title: string; description: string; sections: LegalSection[] } }> = {
  tr: {
    privacy: {
      label: 'Yasal', title: 'Gizlilik Politikası', description: 'Bilgin gizlilik politikası.',
      sections: [
        { title: 'Topladığımız Veriler', body: 'Sitemizi ziyaret ettiğinizde kişisel veri toplanmaz. Yalnızca bizimle e-posta yoluyla iletişime geçtiğinizde, e-posta adresiniz ve mesajınız bizimle paylaşılır.' },
        { title: 'Verilerin Kullanımı', body: 'İletişim için ilettiğiniz bilgiler yalnızca mesajınıza yanıt vermek amacıyla kullanılır. Üçüncü taraflarla paylaşılmaz, pazarlama amacıyla kullanılmaz.' },
        { title: 'Çerezler', body: 'Sitemizde üçüncü taraf analitik veya reklam çerezi kullanılmaz. Tarayıcınızın varsayılan teknik depolaması dışında izleme yapılmaz.' },
        { title: 'Veri Güvenliği', body: 'E-posta yoluyla iletilen veriler, e-posta sağlayıcısının güvenlik önlemlerine tabidir. Hassas bilgileri e-posta yoluyla iletmenizi önermeyiz.' },
        { title: 'Haklarınız', body: 'KVKK m. 11 kapsamındaki haklarınız için KVKK Aydınlatma Metnimizi inceleyebilir veya mail@bilgin.net.tr adresine yazabilirsiniz.' },
      ],
    },
    legal: {
      label: 'Yasal', title: 'KVKK Aydınlatma Metni', description: 'Bilgin kişisel verilerin korunması aydınlatma metni.',
      sections: [
        { title: '1. Veri Sorumlusu', body: '6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca kişisel verileriniz, veri sorumlusu olarak Bilgin tarafından aşağıda açıklanan kapsamda işlenmektedir.' },
        { title: '2. İşlenen Kişisel Veriler ve İşleme Amaçları', body: 'Sitemiz üzerinden bizimle iletişime geçtiğinizde adınız, e-posta adresiniz ve mesaj içeriğiniz gibi iletişim verileri işlenir. Bu veriler yalnızca talebinize yanıt vermek amacıyla kullanılır. Sitemizde kullanıcı hesabı veya üyelik sistemi bulunmamaktadır.' },
        { title: '3. Verilerin Aktarımı', body: 'Kişisel verileriniz, iletişim ve barındırma altyapısı hizmeti aldığımız tedarikçilere, kanunda öngörülen hukuki sebeplerle aktarılabilir.' },
        { title: '4. Verilerin Saklanması', body: 'İletişim amacıyla ilettiğiniz veriler, amaç için gerekli olan süre boyunca saklanır; sürenin sonunda silinir veya anonim hale getirilir.' },
        { title: '5. KVKK m. 11 Kapsamındaki Haklarınız', body: 'Kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya silinmesini isteme ve kanuna aykırı işleme nedeniyle zararınız varsa giderilmesini talep etme haklarına sahipsiniz.' },
        { title: '6. Başvuru Yolu', body: 'Taleplerinizi mail@bilgin.net.tr adresine iletebilirsiniz. Talebiniz en geç otuz gün içinde sonuçlandırılır.' },
        { title: '7. Çerezler', body: 'Sitemiz temel işlevlerin sağlanması dışında üçüncü taraf izleme çerezi kullanmaz. Ziyaretçi hareketleri profillenmez.' },
      ],
    },
  },
  en: {
    privacy: {
      label: 'Legal', title: 'Privacy Policy', description: 'Bilgin privacy policy.',
      sections: [
        { title: 'Data We Collect', body: 'We do not collect personal data when you visit the site. When you contact us by email, your email address and message are shared with us.' },
        { title: 'How We Use Data', body: 'Contact information is used only to respond to your message. It is not shared with third parties or used for marketing.' },
        { title: 'Cookies', body: 'We do not use third-party analytics or advertising cookies. We do not track visitors beyond essential browser storage for preferences.' },
        { title: 'Data Security', body: 'Data sent by email is subject to the security measures of the email provider. We do not recommend sending sensitive information by email.' },
        { title: 'Your Rights', body: 'For questions about your data rights, review our data protection notice or contact mail@bilgin.net.tr.' },
      ],
    },
    legal: {
      label: 'Legal', title: 'Data Protection Notice', description: 'Bilgin personal data protection notice.',
      sections: [
        { title: '1. Data Controller', body: 'Bilgin processes personal data as the data controller within the scope described in this notice.' },
        { title: '2. Personal Data and Purposes', body: 'When you contact us through the site, we process contact data such as your name, email address, and message to respond to your request. The site has no user account or membership system.' },
        { title: '3. Data Transfers', body: 'Your data may be shared with providers of our hosting and email infrastructure where necessary to operate the service and respond to your request.' },
        { title: '4. Data Retention', body: 'Contact data is retained only for as long as necessary to handle your request and comply with legal obligations, then deleted or anonymized.' },
        { title: '5. Your Rights', body: 'You may ask whether we process your personal data, request information about it, and ask for correction or deletion where applicable.' },
        { title: '6. Contact', body: 'Send privacy requests to mail@bilgin.net.tr. We will respond within the applicable legal period.' },
        { title: '7. Cookies', body: 'We do not use third-party tracking cookies beyond what is necessary for core site functionality. We do not profile visitors.' },
      ],
    },
  },
}

export function getLegalContent(locale: Locale, page: 'privacy' | 'legal') {
  return content[locale][page]
}

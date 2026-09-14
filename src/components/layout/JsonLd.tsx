export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://bilgin.net.tr/#organization',
        name: 'Bilgin',
        url: 'https://bilgin.net.tr',
        email: 'mail@bilgin.net.tr',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Burdur',
          addressCountry: 'TR',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://bilgin.net.tr/#website',
        url: 'https://bilgin.net.tr',
        name: 'Bilgin',
        description:
          'Kendi ürünlerimizi geliştiriyoruz — web ve mobil uygulamalar, UI/UX tasarım ve 3D modelleme.',
        publisher: { '@id': 'https://bilgin.net.tr/#organization' },
        inLanguage: ['tr', 'en'],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

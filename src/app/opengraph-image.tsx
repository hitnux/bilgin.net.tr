import { ImageResponse } from 'next/og'

export const alt = 'Bilgin — Yazılım ve Tasarım'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

function Star({ top, left, size, opacity }: { top: number; left: number; size: number; opacity: number }) {
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        top,
        left,
        width: size,
        height: size,
        borderRadius: 9999,
        background: '#fff',
        opacity,
      }}
    />
  )
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #000000 0%, #0a0a1a 60%, #141032 100%)',
          padding: 80,
          position: 'relative',
        }}
      >
        <Star top={90} left={640} size={4} opacity={0.9} />
        <Star top={180} left={900} size={3} opacity={0.6} />
        <Star top={70} left={1080} size={5} opacity={0.8} />
        <Star top={300} left={1020} size={3} opacity={0.5} />
        <Star top={150} left={420} size={3} opacity={0.5} />
        <Star top={420} left={1130} size={4} opacity={0.7} />
        <Star top={520} left={960} size={3} opacity={0.4} />
        <Star top={240} left={1150} size={3} opacity={0.6} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              border: '2px solid rgba(255,255,255,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 30,
              fontWeight: 600,
            }}
          >
            B
          </div>
          <div style={{ color: 'white', fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
            Bilgin
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', color: 'rgba(255,255,255,0.95)', fontSize: 76, fontWeight: 600, letterSpacing: -2, lineHeight: 1.1 }}>
            Yazılım · Tasarım · 3D
          </div>
          <div style={{ display: 'flex', color: 'rgba(255,255,255,0.45)', fontSize: 30, fontWeight: 400 }}>
            Web & Mobil Uygulamalar · UI/UX Tasarım · 3D Modelleme
          </div>
        </div>

        <div style={{ display: 'flex', color: 'rgba(255,255,255,0.35)', fontSize: 24, letterSpacing: 3 }}>
          bilgin.net.tr
        </div>
      </div>
    ),
    { ...size }
  )
}

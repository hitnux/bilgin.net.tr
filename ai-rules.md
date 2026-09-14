# bilgin.net.tr — AI Rules

Bu dosya Hem Hermes agent hem VSCode'daki AI asistanları için proje kurallarını tutar.

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **UI:** shadcn/ui (Base UI altında) + Tailwind CSS 4 + Framer Motion
- **Deploy:** Static export → GitHub Pages
- **i18n:** tr/en (tüm kullanıcıya görünen metinler iki dilde)

## Tasarım

- Logo: kutu-içi "b" + "bilgin" yazısı; düşük radius. Mevcut logo spesifikasyonunu değiştirme.
- Sade/modern/şık; büyük tipografi kullanma. Font değişikliğinde önce Halil'e danış, karşılaştırma sun.
- Tasarım varyantları: 6'lı setler tek görselde sunulur; "başka" = yeni set; seçilmeden hiçbir varyant uygulanmaz.

## Kod disiplini

- Commit mesajları İngilizce, conventional (`feat:`, `fix:`).
- Build (`next build`) temiz olmadan commit yok.
- Push öncesi Halil'in onayı şart; merge sadece o söylediğinde.
- PR akışı: PR aç → onay bekle → merge'i sadece Halil söylediğinde yap.

## Deploy

- Static export (`out/`) → GH Pages. Preview: `npx serve out -p 3999`.
- Yeni sayfa/özellik i18n dict'lerine her iki dilde de girmeli.

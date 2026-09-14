import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { projects, getProject } from '@/lib/projects'
import { getDictionary, locales, defaultLocale, type Locale } from '@/lib/i18n'

interface Props {
  params: Promise<{ slug: string; lang: string }>
}

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    projects.map((p) => ({ lang, slug: p.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Bilgin' }
  return {
    title: `${project.title} — Bilgin`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug, lang: rawLang } = await params
  const lang: Locale = locales.includes(rawLang as Locale) ? (rawLang as Locale) : defaultLocale
  const t = getDictionary(lang)
  const project = getProject(slug)

  if (!project) return null

  return (
    <main className="relative min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link
          href={`/${lang}#projeler`}
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.projectDetail.back}
        </Link>

        <div className="mt-10">
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/30 tracking-[0.25em] uppercase">
              {project.category}
            </span>
            <span className="text-[11px] text-white/20 font-mono">{project.year}</span>
            {project.status === 'live' ? (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] text-[10px] text-emerald-300/80 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {t.status.live}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] text-white/40 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                {t.status.development}
              </span>
            )}
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-white">
            {project.title}
          </h1>

          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Visual tile */}
        <div
          className="mt-14 aspect-[21/9] rounded-2xl border border-white/10 overflow-hidden relative"
          style={{ background: project.gradient }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 120%, rgba(255,255,255,0.10) 0%, transparent 60%)',
            }}
          />
          <div className="absolute bottom-8 right-8">
            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm text-white/90 hover:bg-white/[0.06] transition-colors backdrop-blur-sm"
              >
                {project.link.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-6">
              {t.projectDetail.about}
            </h2>
            <div className="space-y-5">
              {project.longDescription.map((para, i) => (
                <p key={i} className="text-sm md:text-base text-white/60 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <h2 className="text-[11px] text-white/30 tracking-[0.25em] uppercase mt-14 mb-6">
              {t.projectDetail.features}
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                  <Check className="h-4 w-4 text-white/30 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h2 className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-6">
                {t.projectDetail.stack}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs rounded-full border border-white/10 text-white/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/30">{t.projectDetail.category}</span>
                  <span className="text-white/70">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/30">{t.projectDetail.started}</span>
                  <span className="text-white/70">{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/30">{t.projectDetail.status}</span>
                  <span className="text-white/70">
                    {project.status === 'live' ? t.status.live : t.status.development}
                  </span>
                </div>
              </div>

              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/15 text-sm text-white/80 hover:bg-white/[0.04] transition-colors"
                >
                  {project.link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

import type { Metadata } from 'next'
import { projects, getProject } from '@/lib/projects'
import { getProjectContent } from '@/lib/project-i18n'
import { ProjectDetail } from '@/components/sections/ProjectDetail'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Bilgin' }
  return { title: `${project.title} — Bilgin`, description: getProjectContent(project, 'tr').description }
}

export default async function TrProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ProjectDetail lang="tr" slug={slug} />
}

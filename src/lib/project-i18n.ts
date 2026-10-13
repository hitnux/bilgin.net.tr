import type { Locale } from './i18n'
import type { Project } from './projects'

type LocalizedProject = Pick<Project, 'category' | 'description' | 'longDescription' | 'features'>

const en: Record<string, LocalizedProject> = {
  filamify: {
    category: 'SaaS · Workshop OS',
    description: 'An ERP for 3D printing workshops: recipe costing, filament and machine inventory, printer monitoring, and customer quotes.',
    longDescription: [
      'Filamify brings the daily operations of 3D printing workshops into one Workshop OS. Recipe costing, filament and machine inventory, printer monitoring, and customer quotes — all in one place.',
      'It offers a free Standard plan and a Pro plan with unlimited recipes, PDF quotes/invoices, and advanced reporting.',
    ],
    features: ['Recipe costing and margin calculation', 'Filament and machine inventory with low-stock alerts', 'Printer status monitoring', 'PDF quote and invoice generator', 'CSV import/export and automated backups', 'Secure Authentik SSO login'],
  },
  oktos: {
    category: 'AI Interface',
    description: 'A scenario-driven AI interface built with a Vite React client, Hono API, and multi-model support through OpenRouter.',
    longDescription: ['OktOs is an experiment in scenario-driven AI interaction. Instead of centering the chat box, it focuses on flow and context.', 'The Vite React client and Hono API run as separate layers; API keys stay on the backend and never reach the browser.'],
    features: ['Scenario-driven interaction flows', 'Multi-model support through OpenRouter', 'Backend-only API keys', 'Local fallback flow when no key is configured'],
  },
  'e-cuzdan': {
    category: 'FinTech',
    description: 'A personal income and expense tracker with multiple currencies, precious-metal tracking, recurring payments, and multi-user RBAC.',
    longDescription: ['e-Cüzdan is a personal finance tracker shaped around Turkish user habits. It runs on a PocketBase backend with a focused, simple interface.', 'It supports multiple currencies, precious metals, threshold alerts, recurring payments, and multiple users with admin/user roles.'],
    features: ['Multiple currencies', 'Gold, silver, and platinum tracking', 'Minimum-balance alerts', 'Recurring payments', 'Income/expense groups and search', 'Admin/user roles and analytics'],
  },
  hazne: {
    category: 'Mobile App',
    description: 'A mobile productivity app that speeds up workflows with quick command access, theme customization, and plugin support.',
    longDescription: ['Hazne is a React Native app designed to improve mobile productivity with quick command access, theme customization, and plugins.', 'A glassmorphism search bar, real-time command filtering, and category filters help users reach any command in seconds.'],
    features: ['Quick command access and real-time filtering', 'Glassmorphism search experience', 'Theme customization', 'Plugin support', 'Local data with SQLite and AsyncStorage'],
  },
  pazarora: {
    category: 'E-Commerce',
    description: 'Our own e-commerce platform for selling clothing patterns and selected 3D models.',
    longDescription: ['Pazarora is the e-commerce platform where we sell our own products. The payment and commerce infrastructure is fully operational.', 'It also serves as the sales channel for selected 3D models made by Bilgin.'],
    features: ['Active payment system', 'Clothing pattern sales', '3D model sales channel', 'Membership management with Authentik groups'],
  },
  teknikenerji: {
    category: 'Web Platform',
    description: 'A technical energy publishing platform built with Astro and Sanity for fast, SEO-focused publishing.',
    longDescription: ['Teknikenerji is a technical publishing platform focused on the energy sector. It is built with Astro, Sanity, and Tailwind for fast static delivery.', 'Sanity provides content management while static generation targets CDN-level performance.'],
    features: ['Fast pages with Astro static export', 'Sanity headless CMS', 'SEO-focused publishing structure'],
  },
}

export function getProjectContent(project: Project, locale: Locale): LocalizedProject {
  return locale === 'en' ? en[project.slug] ?? project : project
}

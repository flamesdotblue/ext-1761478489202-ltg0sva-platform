import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    description: 'A real-time analytics dashboard with motion-driven charts and accessible UI.',
    tags: ['React', 'Framer Motion', 'TypeScript'],
    href: '#',
    accent: 'from-fuchsia-500 to-cyan-500',
  },
  {
    title: '3D Product Configurator',
    description: 'Interactive 3D viewer with custom materials, lighting, and states.',
    tags: ['Spline', 'WebGL', 'Tailwind'],
    href: '#',
    accent: 'from-indigo-500 to-sky-500',
  },
  {
    title: 'AI Portfolio Generator',
    description: 'CLI and web tool that scaffolds portfolios with best practices built-in.',
    tags: ['Node', 'Next.js', 'Vercel'],
    href: '#',
    accent: 'from-emerald-500 to-teal-400',
  },
];

function ProjectCard({ project }) {
  return (
    <a href={project.href} className="group relative block rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition overflow-hidden">
      <div className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${project.accent} opacity-30 blur-2xl`} />
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-white transition" />
      </div>
      <p className="mt-2 text-sm text-neutral-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="text-xs rounded-full bg-white/5 border border-white/10 px-2 py-1 text-neutral-300">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-20">
      <div className="absolute inset-x-0 -top-24 h-48 pointer-events-none bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-neutral-400 max-w-2xl">A snapshot of recent projects exploring interactivity, performance, and clean design systems.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition">Work with me</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

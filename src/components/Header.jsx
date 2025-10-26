import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-500" />
          <span className="font-semibold tracking-tight">Your Name</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition"><Github className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition"><Linkedin className="h-5 w-5" /></a>
          <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-white transition"><Mail className="h-5 w-5" /></a>
        </nav>
        <a href="#contact" className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/10 transition">Say hi</a>
      </div>
    </header>
  );
}

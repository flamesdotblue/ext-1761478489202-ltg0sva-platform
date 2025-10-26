import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s collaborate</h2>
            <p className="mt-3 text-neutral-300 max-w-prose">
              I’m open to freelance, contract, and full-time opportunities. If you have a project in mind or just want to say hello, feel free to reach out.
            </p>
            <div className="mt-6 flex items-center gap-4 text-neutral-300">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition">
                <Mail className="h-4 w-4" /> hello@example.com
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <form className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Name</label>
                <input type="text" required className="w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 text-sm outline-none focus:border-fuchsia-500/50" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Email</label>
                <input type="email" required className="w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 text-sm outline-none focus:border-fuchsia-500/50" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-neutral-300 mb-1">Message</label>
              <textarea rows={5} required className="w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 text-sm outline-none focus:border-fuchsia-500/50" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-fuchsia-500/20">
              Send Message
            </button>
            <p className="mt-3 text-xs text-neutral-400">This form is a demo. Use the email button to contact directly.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

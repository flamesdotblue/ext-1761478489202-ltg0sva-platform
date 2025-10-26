import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.85)_100%)]" />

        <div className="relative z-10 h-full flex items-end md:items-center">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-10 md:pb-0">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
                <Rocket className="h-3.5 w-3.5 text-fuchsia-400" />
                Interactive 3D • Tech • Modern
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
                Building playful, performant web experiences
              </h1>
              <p className="mt-4 text-neutral-300 max-w-xl">
                I craft modern, interactive interfaces with a focus on 3D, motion, and delightful UX. Let’s create something memorable together.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-fuchsia-500/20">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

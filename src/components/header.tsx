import { useEffect, useRef } from 'react'
import { LucideArrowDown } from 'lucide-react'

type HeaderProps = {
  onScrollClick: () => void
}

const TECH_STACK = [
  'React',
  'TypeScript',
  'TanStack',
  'Next.js',
  'Node.js',
  'PostgreSQL',
]

export function Header({ onScrollClick }: HeaderProps) {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      hero.style.setProperty('--gx', `${e.clientX - r.left}px`)
      hero.style.setProperty('--gy', `${e.clientY - r.top}px`)
    }
    hero.addEventListener('mousemove', onMove)
    return () => hero.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-gray-600"
      style={{ '--gx': '50%', '--gy': '50%' } as React.CSSProperties}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity"
        style={{
          background:
            'radial-gradient(700px circle at var(--gx) var(--gy), rgba(6,182,212,0.09), transparent 65%)',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-grid"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 70% at 50% 50%, transparent 35%, #080808 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-10 bg-cyan" />
          <span className="font-subtitle text-cyan text-xs tracking-[0.22em] uppercase">
            Desenvolvedor Front-End
          </span>
          <div className="h-px w-10 bg-cyan" />
        </div>

        <h1
          className="font-title leading-none mb-8 select-none"
          aria-label="Matheus Cardoso"
        >
          <span className="block text-[clamp(3.5rem,11vw,8.5rem)] font-black text-gray-100 tracking-tighter">
            MATHEUS
          </span>
          <span className="block text-[clamp(3.5rem,11vw,8.5rem)] font-black tracking-tighter name-outline">
            CARDOSO
          </span>
        </h1>

        <p className="font-sans text-gray-200 max-w-[440px] leading-text mb-10 text-sm">
          Transformo ideias em interfaces modernas, responsivas e centradas na
          experiência do usuário.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {TECH_STACK.map(tech => (
            <span
              key={tech}
              className="font-subtitle text-xs text-gray-200 border border-border px-3 py-1.5 rounded-full hover:border-cyan hover:text-cyan transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onScrollClick}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-gray-300 hover:text-cyan transition-colors duration-300 cursor-pointer"
      >
        <span className="font-subtitle text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <LucideArrowDown className="size-3.5 animate-bounce" />
      </button>
    </div>
  )
}

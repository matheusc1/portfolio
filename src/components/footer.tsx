import { LucideGithub, LucideLinkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-600 border-t border-border px-6 py-6">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-subtitle text-xs text-gray-300 tracking-[0.2em] uppercase hover:text-cyan transition-colors duration-200"
        >
          Matheus Cardoso
        </button>

        <span className="font-subtitle text-xs text-gray-300 tracking-[0.1em]">
          © 2026
        </span>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/matheusc1/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-cyan transition-colors duration-200"
          >
            <LucideLinkedin className="size-4" />
          </a>
          <a
            href="https://github.com/matheusc1"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-cyan transition-colors duration-200"
          >
            <LucideGithub className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

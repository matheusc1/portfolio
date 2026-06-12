import { LucideArrowLeft, LucideExternalLink } from 'lucide-react'
import { NavLink } from 'react-router'

type ProjectLayoutProps = {
  title: string
  liveUrl?: string
  liveNote?: string
  children: React.ReactNode
}

export function ProjectLayout({
  title,
  liveUrl,
  liveNote,
  children,
}: ProjectLayoutProps) {
  return (
    <div className="min-h-dvh bg-gray-600 text-gray-100">
      <div className="sticky top-0 z-10 bg-gray-600/80 backdrop-blur-sm border-b border-border px-6 md:px-20 py-4">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 font-subtitle text-xs text-gray-200 tracking-[0.15em] uppercase hover:text-cyan transition-colors duration-200"
        >
          <LucideArrowLeft className="size-3.5" />
          Voltar
        </NavLink>
      </div>

      <div className="max-w-[800px] mx-auto px-6 md:px-10 py-16 flex flex-col gap-12">
        <div className="space-y-4">
          <h1 className="font-title font-black text-4xl text-gray-100 leading-title">
            {title}
          </h1>
          {liveUrl && (
            <div className="flex items-center gap-2">
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-subtitle text-xs text-cyan hover:underline tracking-[0.1em]"
              >
                <LucideExternalLink className="size-3" />
                {liveUrl.replace('https://', '')}
              </a>
              {liveNote && (
                <span className="font-sans text-gray-300 text-xs">
                  {liveNote}
                </span>
              )}
            </div>
          )}
        </div>

        {children}
      </div>
    </div>
  )
}

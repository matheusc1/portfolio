type ProjectSectionProps = {
  title: string
  children: React.ReactNode
}

export function ProjectSection({ title, children }: ProjectSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="w-1 h-1 rounded-full bg-cyan flex-shrink-0" />
        <h2 className="font-subtitle text-xs text-gray-300 tracking-[0.2em] uppercase">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { NavLink } from 'react-router'

type Project = {
  to: string
  image: string
  alt: string
  title: string
  description: string
  tags: string[]
}

const FEATURED: Project = {
  to: '/mybooklist',
  image: 'mybooklist.png',
  alt: 'MyBookList',
  title: 'MyBookList',
  description:
    'Aplicação para registrar leituras, acompanhar métricas e organizar a biblioteca pessoal.',
  tags: ['React', 'TypeScript', 'TanStack', 'NestJS', 'PostgreSQL'],
}

const PROJECTS: Project[] = [
  {
    to: '/prompt-forge',
    image: 'prompt-forge.png',
    alt: 'Prompt Forge',
    title: 'Prompt Forge',
    description: 'Aplicação Full Stack para avaliar e melhorar prompts com IA.',
    tags: ['React', 'Typescript', 'Fastify', 'OpenRouter'],
  },
  {
    to: '/movie-catalog',
    image: 'movie-catalog.png',
    alt: 'Movie Catalog',
    title: 'Movie Catalog',
    description:
      'Catálogo de filmes com pesquisa, informações detalhadas e descoberta dos mais populares.',
    tags: ['React', 'TypeScript', 'TMDB API'],
  },
  {
    to: '/exam-scheduler',
    image: 'exam-scheduler.png',
    alt: 'Exam Scheduler',
    title: 'Exam Scheduler',
    description: 'Aplicação Full Stack para agendamento de avaliações.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
]

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 150, damping: 20 })
  const sy = useSpring(y, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(sy, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(sx, [-0.5, 0.5], ['-6deg', '6deg'])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Projects() {
  return (
    <section className="bg-gray-600 py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan" />
          <span className="font-subtitle text-cyan text-xs tracking-[0.22em] uppercase">
            Meu trabalho
          </span>
          <div className="h-px w-10 bg-cyan" />
        </div>
        <h2 className="font-title text-gray-100 text-3xl font-black">
          Projetos em destaque
        </h2>
      </motion.div>

      <div className="max-w-[1080px] mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TiltCard>
            <NavLink
              to={FEATURED.to}
              className="group relative flex flex-col md:flex-row bg-gray-400 border border-border rounded-2xl overflow-hidden hover:border-cyan transition-colors duration-300"
            >
              <div className="md:w-[58%] overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}${FEATURED.image}`}
                  alt={FEATURED.alt}
                  className="w-full h-full object-cover object-top scale-100 group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="md:w-[42%] flex flex-col justify-between p-8">
                <div>
                  <span className="font-subtitle text-cyan text-xs tracking-[0.2em] uppercase">
                    01 — Featured
                  </span>
                  <h3 className="font-title text-gray-100 text-2xl font-black mt-3 mb-4">
                    {FEATURED.title}
                  </h3>
                  <p className="font-sans text-gray-200 text-sm leading-text">
                    {FEATURED.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">
                  {FEATURED.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-subtitle text-[11px] text-gray-200 border border-border px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </NavLink>
          </TiltCard>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.to}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard className="h-full">
                <NavLink
                  to={p.to}
                  className="group relative flex flex-col bg-gray-400 border border-border rounded-2xl overflow-hidden hover:border-cyan transition-colors duration-300 h-full"
                >
                  <div className="overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}${p.image}`}
                      alt={p.alt}
                      className="w-full object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-5">
                    <div>
                      <span className="font-subtitle text-gray-300 text-[10px] tracking-[0.15em]">
                        0{i + 2}
                      </span>
                      <h3 className="font-title text-gray-100 font-black mt-1 mb-2">
                        {p.title}
                      </h3>
                      <p className="font-sans text-gray-200 text-xs leading-text">
                        {p.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.tags.map(tag => (
                        <span
                          key={tag}
                          className="font-subtitle text-[10px] text-gray-300 border border-border px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </NavLink>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

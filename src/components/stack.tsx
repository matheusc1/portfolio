import { motion } from 'motion/react'

const STACK = [
  {
    category: 'Front-end',
    items: [
      'React',
      'TypeScript',
      'Next.js',
      'Tanstack Start',
      'Tanstack Query',
      'Tailwind CSS',
      'TanStack Form',
      'React Hook Form',
      'Zustand',
    ],
  },
  {
    category: 'Back-end',
    items: [
      'Node.js',
      'NestJS',
      'Fastify',
      'PostgreSQL',
      'Zod',
      'Drizzle',
      'Prisma',
    ],
  },
  {
    category: 'Ferramentas',
    items: ['Git', 'Vite', 'Biome', 'Vitest', 'Figma', 'Playwright'],
  },
]

export function Stack() {
  return (
    <section className="bg-gray-500 border-y border-border py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[1080px] mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan" />
          <span className="font-subtitle text-cyan text-xs tracking-[0.22em] uppercase">
            Stack
          </span>
          <div className="h-px w-10 bg-cyan" />
        </div>
        <h2 className="font-title text-gray-100 font-black text-3xl mb-16">
          Tecnologias que uso
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {STACK.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-subtitle text-gray-300 text-xs tracking-[0.2em] uppercase mb-5">
                {group.category}
              </p>
              <ul className="space-y-3">
                {group.items.map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-cyan flex-shrink-0" />
                    <span className="font-sans text-gray-200 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

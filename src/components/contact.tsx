import {
  LucideArrowUpRight,
  LucideGithub,
  LucideLinkedin,
  LucideMail,
} from 'lucide-react'

export function Contact() {
  return (
    <div className="bg-[url(/bottom-cover.png)] bg-cover bg-top h-full w-full px-5 md:px-0 flex flex-col items-center justify-center text-center">
      <div className="space-y-2">
        <p className="text-purple font-subtitle leading-title text-xl">
          Contato
        </p>
        <h2 className="text-gray-100 font-title leading-title text-2xl text-shadow-sm/40">
          Gostou do meu trabalho?
        </h2>
        <span className="text-gray-200 leading-text">
          Entre em contato ou acompanhe as minhas redes sociais!
        </span>
      </div>

      <div className="flex flex-col gap-4 mt-12">
        <a
          className="group w-[400px] h-[68px] p-6 gap-4 flex justify-between items-center bg-gray-400 rounded-lg border-2 border-transparent hover:border-blue focus-visible:border-blue focus-visible:outline-none"
          href="https://www.linkedin.com/in/matheusc1/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-4">
            <LucideLinkedin className="size-6 text-gray-300 fill-gray-300 group-[:hover]:text-blue group-[:hover]:fill-blue" />
            <span className="text-gray-200 leading-text font-medium">
              LinkedIn
            </span>
          </div>
          <LucideArrowUpRight className="text-blue" />
        </a>

        <a
          className="group w-[400px] h-[68px] p-6 gap-4 flex justify-between items-center bg-gray-400 rounded-lg border-2 border-transparent hover:border-blue focus-visible:border-blue focus-visible:outline-none"
          href="https://github.com/matheusc1"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-4">
            <LucideGithub className="size-6 text-gray-300 group-[:hover]:text-blue" />
            <span className="text-gray-200 leading-text font-medium">
              GitHub
            </span>
          </div>
          <LucideArrowUpRight className="text-blue" />
        </a>

        <a
          className="group w-[400px] h-[68px] p-6 gap-4 flex justify-between items-center bg-gray-400 rounded-lg border-2 border-transparent hover:border-blue focus-visible:border-blue focus-visible:outline-none"
          href="mailto:cardoso.matheusbs@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-4">
            <LucideMail className="size-6 text-gray-300 group-[:hover]:text-blue" />
            <span className="text-gray-200 leading-text font-medium">
              E-mail
            </span>
          </div>
          <LucideArrowUpRight className="text-blue" />
        </a>
      </div>
    </div>
  )
}

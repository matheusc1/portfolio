import {
  LucideMonitorSmartphone,
  LucideDatabase,
  LucidePalette,
} from 'lucide-react'

export function Services() {
  return (
    <div className="min-h-[480px] bg-gray-600 space-y-14 pb-10 md:pb-0">
      <div className="pt-20 space-y-2 text-center">
        <p className="text-red font-subtitle leading-title text-xl">
          Meus serviços
        </p>
        <h2 className="text-gray-100 font-title leading-title text-2xl text-shadow-sm/40">
          Como posso ajudar seu negócio
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="border-2 border-gray-500 w-[280px] h-[155px] rounded-xl p-5 space-y-5">
          <LucideMonitorSmartphone className="size-10 text-purple" />
          <div className="space-y-2">
            <p className="font-title leading-title text-gray-100">
              Websites e Aplicativos
            </p>
            <span className="text-sm leading-text text-gray-200">
              Desenvolvimento de interfaces
            </span>
          </div>
        </div>
        <div className="border-2 border-gray-500 w-[280px] h-[155px] rounded-xl p-5 space-y-5">
          <LucideDatabase className="size-10 text-yellow" />
          <div className="space-y-2">
            <p className="font-title leading-title text-gray-100">
              API e banco de dados
            </p>
            <span className="text-sm leading-text text-gray-200">
              Criação de serviços do sistema
            </span>
          </div>
        </div>
        <div className="border-2 border-gray-500 w-[280px] h-[155px] rounded-xl p-5 space-y-5">
          <LucidePalette className="size-10 text-green" />
          <div className="space-y-2">
            <p className="font-title leading-title text-gray-100">Design</p>
            <span className="text-sm leading-text text-gray-200">
              Criação e aprimoramento de telas
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

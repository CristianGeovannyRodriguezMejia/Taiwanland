import type { ReactNode } from 'react'

interface BotonProps {
  children: ReactNode
  onClick?: () => void
  tipo?: 'button' | 'submit' | 'reset'
  variante?: 'primario' | 'peligro' | 'secundario' | 'exito'
  className?: string
  disabled?: boolean
}

const estilosVariante = {
  primario: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
  peligro: 'bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',
  secundario: 'bg-slate-600 hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-600',
  exito: 'bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600',
}

function Boton({
  children,
  onClick,
  tipo = 'button',
  variante = 'primario',
  className = '',
  disabled = false,
}: BotonProps) {
  const estilosBase =
    'px-4 py-2 rounded-lg font-semibold text-white transition-colors shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  return (
    <button
      type={tipo}
      onClick={onClick}
      disabled={disabled}
      className={`${estilosBase} ${estilosVariante[variante]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Boton

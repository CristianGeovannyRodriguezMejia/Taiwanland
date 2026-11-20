import { useEffect, useState } from 'react'
import Boton from './Boton'

function GuiaPractica() {
  const [modoOscuro, setModoOscuro] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', modoOscuro)

    return () => document.documentElement.classList.remove('dark')
  }, [modoOscuro])

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Estilos reutilizables</h1>
          <Boton
            variante="secundario"
            onClick={() => setModoOscuro((activo) => !activo)}
          >
            {modoOscuro ? 'Modo claro' : 'Modo oscuro'}
          </Boton>
        </div>

        <div className="flex flex-wrap gap-4">
          <Boton variante="primario" onClick={() => alert('Guardado correctamente')}>
            Guardar cambios
          </Boton>
          <Boton variante="secundario" onClick={() => alert('Operación cancelada')}>
            Cancelar
          </Boton>
          <Boton variante="peligro" onClick={() => alert('Registro eliminado')}>
            Eliminar usuario
          </Boton>
          <Boton variante="exito" onClick={() => alert('Proceso completado')}>
            Confirmar
          </Boton>
          <Boton variante="primario" disabled>
            Deshabilitado
          </Boton>
        </div>

        <a
          className="mt-8 inline-block text-blue-700 underline dark:text-blue-300"
          href={import.meta.env.BASE_URL}
        >
          Volver a la página principal
        </a>
      </section>
    </main>
  )
}

export default GuiaPractica

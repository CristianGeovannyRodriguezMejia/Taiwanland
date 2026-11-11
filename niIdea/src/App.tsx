import './App.css'
import { Flex } from './components/1componente.tsx'
import { Grip } from './components/2componente.tsx'
function App() {


  return (
    <>
    <h1 className='bg-blue-600 text-white py-4 my-5 text-center text-3xl font-bold'>Mi Aplicacion con Tailwind!</h1>
    <div className='text-center'>
      <button className='bg-sky-700 px-4 py-2 rounded text-white hover:bg-sky-800'>Enviar</button>
    </div>
    <Flex />
    <Grip />
    </>
  )
}

export default App

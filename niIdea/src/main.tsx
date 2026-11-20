import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GuiaPractica from './GuiaPractica.tsx'

const currentPath = window.location.pathname.replace(/\/+$/, '')
const guiaPracticaPath = `${import.meta.env.BASE_URL}guia-practica`.replace(/\/+$/, '')
const Page = currentPath === guiaPracticaPath ? GuiaPractica : App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)

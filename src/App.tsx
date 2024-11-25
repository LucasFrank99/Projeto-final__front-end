import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Container, GlobalCss } from './styles'
import Home from './pages/home'
import Perfil from './pages/perfil'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App

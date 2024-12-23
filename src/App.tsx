import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Container, GlobalCss } from './styles'
import Home from './pages/home'
import Perfil from './pages/perfil'
import { Provider } from 'react-redux'
import { Store } from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurantes/:id',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <Provider store={Store}>
        <GlobalCss />
        <Container>
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </>
  )
}

export default App

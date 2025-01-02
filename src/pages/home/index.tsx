import { useEffect, useState } from 'react'
import Hero from '../../components/Header'

import { Rodape } from '../../components/rodape'
import { Restaurante } from '../../components/listagemPerfil'
import { RestaurantesLista } from '../../components/listagem'
import { useGetPaginaInicialQuery } from '../../services/api'

const Home = () => {
  const { data: home } = useGetPaginaInicialQuery()
  if (home) {
    return (
      <>
        <Hero />
        <RestaurantesLista restaurante={home} />
        <Rodape />
      </>
    )
  }
  return <h4> FUNCIONA PELO AMOR DE DEUS</h4>
}

export default Home

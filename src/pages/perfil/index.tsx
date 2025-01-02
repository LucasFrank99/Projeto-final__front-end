import { useEffect, useState } from 'react'
import HeroPerfil from '../../components/HeaderPerfil'
import { Rodape } from '../../components/rodape'
import { Cardapio } from '../../components/listagemPerfil'

import { useParams } from 'react-router-dom'

import { useGetFeaturedPratoQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: prato } = useGetFeaturedPratoQuery(id!)

  if (!prato) {
    return <h1>Socorro</h1>
  }
  return (
    <>
      <HeroPerfil />
      <Cardapio pratos={prato} />
      <Rodape />
    </>
  )
}

export default Perfil

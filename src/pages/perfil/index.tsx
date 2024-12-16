import { useEffect, useState } from 'react'
import HeroPerfil from '../../components/HeaderPerfil'
import { Restaurante } from '../../components/listagem'
import { Rodape } from '../../components/rodape'
import { Cardapio } from '../../components/listagemPerfil'

import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()
  const [perfil, setPerfil] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPerfil(res))
  }, [id])

  return (
    <>
      <HeroPerfil />
      {perfil && perfil.cardapio ? (
        <Cardapio prato={perfil.cardapio} />
      ) : (
        <p>Carregando...</p>
      )}
      <Rodape />
    </>
  )
}

export default Perfil

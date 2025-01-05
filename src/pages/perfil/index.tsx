import HeroPerfil from '../../components/HeaderPerfil'
import { Rodape } from '../../components/rodape'
import { Cardapio } from '../../components/listagemPerfil'

import { useParams } from 'react-router-dom'

import { useGetFeaturedPratoQuery } from '../../services/api'
import Carrinho from '../../components/Carrinho'

type IdParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as IdParams
  const { data: xuxu } = useGetFeaturedPratoQuery(id!)
  return (
    <>
      <HeroPerfil />
      <Cardapio pratos={xuxu?.cardapio || []} />
      <Rodape />
      <Carrinho></Carrinho>
    </>
  )
}

export default Perfil

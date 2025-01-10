import {
  BannerContainer,
  BannerOverlay,
  BannerRestaurante,
  BannerTextOverlay,
  BannerTitulo,
  BotaoRetorno,
  ContainerHeaderPerfil,
  LinkHome
} from './styles'

import logoimg from '../../imagens/logo.png'
import { Fundo, Logo } from '../Header/styles'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../listagemPerfil'
import { open } from '../../store/reducers/carrinho'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeroPerfil = () => {
  const { id } = useParams()
  const [banner, setBanner] = useState<Restaurante>()
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.carrinho)

  const abrirCarrinho = () => {
    dispatch(open())
  }

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setBanner(res))
  }, [id])

  return (
    <>
      <Fundo size="perfil" variant="secondary">
        <ContainerHeaderPerfil>
          <BotaoRetorno>
            <LinkHome to="/">Restaurantes</LinkHome>
          </BotaoRetorno>
          <Logo className="perfil">
            <img src={logoimg}></img>
          </Logo>
          <BotaoRetorno onClick={abrirCarrinho}>
            {items.length} produto(s) no carrinho
          </BotaoRetorno>
        </ContainerHeaderPerfil>
      </Fundo>
      <BannerContainer imagemUrl={banner?.capa || ''}>
        <BannerOverlay>
          <BannerTextOverlay>
            <BannerTitulo>{banner?.tipo}</BannerTitulo>
            <BannerRestaurante>{banner?.titulo}</BannerRestaurante>
          </BannerTextOverlay>
        </BannerOverlay>
      </BannerContainer>
    </>
  )
}

export default HeroPerfil

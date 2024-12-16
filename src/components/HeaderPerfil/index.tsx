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
import { Restaurante } from '../listagem'
import { useParams } from 'react-router-dom'

const HeroPerfil = () => {
  const { id } = useParams()
  const [banner, setBanner] = useState<Restaurante>()

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
          <BotaoRetorno>N produto(s) no carrinho</BotaoRetorno>
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

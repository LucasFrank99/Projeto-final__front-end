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

const HeroPerfil = () => (
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
    <BannerContainer>
      <BannerOverlay>
        <BannerTextOverlay>
          <BannerTitulo>Italiana</BannerTitulo>
          <BannerRestaurante>La Dolce Vita Trattoria</BannerRestaurante>
        </BannerTextOverlay>
      </BannerOverlay>
    </BannerContainer>
  </>
)

export default HeroPerfil

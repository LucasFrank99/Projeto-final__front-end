import logoimg from '../../imagens/logo.png'
import facebook from '../../imagens/facebook.png'
import instagram from '../../imagens/instagram.png'
import twitter from '../../imagens/twitter.png'
import { Logo } from '../Header/styles'
import {
  FooterContainer,
  Icones,
  IconesContainer,
  ParagrafoFooter
} from './styles'

export const Rodape = () => (
  <>
    <FooterContainer>
      <Logo>
        <img src={logoimg}></img>
      </Logo>
      <IconesContainer>
        <Icones>
          <img src={instagram}></img>
        </Icones>
        <Icones>
          <img src={facebook}></img>
        </Icones>
        <Icones>
          <img src={twitter}></img>
        </Icones>
      </IconesContainer>
      <ParagrafoFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </ParagrafoFooter>
    </FooterContainer>
  </>
)

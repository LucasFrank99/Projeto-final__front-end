import { Fundo, Logo, ParagrafoHero } from './styles'

import logoimg from '../../imagens/logo.png'

const Hero = () => (
  <>
    <Fundo size="home" variant="secondary">
      <Logo>
        <img src={logoimg}></img>
      </Logo>
      <ParagrafoHero>
        Viva experiências gastronômicas no conforto da sua casa
      </ParagrafoHero>
    </Fundo>
  </>
)

export default Hero

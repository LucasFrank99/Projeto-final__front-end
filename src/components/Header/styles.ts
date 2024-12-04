import styled from 'styled-components'

import fundoIMG from '../../imagens/capa.png'
import { cores } from '../../styles'

interface props {
  variant: string
  size: string
}

export const Fundo = styled.div<props>`
  width: ${(props) => {
    if (props.size === 'home') return '100%'
    if (props.size === 'perfil') return '100%'
    return '100%'
  }};

  height: ${(props) => {
    if (props.size === 'home') return '384px'
    if (props.size === 'perfil') return '186px'
    return '280px'
  }};
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  background-image: url(${fundoIMG});
`

export const Logo = styled.div`
  margin: 0 auto;
  width: 125px;
  display: block;
  padding-top: 40px;

  &.perfil {
    padding-top: 0px;
  }
`

export const ParagrafoHero = styled.p`
  position: relative;
  line-height: 42px;
  max-width: 570px;
  font-size: 36px;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  color: ${cores.vermelho};
`

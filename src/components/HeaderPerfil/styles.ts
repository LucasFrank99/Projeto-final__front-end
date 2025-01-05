import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const BotaoRetorno = styled.a`
  font-size: 18px;
  color: ${cores.vermelho};
  cursor: pointer;
`

export const LinkHome = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelho};
`
export const ContainerHeaderPerfil = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1092px;
  height: 186px;
  margin: 0 auto;
  margin-left: 740px;
`

export const BannerContainer = styled.div<{ imagemUrl: string }>`
  background-image: url(${(props) => props.imagemUrl});
  width: 100%;
  height: 480px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`
export const BannerOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

export const BannerTextOverlay = styled.div`
  position: absolute;
  color: ${cores.brancoTotal};
  margin-top: 30px;
  margin-left: 740px;
  z-index: 2;
`

export const BannerTitulo = styled.h2`
  font-weight: 100;
  font-size: 32px;
  margin-bottom: 340px;
`
export const BannerRestaurante = styled.h1`
  font-weight: bold;
  font-size: 32px;
`

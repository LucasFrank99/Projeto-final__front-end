import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const BotaoRetorno = styled.a`
  font-size: 18px;
  color: ${cores.vermelho};
`

export const LinkHome = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelho};
`
export const ContainerHeaderPerfil = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 2032px;
  height: 186px;
  margin: 0 auto;
`

export const BannerHeader = styled.div`
  width: 2000px;
  display: flex;
`

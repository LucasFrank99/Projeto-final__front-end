import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.creme};
  width: 100%;
  height: 298px;
  display: block;
  align-items: center;
  text-align: center;
`

export const ParagrafoFooter = styled.p`
  display: flex;
  color: ${cores.vermelho};
  font-size: 10px;
  justify-content: center;
  margin: 0px auto;
  padding-top: 50px;
  max-width: 480px;
  text-align: center;
`
export const IconesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin: 0px auto;
  gap: 8px;
`
export const Icones = styled.div`
  width: 24px;
  height: 24px;
`

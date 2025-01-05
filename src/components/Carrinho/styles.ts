import styled from 'styled-components'
import { cores } from '../../styles'

export const CarrinhoOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
`
export const BarraLateralContainer = styled.div`
  display: none;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const BarraLateral = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  width: 100%;
  max-width: 614px;
  padding: 32px 12px;
`

export const ItemCarrinho = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 160px;
  background-color: ${cores.creme};
  margin-bottom: 30px;
  position: relative;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    display: flex;
    margin: 20px 15px;
  }
`
export const ConteudoCarrinho = styled.div`
  margin-top: 20px;
  color: ${cores.vermelho};

  h1 {
    margin-bottom: 36px;
    font-weight: bold;
  }
`

export const BotaoExcluirItem = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 40px;
  width: 40px;
  object-fit: cover;
  overflow: hidden;
  border: none;
  background-color: ${cores.creme};
  cursor: pointer;
`
export const ValorTotal = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  color: ${cores.creme};
  margin-top: 60px;
`
export const BotaoPagamento = styled.button`
  background-color: ${cores.creme};
  color: ${cores.vermelho};
  width: 100%;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
`

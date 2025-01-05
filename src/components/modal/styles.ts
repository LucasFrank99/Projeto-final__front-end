import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  justify-content: center;
  align-items: center;
`

export const CardModal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  width: 100%;
  max-width: 1024px;
  height: 344px;
  background-color: ${cores.vermelho};
`

export const ConteudoModal = styled.div`
  font-family: roboto, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  margin-right: 40px;

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.brancoTotal};
    justify-content: center;
    margin-bottom: 10px;
  }

  p {
    color: ${cores.brancoTotal};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 10px;
  }
`

export const ImgModal = styled.img`
  width: 280px;
  height: 280px;
  margin-top: 32px;
  margin-left: 22px;
`

export const BotaoAdcCarrinho = styled.button`
  background-color: ${cores.creme};
  color: ${cores.vermelho};
  font-size: 14px;
  justify-content: center;
  width: 224px;
  height: 28px;
  border: none;
  margin-bottom: 40px;
  cursor: pointer;
  font-weight: bold;
`
export const BotaoFecharModal = styled.button`
  display: flex;
  width: 10px;
  height: 20px;
  border: none;
  background-color: ${cores.vermelho};
  color: ${cores.brancoTotal};
  font-size: 18px;
  margin-top: 5px;
  margin-right: 10px;
  cursor: pointer;
`

import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ListaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding-left: 46px;
  max-width: 1200px;
  margin: 100px auto;
  justify-content: space-between;

  &.perfil {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 1024px;
    heigth: 708px;
    justify-content: center;
  }
`

export const Card = styled.div`
  width: 472px;
  heigth: 400px;
  background-color: ${cores.branco};
  overflow: hidden;
  margin: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

export const CardPerfil = styled.div`
  width: 320px;
  heigth: 338px;
  background-color: ${cores.vermelho};
  overflow: hidden;
  margin: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

export const TagS = styled.div`
  position: absolute;
  top:12px;
  left: 240px;

  .italiana {
    margin-left:160px;
`

export const Tag = styled.span`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 1px;
  margin-left: 8px;
`

export const ContainerDescriçao = styled.div`
  background-color: ${cores.brancoTotal};
  border-top: none;
  border-bottom: 1px solid ${cores.vermelho};
  border-right: 1px solid ${cores.vermelho};
  border-left: 1px solid ${cores.vermelho};
  width: 472px;
  heigth: 180px;
  padding: 8px;

  &.perfil {
    background-color: ${cores.vermelho};
    border-top: 3px solid ${cores.vermelho};
    border-bottom: 3px solid ${cores.vermelho};
    border-right: 3px solid ${cores.vermelho};
    border-left: 3px solid ${cores.vermelho};
    width: 320px;
    heigth: 338px;
  }
`

export const ContainerTituloNota = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.h1`
  font-size: 18px;
  color: ${cores.vermelho};
  margin-top: 10px;

  &.perfil {
    color: ${cores.creme};
  }
`

export const Nota = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.vermelho};
  align-items: center;

  .estrela {
    font-size: 21px;
    height: 20px;
  }
`

export const TextoDescricao = styled.p`
  font-size: 14px;
  color: ${cores.vermelho};
  line-height: 22px;
  padding-bottom: 22px;
  padding-top: 22px;

  &.perfil {
    color: ${cores.creme};
  }
`

export const Botao = styled.a`
  align-items: center;
  background-color: ${cores.vermelho};
  padding: 3px;
  cursor: pointer;
  border: none;

  &.perfil {
    background-color: ${cores.creme};
    padding: 5px 83px;
  }
`
export const LinkPerfil = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  color: ${cores.branco};

  &.perfil {
    color: ${cores.vermelho};
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
export const ContainerImagem = styled.div`
  position: relative;
  width: 100%;

  .pizza {
    width: 304px;
    height: 167px;
    margin: 8px;
    align-items: center;
  }
`

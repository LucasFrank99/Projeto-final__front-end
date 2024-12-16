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
  justify-content: center;

  &.perfil {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 1024px;

    justify-content: center;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 472px;
  background-color: ${cores.branco};
  margin: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

export const CardPerfil = styled.div`
  width: 320px;
  background-color: ${cores.vermelho};
  overflow: hidden;
  margin: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

export const TagDestaque = styled.span<{ destacado: boolean }>`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 1px;
  position: absolute;
  left: 1065px;
  margin-top: 8px;
`
export const Tag = styled.span`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 1px;
  position: absolute;
  display: flex;
  margin-left: 410px;
  margin-top: 8px;

  &[id='tag-2'] {
    margin-left: 420px;
  }

  &[id='tag-3'] {
    margin-left: 405px;
  }

  &[id='tag-4'] {
    margin-left: 395px;
  }

  &[id='tag-5'] {
    margin-left: 407px;
  }
`

export const ContainerDescriçao = styled.div`
  background-color: ${cores.brancoTotal};
  border-top: none;
  border-bottom: 1px solid ${cores.vermelho};
  border-right: 1px solid ${cores.vermelho};
  border-left: 1px solid ${cores.vermelho};
  width: 472px;
  height: 100%;
  padding: 8px;

  &.perfil {
    background-color: ${cores.vermelho};
    border-top: 3px solid ${cores.vermelho};
    border-bottom: 3px solid ${cores.vermelho};
    border-right: 3px solid ${cores.vermelho};
    border-left: 3px solid ${cores.vermelho};
    width: 320px;
    height: 100%;
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
  margin-top: 8px;

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
  padding: 4px;
  cursor: pointer;
  border: none;

  &.perfil {
    background-color: ${cores.creme};
    justify-content: center;
    padding: 5px 81px;
    display: flex;
    text-decoration: none;
    color: inherit;
    font-size: 14px;
    color: ${cores.vermelho};
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
  height: 400px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const ContainerImagem = styled.div``

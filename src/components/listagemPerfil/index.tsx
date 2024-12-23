import {
  Botao,
  ContainerImagem,
  ContainerTituloNota,
  ContainerDescriçao,
  Imagem,
  ListaContainer,
  TextoDescricao,
  Titulo,
  CardPerfil
} from '../listagem/styles'

import { useState } from 'react'
import {
  ModalOverlay,
  CardModal,
  ImgModal,
  ConteudoModal,
  BotaoAdcCarrinho,
  BotaoFecharModal
} from '../modal/styles'

export type PropsCardapio = {
  pratos: Prato[]
}

export type Props = {
  restaurante: Restaurante[]
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
  prato: Prato[]
}

export type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export const Cardapio = ({ pratos }: PropsCardapio) => {
  const [abrirModal, setAbrirModal] = useState(false)
  const [escolhePrato, setEscolhePrato] = useState<Prato | null>(null)

  const abreModal = (prato: Prato) => {
    setEscolhePrato(prato)
    setAbrirModal(true)
  }

  const fechaModal = () => {
    setAbrirModal(false)
    setEscolhePrato(null)
  }

  return (
    <>
      <ListaContainer className="perfil">
        {pratos.map((prato) => (
          <CardPerfil key={prato.id}>
            <ContainerImagem>
              <Imagem>
                <img src={prato.foto} alt={prato.nome} />
              </Imagem>
            </ContainerImagem>

            <ContainerDescriçao className="perfil">
              <ContainerTituloNota>
                <Titulo className="perfil">{prato.nome}</Titulo>
              </ContainerTituloNota>

              <TextoDescricao className="perfil">
                {prato.descricao}
              </TextoDescricao>

              <Botao className="perfil" onClick={() => abreModal(prato)}>
                Adicionar ao carrinho R${prato.preco}0
              </Botao>
            </ContainerDescriçao>
          </CardPerfil>
        ))}
      </ListaContainer>

      {abrirModal && escolhePrato && (
        <ModalOverlay>
          <CardModal>
            <ImgModal
              src={escolhePrato.foto}
              alt={escolhePrato.nome}
            ></ImgModal>
            <ConteudoModal>
              <h2>{escolhePrato.nome}</h2>
              <p>{escolhePrato.descricao}</p>

              <BotaoAdcCarrinho>
                Adicionar ao carrinho - R$ {escolhePrato.preco}0
              </BotaoAdcCarrinho>
            </ConteudoModal>
            <BotaoFecharModal onClick={fechaModal}>X</BotaoFecharModal>
          </CardModal>
        </ModalOverlay>
      )}
    </>
  )
}

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

export type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type CardapioProps = {
  prato: Prato[]
}

export const Cardapio = ({ prato }: CardapioProps) => {
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
        {prato.map((info) => (
          <CardPerfil key={info.id}>
            <ContainerImagem>
              <Imagem>
                <img src={info.foto} alt={info.nome} />
              </Imagem>
            </ContainerImagem>

            <ContainerDescriçao className="perfil">
              <ContainerTituloNota>
                <Titulo className="perfil">{info.nome}</Titulo>
              </ContainerTituloNota>

              <TextoDescricao className="perfil">
                {info.descricao}
              </TextoDescricao>

              <Botao className="perfil" onClick={() => abreModal(info)}>
                Adicionar ao carrinho R${info.preco}0
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

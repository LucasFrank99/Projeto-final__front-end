import {
  BotaoAdcCarrinho,
  BotaoFecharModal,
  CardModal,
  ConteudoModal,
  ImgModal,
  ModalOverlay
} from './styles'
import pizzaIMG from '../../imagens/pizza.png'
import { Prato } from '../listagemPerfil'

interface ModalProps {
  prato: Prato
  fechaModal: () => void
}

export const Modal = ({ prato, fechaModal }: ModalProps) => {
  return (
    <ModalOverlay>
      <CardModal>
        <ImgModal src={pizzaIMG} alt="pizza"></ImgModal>
        <ConteudoModal>
          <h2>{prato.titulo}</h2>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <br />
            <br />
            Serve: de 2 a 3 pessoas
          </p>
          <BotaoAdcCarrinho>Adicionar ao Carrinho - R$ 60,90</BotaoAdcCarrinho>
        </ConteudoModal>
        <BotaoFecharModal onClick={fechaModal}>X</BotaoFecharModal>
      </CardModal>
    </ModalOverlay>
  )
}

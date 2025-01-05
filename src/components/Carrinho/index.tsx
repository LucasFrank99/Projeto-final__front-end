import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { FiTrash } from 'react-icons/fi'
import {
  BarraLateral,
  BarraLateralContainer,
  ItemCarrinho,
  CarrinhoOverlay,
  ConteudoCarrinho,
  BotaoExcluirItem,
  ValorTotal,
  BotaoPagamento
} from './styles'

import { close, remove } from '../../store/reducers/carrinho'
import { cores } from '../../styles'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.carrinho)

  const dispatch = useDispatch()

  const fecharCarrinho = () => {
    dispatch(close())
  }

  const getValorTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <BarraLateralContainer className={isOpen ? 'is-open' : ''}>
      <CarrinhoOverlay onClick={fecharCarrinho} />
      <BarraLateral>
        <ul>
          {items.map((item) => (
            <ItemCarrinho key={item.id}>
              <img src={item.foto}></img>
              <ConteudoCarrinho>
                <h1>{item.nome}</h1>
                <span>R$ {item.preco}0</span>
              </ConteudoCarrinho>
              <BotaoExcluirItem onClick={() => removeItem(item.id!)}>
                <FiTrash size={30} color={cores.vermelho}></FiTrash>
              </BotaoExcluirItem>
            </ItemCarrinho>
          ))}
        </ul>
        <ValorTotal>
          <p>Valor Total</p>
          <p>R$ {getValorTotal()}0</p>
        </ValorTotal>
        <BotaoPagamento>Continuar com a entrega</BotaoPagamento>
      </BarraLateral>
    </BarraLateralContainer>
  )
}

export default Carrinho

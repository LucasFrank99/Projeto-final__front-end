import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../components/listagemPerfil'

type CarrinhoState = {
  items: Prato[]
  isOpen: boolean
}

const initialState: CarrinhoState = {
  items: [],
  isOpen: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.items.push(action.payload)
        alert('Pedido adicionado ao carrinho!')
      } else {
        state.items.push(action.payload)
        alert('Porção adicional incluida no pedido!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = carrinhoSlice.actions
export default carrinhoSlice.reducer

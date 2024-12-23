import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../components/listagemPerfil'

type CarrinhoState = {
  items: Prato[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = carrinhoSlice.actions
export default carrinhoSlice.reducer

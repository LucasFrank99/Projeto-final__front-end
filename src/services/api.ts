import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../components/listagemPerfil'

export type Products = {
  id: number
  price: number
}

export type Pagamentos = {
  products: Products[]
  billing: {
    document: string
    email: string
    name: string
  }
  delivery: {
    email: string
  }
  payment: {
    installments: string
    card: {
      active: true
      code: number
      name: string
      number: string
      owner: {
        document: string
        name: string
      }
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getPaginaInicial: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getFeaturedPrato: builder.query<Restaurante, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation<any, Pagamentos>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedPratoQuery,
  useGetPaginaInicialQuery,
  usePurchaseMutation
} = api

export default api

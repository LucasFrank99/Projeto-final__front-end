import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../components/listagemPerfil'

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
    })
  })
})

export const { useGetFeaturedPratoQuery, useGetPaginaInicialQuery } = api

export default api

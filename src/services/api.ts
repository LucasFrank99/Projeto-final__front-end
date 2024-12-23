import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Prato, Restaurante } from '../components/listagemPerfil'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes/'
  }),
  endpoints: (builder) => ({
    getFeaturedPrato: builder.query<Prato[], string>({
      query: (id) => `/${id}/`
    })
  })
})

export const { useGetFeaturedPratoQuery } = api

export default api

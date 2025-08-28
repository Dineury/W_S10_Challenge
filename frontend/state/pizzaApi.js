import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi', 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/pizza/' }),
  endpoints: (builder) => ({
    getHistoryOfOrders: builder.query({
      query: () =>  'history'
    }),
    changeName:  builder.mutation({
      query: (name) => ({
        url: `order`,
        method: 'POST',
        body:  name
      })
   
    }),
  }),
})


export const { 
  useGetHistoryOfOrdersQuery,
  useChangeNameMutation
   } = pizzaApi
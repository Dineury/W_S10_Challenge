import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi', 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/pizza/' }),
  tagTypes: [ 'Pizza' ],
  endpoints: (builder) => ({
    getHistoryOfOrders: builder.query({
      query: () =>  'history',
      providesTags: ['Pizza']
    }),
    orderPizza:  builder.mutation({
      query: (name) => ({
        url: `order`,
        method: 'POST',
        body:  name
      }),
      invalidatesTags: ['Pizza']
    }),
    
  }),
})


export const { 
  useGetHistoryOfOrdersQuery,
  useOrderPizzaMutation
   } = pizzaApi
import { configureStore } from '@reduxjs/toolkit'
import { pizzaApi } from './pizzaApi'
import { pizzaReducer } from  './pizzaSateRedu'

export const resetStore = () => configureStore({
  reducer: {
    pizzaState: pizzaReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer
    // add your reducer(s) here
  },
  middleware: getDefault => getDefault().concat(
    // if using RTK Query for your networking: add your middleware here
    pizzaApi.middleware
    // if using Redux Thunk for your networking: you can ignore this
  ),
})

export const store = resetStore()

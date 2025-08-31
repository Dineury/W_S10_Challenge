import React, { useReducer } from 'react'
import {  } from '../state/pizzaApi'
import { pizzaReducer, CHANGE_INPUT, CHANGE_SIZE, SELECT_TOPPING } from '../state/pizzaSateRedu'
import { useOrderPizzaMutation } from '../state/pizzaApi'

const initialFormState = { // suggested
  fullName: '',
  size: '',
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
  toppings: []
}



export default function PizzaForm() {
  const [ state, dispatch ] = useReducer(pizzaReducer, initialFormState)
 const [CreatePizza, { error:pizzaError, isLoading:pizzaLoading }] = useOrderPizzaMutation()
  const nameHandlerChange = ({target: { name, value }}) => {
    dispatch({type: CHANGE_INPUT, payload: {name, value}})
  }
const sizeHandler = ({target: { name: size, value }}) => {
  dispatch({type: CHANGE_SIZE, payload: {size, value}})
}
const toppingHandler = ({target: { name: topping, value }}) => {
  dispatch({type: SELECT_TOPPING, payload: {topping, value}})
}
  
  const orderPizza = (evt) => {
    evt.preventDefault()
    const { fullName, size, toppings } = state
   CreatePizza({ fullName, size, toppings })
  }
  
  
  return (
    <form>
      <h2>Pizza Form</h2>
      {pizzaLoading && <div className='pending'>Order in progress...</div>}
      {pizzaError && <div className='failure'>Order failed: {pizzaError.data.message}</div>}
      

      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label><br />
          <input
            data-testid="fullNameInput"
            id="fullName"
            name="fullName"
            placeholder="Type full name"
            type="text"
            onChange={nameHandlerChange}
            value={state.fullName}
            />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label><br />
          <select data-testid="sizeSelect" id="size" name="size" onChange={sizeHandler}>
            <option value="">----Choose size----</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>
          <input data-testid="checkPepperoni" name="1" type="checkbox" onClick={toppingHandler}/>
          Pepperoni<br /></label>
        <label>
          <input data-testid="checkGreenpeppers" name="2" type="checkbox" onClick={toppingHandler}/>
          Green Peppers<br /></label>
        <label>
          <input data-testid="checkPineapple" name="3" type="checkbox" onClick={toppingHandler}/>
          Pineapple<br /></label>
        <label>
          <input data-testid="checkMushrooms" name="4" type="checkbox" onClick={toppingHandler}/>
          Mushrooms<br /></label>
        <label>
          <input data-testid="checkHam" name="5" type="checkbox" onClick={toppingHandler}/>
          Ham<br /></label>
      </div>
      <input data-testid="submit" type="submit" onClick={orderPizza}/>
    </form>
  )
}



export const CHANGE_INPUT = 'CHANGE_INPUT'
export const CHANGE_SIZE = 'CHANGE_SIZE'
export const SELECT_TOPPING = 'SELECT_TOPPING'
export const RESET_fORM = 'RESET_FORM'


export const pizzaReducer = (state= {
  fullName: '',
  size: '',
 toppings: []
 }, action) => {
 switch(action.type) {
    case CHANGE_INPUT: {
        const { name, value } = action.payload
        return { ...state,  [name]: value}
    }
    case CHANGE_SIZE: {
        const { size, value } = action.payload
        return { ...state, [size]: value }
    }
    case SELECT_TOPPING: {
        const {topping} = action.payload
        const isSelected = state.toppings.includes(topping)

     return { ...state, toppings:
        isSelected ? state.toppings.filter(item => item !== topping)
       : [...state.toppings, topping]}
            
    } 
    case RESET_fORM: {
        
        return { fullName: '', size: '', toppings: []   }
    }

    default: return state
   
 }
}


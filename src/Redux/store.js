import { createStore } from 'redux'

const initialState = {
  products: [],
  backpack: []
}

function reducer(state = initialState, action){
  let products = state.products
  let backpack = state.backpack
  switch(action.type){
    case 'SET_PRODUCTS':
        return {...state, products: action.products}
    case 'DEL_ITEM_INVENTORY':
        products.splice(action.key, 1)
        return {...state, products: products}
    case 'ADD_ITEM_SELECTED':
      return {...state, backpack: [...state.backpack, action.item]}
    case 'ADD_ITEM_INVENTORY':
      return {...state, products: [...state.products, action.item]}
    case 'DEL_ITEM_SELECTED':
      backpack.splice(action.key, 1)
      return {...state, backpack: backpack}
    default: 
    return state
  }
}

export default createStore(reducer)
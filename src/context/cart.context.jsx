import { createContext } from "react";
import { useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {

  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
      { ...cartItem, quantity: cartItem.quantity + 1 } :
      cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems = [], cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

}


export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => { },
  RemoveItemFromCart: () => { },
  decreaseCartItemQuantity: () => { },
  cartCount: 0,
  cartTotal: 0
})

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0

}

export const CART_ACTION_TYPES = {
  'SET_CART_ITEMS': 'SET_CART_ITEMS',

}

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }

}

export const CartProvider = ({ children }) => {

  const [{ cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);

    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartTotal: newCartTotal,
        cartCount: newCartCount,
        cartItems: newCartItems
      })
    );
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  }

  const RemoveItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  }

  const decreaseCartItemQuantity = (cartItemToDecrease) => {
    if (cartItemToDecrease.quantity <= 1) return;
    const newCartItems = cartItems.map(cartItem => cartItem.id === cartItemToDecrease.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
    updateCartItemsReducer(newCartItems);
  }



  const value = { cartItems, addItemToCart, RemoveItemFromCart, decreaseCartItemQuantity, cartCount, cartTotal };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )

}
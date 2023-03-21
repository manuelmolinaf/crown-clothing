import { createContext } from "react";
import { useState, useEffect } from "react";

const addCartItem = ( cartItems, productToAdd) => {

  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if(existingCartItem){
    return cartItems.map( cartItem => cartItem.id === productToAdd.id ? 
      {...cartItem, quantity: cartItem.quantity + 1} : 
      cartItem
      );
  }

  return [...cartItems, {...productToAdd, quantity:1}]
}

const removeCartItem = (cartItems = [], cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

}


export const CartContext = createContext({
  cartItems: [],
  addItemToCart:() =>{},
  RemoveItemFromCart:() =>{},
  decreaseCartItemQuantity: () =>{},
  increaseCartItemQuantity: () =>{},
  cartCount:0
})

export const CartProvider = ({children}) => {

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);


  const addItemToCart = (productToAdd) =>{
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const RemoveItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }

  const decreaseCartItemQuantity = (cartItemToDecrease) => {
    if(cartItemToDecrease.quantity <= 1) return;
    setCartItems(cartItems.map( cartItem => cartItem.id === cartItemToDecrease.id ?  
      {...cartItem, quantity: cartItem.quantity-1} : cartItem))
  }

  const increaseCartItemQuantity = (cartItemToIncrease) => {
    
    setCartItems(cartItems.map( cartItem => cartItem.id === cartItemToIncrease.id ?  
      {...cartItem, quantity: cartItem.quantity+1} : cartItem))
  }

  useEffect(()=>{
    const newCartCount = cartItems.reduce((quantity, cartItem) =>  quantity + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  

  const value = {cartItems, addItemToCart, RemoveItemFromCart, decreaseCartItemQuantity, increaseCartItemQuantity, cartCount};

  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )

}
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useSessionStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext();

const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useSessionStorage("shopping-cart", []);

  const cartQuantity =
    cartItems?.reduce((quantity, item) => quantity + item.quantity, 0) || 0;

  const getProductQuantity = (id) => {
    return cartItems.find((item) => item._id === id)?.quantity || 0;
  };

  const increaseProductQuantity = (item) => {
    setCartItems((currentCarts) => {
      if (currentCarts.find((cartItem) => cartItem._id === item._id) == null) {
        return [...currentCarts, { ...item, quantity: 1 }];
      } else {
        return currentCarts.map((cartItem) => {
          if (cartItem._id === item._id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        });
      }
    });
  };

  const decreaseProductQuantity = (id) => {
    setCartItems((currentCarts) => {
      if (currentCarts.find((cartItem) => cartItem._id === id)?.quantity == 1) {
        return currentCarts.filter((cartItem) => cartItem._id !== id);
      } else {
        return currentCarts.map((cartItem) => {
          console.log();
          if (cartItem._id === id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currentCarts) => {
      return currentCarts.filter((item) => item._id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getProductQuantity,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { useShoppingCartContext, ShoppingCartProvider };

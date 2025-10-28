import { createContext, useContext, useState } from "react";

export const CoffeeContext = createContext({});

export function CoffeeContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addCoffeeToCart(coffee) {
    const existItemToCart = cart.find((item) => item.id === coffee.id);

    if (existItemToCart) {
      const updateCart = cart.map((item) => {
        if (item.id === coffee.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCart(updateCart);
    } else {
      const newItem = {
        ...coffee,
        quantity: 1,
      };
      setCart([...cart, newItem]);
    }
  }

  // A CORREÇÃO ESTÁ AQUI: O nome da função foi padronizado
  function removeCoffeeFromCart(coffee) {
    const existItemToCart = cart.find((item) => item.id === coffee.id);

    if (!existItemToCart) {
      return;
    }

    if (existItemToCart.quantity === 1) {
      const updateCart = cart.filter((item) => item.id !== coffee.id);
      setCart(updateCart);
    } else {
      const updateCart = cart.map((item) => {
        if (item.id === coffee.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      setCart(updateCart);
    }
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const quantityItemsCart = cart.length;

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        total,
        quantityItemsCart,
        addCoffeeToCart,
        removeCoffeeFromCart, // Agora o nome aqui bate com a declaração da função
        clearCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}

export function useCoffee() {
  return useContext(CoffeeContext);
}


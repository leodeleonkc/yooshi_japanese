import { useState, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItems = (dinner, iSize) => {
    const exist = cart.find((x) => x.id === dinner.id && x.size === iSize);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === dinner.id && x.size === iSize
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCart([...cart, { ...dinner, qty: 1, size: iSize }]);
    }
  };

  const removeItems = (dinner, iSize) => {
    const exist = cart.find((x) => x.id === dinner.id && x.size === iSize);
    let index = cart.indexOf(exist);
    if (exist.qty === 1) {
      setCart(
        cart.filter((x) => {
          return cart.indexOf(x) !== index;
        })
      );
    } else {
      setCart(
        cart.map((x) =>
          x.id === dinner.id && x.size === iSize
            ? { ...exist, qty: exist.qty - 1 }
            : x
        )
      );
    }
  };

  return (
    <Context.Provider
      value={{
        addItems,
        removeItems,
        cart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

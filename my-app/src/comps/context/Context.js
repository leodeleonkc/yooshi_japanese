import { useState, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [viewCart, setViewCart] = useState(false);
  const [howManyItems, setHowManyItems] = useState(0);

  const addItems = (dinner, iSize) => {
    const exist = cartItems.find((x) => x.id === dinner.id && x.size === iSize);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === dinner.id && x.size === iSize
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...dinner, qty: 1, size: iSize }]);
    }
  };

  const removeItems = (dinner, iSize) => {
    const exist = cartItems.find((x) => x.id === dinner.id && x.size === iSize);
    let index = cartItems.indexOf(exist);
    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((x) => {
          return cartItems.indexOf(x) !== index;
        })
      );
    } else {
      setCartItems(
        cartItems.map((x) =>
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
        cartItems,
        setCartItems,
        viewCart,
        setViewCart,
        howManyItems,
        setHowManyItems,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

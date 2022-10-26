import { useState, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [smallItems, setSmallItems] = useState([]);
  const [mediumItems, setMediumItems] = useState([]);
  const [largeItems, setLargeItems] = useState([]);

  const addSmall = (dinner) => {
    const exists = smallItems.find((x) => x.id === dinner.id);
    if (exists) {
      setSmallItems(
        smallItems.map((x) =>
          x.id === dinner.id ? { ...exists, qty: exists.qty + 1 } : x
        )
      );
    } else {
      setSmallItems([...smallItems, { ...dinner, qty: 1, size: "small" }]);
    }
  };
  const removeSmall = (dinner) => {
    const exists = smallItems.find((x) => x.id === dinner.id);
    if (exists.qty === 1) {
      setSmallItems(smallItems.filter((x) => x.id !== dinner.id));
    } else {
      setSmallItems(
        smallItems.map((x) =>
          x.id === dinner.id ? { ...exists, qty: exists.qty - 1 } : x
        )
      );
    }
  };

  const addMed = (dinner) => {
    const exists = mediumItems.find((x) => x.id === dinner.id);
    if (exists) {
      setMediumItems(
        mediumItems.map((x) =>
          x.id === dinner.id ? { ...exists, qty: exists.qty + 1 } : x
        )
      );
    } else {
      setMediumItems([...mediumItems, { ...dinner, qty: 1, size: "medium" }]);
    }
  };
  const removeMed = (dinner, iSize) => {
    const exists = mediumItems.find((x) => x.id === dinner.id);
    if (exists.qty === 1) {
      setMediumItems(mediumItems.filter((x) => x.id !== dinner.id));
    } else {
      setMediumItems(
        mediumItems.map((x) =>
          x.id === dinner.id ? { ...exists, qty: exists.qty - 1 } : x
        )
      );
    }
  };

  const addLrg = (dinner) => {
    const exists = largeItems.find(
      (x) => x.large === dinner.large && x.id === dinner.id
    );
    if (exists) {
      setLargeItems(
        largeItems.map((x) =>
          x.large === dinner.large && x.id === dinner.id
            ? { ...exists, qty: exists.qty + 1 }
            : x
        )
      );
    } else {
      setLargeItems([...largeItems, { ...dinner, qty: 1, size: "large" }]);
    }
  };
  const removeLrg = (dinner, iSize) => {
    const exists = largeItems.find(
      (x) => x.large === dinner.large && x.id === dinner.id
    );
    if (exists.qty === 1) {
      setLargeItems(largeItems.filter((x) => x.large !== dinner.large));
    } else {
      setLargeItems(
        largeItems.map((x) =>
          x.large === dinner.large && x.id === dinner.id
            ? { ...exists, qty: exists.qty - 1 }
            : x
        )
      );
    }
  };

  return (
    <Context.Provider
      value={{
        addSmall,
        removeSmall,
        addMed,
        removeMed,
        addLrg,
        removeLrg,
        smallItems,
        mediumItems,
        largeItems,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

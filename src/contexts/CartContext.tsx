// Version 6 CODE 


// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// interface CartItem {
//   id: number;
//   name: string;
//   size: string;
//   duration: string;
//   deliveryDate: Date | null;
//   returnDate: Date | null;
//   quantity: number;
//   price: number;
// }

// interface CartContextProps {
//   cartState: CartState;
//   addToCart: (item: CartItem) => void;
//   removeItem: (id: number) => void;
//   clearCart: () => void;
// }

// interface CartState {
//   items: CartItem[];
// }

// const CartContext = createContext<CartContextProps | undefined>(undefined);

// const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartState, setCartState] = useState<CartState>(() => {
//     const savedCartState = localStorage.getItem('cartState');
//     return savedCartState ? JSON.parse(savedCartState) : { items: [] };
//   });

//   useEffect(() => {
//     localStorage.setItem('cartState', JSON.stringify(cartState));
//   }, [cartState]);

//   const addToCart = (item: CartItem) => {
//     setCartState((prev) => ({
//       items: [...prev.items, item],
//     }));
//   };

//   const removeItem = (id: number) => {
//     setCartState((prev) => ({
//       items: prev.items.filter((item) => item.id !== id),
//     }));
//   };

//   const clearCart = () => {
//     setCartState({ items: [] });
//     localStorage.removeItem('cartState');
//   };

//   return (
//     <CartContext.Provider value={{ cartState, addToCart, removeItem, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the CartContext
// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export { CartProvider, useCart };


//Version 7 Code - New Code logic


import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  size: string;
  duration: string;
  deliveryDate: Date | null;
  returnDate: Date | null;
  quantity: number;
  price: number;
  imageURL: string;
}

interface CartContextProps {
  cartState: CartState;
  addToCart: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

interface CartState {
  items: CartItem[];
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartState, setCartState] = useState<CartState>(() => {
    const savedCartState = localStorage.getItem('cartState');
    return savedCartState ? JSON.parse(savedCartState) : { items: [] };
  });

  useEffect(() => {
    localStorage.setItem('cartState', JSON.stringify(cartState));
  }, [cartState]);

  const addToCart = (item: CartItem) => {
    setCartState((prev) => ({
      items: [...prev.items, item],
    }));
  };

  const removeItem = (id: number) => {
    setCartState((prev) => ({
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const clearCart = () => {
    setCartState({ items: [] });
    localStorage.removeItem('cartState');
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };

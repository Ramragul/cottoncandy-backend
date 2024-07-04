// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface Product {
//   id: number;
//   ProductName: string;
//   ProductImageURL: string;
//   ProductPrice: number;
//   description: string;
// }

// interface CartItem extends Product {
//   selectedSize: string;
//   selectedDuration: string;
//   deliveryDate: Date | null;
//   returnDate: Date | null;
//   quantity: number;
//   deposit: number;
// }

// interface CartContextProps {
//   cartItems: CartItem[];
//   addToCart: (product: Product, selectedSize: string, selectedDuration: string, deliveryDate: Date | null, returnDate: Date | null) => void;
// }

// const CartContext = createContext<CartContextProps | undefined>(undefined);

// export const useCart = (): CartContextProps => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (product: Product, selectedSize: string, selectedDuration: string, deliveryDate: Date | null, returnDate: Date | null) => {
//     const newCartItem: CartItem = {
//       ...product,
//       selectedSize,
//       selectedDuration,
//       deliveryDate,
//       returnDate,
//       quantity: 1,
//       deposit: 50, // example deposit amount
//     };
//     setCartItems([...cartItems, newCartItem]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


// import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// interface Product {
//   id: number;
//   ProductName: string;
//   ProductImageURL: string;
//   ProductPrice: number;
//   description: string;
// }

// interface CartItem extends Product {
//   selectedSize: string;
//   selectedDuration: string;
//   deliveryDate: Date | null;
//   returnDate: Date | null;
//   quantity: number;
//   deposit: number;
// }

// interface CartContextProps {
//   cartItems: CartItem[];
//   addToCart: (product: Product, selectedSize: string, selectedDuration: string, deliveryDate: Date | null, returnDate: Date | null) => void;
//   removeFromCart: (id: number) => void;
// }

// const CartContext = createContext<CartContextProps | undefined>(undefined);

// export const useCart = (): CartContextProps => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>(() => {
//     const savedCartItems = localStorage.getItem('cartItems');
//     return savedCartItems ? JSON.parse(savedCartItems) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product: Product, selectedSize: string, selectedDuration: string, deliveryDate: Date | null, returnDate: Date | null) => {
//     const newCartItem: CartItem = {
//       ...product,
//       selectedSize,
//       selectedDuration,
//       deliveryDate,
//       returnDate,
//       quantity: 1,
//       deposit: 50, // example deposit amount
//     };
//     setCartItems([...cartItems, newCartItem]);
//   };

//   const removeFromCart = (id: number) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// Version 2 Code

// import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   deposit: number;
//   image: string;
// }

// interface CartItem extends Product {
//   size: string;
//   duration: string;
//   deliveryDate: Date | null;
//   returnDate: Date | null;
//   quantity: number;
// }

// interface CartState {
//   cart: CartItem[];
// }

// export const CartContext = createContext<{
//   cart: CartItem[];
//   addToCart: (product: Product, size: string, duration: string, deliveryDate: Date | null, returnDate: Date | null) => void;
//   removeFromCart: (id: number) => void;
//   updateQuantity: (id: number, quantity: number) => void;
// } | undefined>(undefined);

// export const cartReducer = (state: CartState, action: any): CartState => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const existingItem = state.cart.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         return {
//           ...state,
//           cart: state.cart.map(item =>
//             item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
//           ),
//         };
//       }
//       return {
//         ...state,
//         cart: [...state.cart, { ...action.payload, quantity: 1 }],
//       };
//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         cart: state.cart.filter(item => item.id !== action.payload),
//       };
//     case 'UPDATE_QUANTITY':
//       return {
//         ...state,
//         cart: state.cart.map(item =>
//           item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, { cart: [] });

//   const addToCart = (product: Product, size: string, duration: string, deliveryDate: Date | null, returnDate: Date | null) => {
//     dispatch({ type: 'ADD_TO_CART', payload: { ...product, size, duration, deliveryDate, returnDate } });
//   };

//   const removeFromCart = (id: number) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: id });
//   };

//   const updateQuantity = (id: number, quantity: number) => {
//     dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
//   };

//   return (
//     <CartContext.Provider value={{ cart: state.cart, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };



// Version 3 Code

import React, { createContext, useContext, useState } from 'react';

interface Product {
  ProductID: number;
  ProductName: string;
  ProductImageURL: string;
  ProductPrice: number;
  ProductDeposit: number; // Assuming this is the deposit amount for the product
}

interface CartItem extends Product {
  selectedSize: string;
  selectedDuration: string;
  deliveryDate: Date | null;
  returnDate: Date | null;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedSize: string, selectedDuration: string, deliveryDate: Date | null, returnDate: Date | null) => void;
  removeFromCart: (id: number) => void;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, selectedSize: string, selectedDuration: string, deliveryDate: Date | null, returnDate: Date | null) => {
    const newCartItem: CartItem = {
      ...product,
      selectedSize,
      selectedDuration,
      deliveryDate,
      returnDate,
      quantity: 1,
    };
    setCart(prevCart => [...prevCart, newCartItem]);
  };

 
  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.ProductID !== id));
    console.log("Id" +id)
  };
  

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from "react-router-dom";

// import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

// import { CartProvider } from './contexts/CartContext';


// import App from './App.tsx'
// import './index.css'
// import theme from './theme.ts'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <ChakraProvider theme={theme}>
     
//       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//       {/* <CartProvider> */}
//     <App />
//     {/* </CartProvider> */}
//     </ChakraProvider>
   
//     </BrowserRouter>
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

import App from './App.tsx';
import './index.css';
import theme from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

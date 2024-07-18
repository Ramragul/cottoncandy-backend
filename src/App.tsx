// Version 1 - Working Code, version 2 has session functionalities


// import {Routes, Route, Navigate } from "react-router-dom";
// import {TailoringCatalogue} from "./pages/tailoringCatalogue";
// import routes from "./routes";
// import { CartProvider } from './contexts/CartContext';
// import React from "react";
// import Navbar from "./widgets/layout/navbar";
// import { Box } from '@chakra-ui/react'
// import ImageCarousel from './components/ImageCarousel';

// function App () {
//   return (
//     <>
//    <Box>
    
//     {/* <TailoringCatalogue /> */}
//     <Navbar />
    
//     <Routes>
//         {routes.map(
//           ({ path, element }, key) =>
//             element && <Route key={key} exact path={path} element={element} />
//         )}
//         <Route path="*" element={<Navigate to="/home" replace />} />
//       </Routes>

//       </Box>
//     </>
//   )
// }

// export default App


// Version 2 Code with session handling 


// Version 2 Code

import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './widgets/layout/navbar';
import routes from './routes';
import { useAuth } from './contexts/AuthContext';

const App: React.FC = () => {
  const { authState, logout } = useAuth();

  return (
    <>
      <Box>
        <Navbar isAuthenticated={authState.isAuthenticated} onLogout={logout} />
        <Routes>
          {routes.map(({ path, element }, key) => (
            <Route key={key} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;

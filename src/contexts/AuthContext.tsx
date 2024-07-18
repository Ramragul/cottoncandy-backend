// Version 1 , working code except user id collection logic

// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// // Define the shape of the auth context
// interface AuthContextProps {
//   authState: AuthState;
//   login: (username: string) => void;
//   logout: () => void;
// }

// // Define the shape of the auth state
// interface AuthState {
//   isAuthenticated: boolean;
//   username?: string;
// }

// // Create the AuthContext with a default value
// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [authState, setAuthState] = useState<AuthState>(() => {
//     const savedAuthState = localStorage.getItem('authState');
//     return savedAuthState ? JSON.parse(savedAuthState) : { isAuthenticated: false };
//   });

//   useEffect(() => {
//     localStorage.setItem('authState', JSON.stringify(authState));
//   }, [authState]);

//   const login = (username: string) => {
//     setAuthState({ isAuthenticated: true, username });
//   };

//   const logout = () => {
//     setAuthState({ isAuthenticated: false, username: undefined });
//     localStorage.removeItem('authState');
//   };

//   return (
//     <AuthContext.Provider value={{ authState, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export { AuthProvider, useAuth };


// Version 2 - Similar to version 1 , user id collection logic added 

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the auth context
interface AuthContextProps {
  authState: AuthState;
  login: (userId: string, username: string) => void;
  logout: () => void;
}

// Define the shape of the auth state
interface AuthState {
  isAuthenticated: boolean;
  userId?: string;
  username?: string;
}

// Create the AuthContext with a default value
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const savedAuthState = localStorage.getItem('authState');
    return savedAuthState ? JSON.parse(savedAuthState) : { isAuthenticated: false };
  });

  useEffect(() => {
    localStorage.setItem('authState', JSON.stringify(authState));
  }, [authState]);

  const login = (userId: string, username: string) => {
    console.log("Userid value from Auth Context "+userId)
    setAuthState({ isAuthenticated: true, userId, username });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, userId: undefined, username: undefined });
    localStorage.removeItem('authState');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };

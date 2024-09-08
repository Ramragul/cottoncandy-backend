// Version 1 - 

// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// // Define the shape of the auth context
// interface AuthContextProps {
//   authState: AuthState;
//   login: (userId: string, userName: string) => void;
//   logout: () => void;
// }

// // Define the shape of the auth state
// interface AuthState {
//   isAuthenticated: boolean;
//   userId?: string;
//   userName?: string;
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

//   const login = (userName: string, userId: string) => {
//     console.log("UserName value from Auth Context "+userName)
//     console.log("UserId value from Auth Context "+userId)
//     setAuthState({ isAuthenticated: true, userId, userName });
//   };

//   const logout = () => {
//     setAuthState({ isAuthenticated: false, userId: undefined, userName: undefined });
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



// Version 2 - Similar to version 1 , user id , user name collection logic added 


import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the auth context
interface AuthContextProps {
  authState: AuthState;
  login: (userId: string, userName: string, userEmail: string) => void;
  logout: () => void;
}

// Define the shape of the auth state
interface AuthState {
  isAuthenticated: boolean;
  userId?: string;
  userName?: string;
  userEmail?: string;
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

  const login = (userName: string, userId: string, userEmail: string) => {
    console.log("UserName value from Auth Context "+userName)
    console.log("UserId value from Auth Context "+userId)
    console.log("User Email id :" +userEmail)
    
    setAuthState({ isAuthenticated: true, userId, userName , userEmail});
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, userId: undefined, userName: undefined , userEmail : undefined });
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
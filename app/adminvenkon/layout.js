"use client";

import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AdminLayout({ children }) {
  const getInitialAuthValue = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("isAuth") || false;
    }
    return false;
  };
  const [isAuth, setIsAuth] = useState(getInitialAuthValue());
  const handleIsAuth = (bool) => {
    setIsAuth(bool);
  };
  return (
    <main>
      <body>
        <AuthContext.Provider value={{ isAuth, handleIsAuth }}>
          {children}
        </AuthContext.Provider>
      </body>
    </main>
  );
}

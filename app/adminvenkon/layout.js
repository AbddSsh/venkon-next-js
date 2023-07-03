"use client";

import { createContext, useEffect, useState } from "react";
import "../global.css";

export const AuthContext = createContext();

export default function AdminLayout({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const storedIsAuth = localStorage.getItem("isAuth");
    setIsAuth(storedIsAuth || false);
  }, []);
  const handleIsAuth = (bool) => {
    setIsAuth(bool);
  };
  return (
    <>
      <html>
        <body className="wrapper">
          <AuthContext.Provider value={{ isAuth, handleIsAuth }}>
            <main className="my-container">{children}</main>
          </AuthContext.Provider>
        </body>
      </html>
    </>
  );
}

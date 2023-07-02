"use client";

import { createContext, useEffect, useState } from "react";

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
        <body>
          <AuthContext.Provider value={{ isAuth, handleIsAuth }}>
            <main>{children}</main>
          </AuthContext.Provider>
        </body>
      </html>
    </>
  );
}

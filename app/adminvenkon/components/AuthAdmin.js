"use client";

import { Auth, Authorization } from "@/services/admin";
import styles from "../styles/AuthAdmin.module.css";
import { useContext, useState } from "react";
import Link from "next/link";
import { AuthContext } from "../layout";

export default function AuthAdmin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, handleIsAuth } = useContext(AuthContext);

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await Auth(login, password).then(() => {
      if (localStorage.getItem("isAuth")) {
        handleIsAuth(true);
      }
    });
  };

  return (
    <div>
      {!isAuth ? (
        <div className={styles.form_wrapper}>
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
            Admin panel
          </h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.form_label}>
              Login:
              <input
                type="text"
                className={styles.form_input}
                value={login}
                onChange={handleChangeLogin}
              />
            </label>
            <label className={styles.form_label}>
              Password:
              <input
                type="password"
                className={styles.form_input}
                value={password}
                onChange={handleChangePassword}
              />
            </label>
            <input type="submit" value="Войти" className={styles.form_submit} />
          </form>
        </div>
      ) : (
        <div
          style={{
            margin: "50px auto",
            fontSize: "16px",
            padding: "10%",
            boxShadow: "0px 4px 20px #999999",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href="/adminvenkon/adminhome"
            className="my-link"
            style={{ margin: "10px" }}
          >
            Home page
          </Link>
          <Link
            href="/adminvenkon/adminwhy"
            className="my-link"
            style={{ margin: "10px" }}
          >
            Why us page
          </Link>
        </div>
      )}
    </div>
  );
}

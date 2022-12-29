import React from "react";
import { Link } from "react-router-dom";
import style from "../Header/Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header className={style.header}>
        {location.pathname === "/home" ? (
          <button>
            <Link to={"/home"}>
              <span className={style.box}>HOME</span>
            </Link>
          </button>
        ) : (
          <button className={style.button}>
            <Link to={"/home"}>
              <span className={style.box}>HOME</span>
            </Link>
          </button>
        )}
        {location.pathname === "/createDog" ? (
          <button>
            <Link to={"/createDog"}>
              <span className={style.box}>CREATE DOG</span>
            </Link>
          </button>
        ) : (
          <button className={style.button}>
            <Link to={"/createDog"}>
              <span className={style.box}>CREATE DOG</span>
            </Link>
          </button>
        )}
      </header>
    </>
  );
};

export default Header;

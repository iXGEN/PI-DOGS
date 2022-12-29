import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import style from "../LandingPage/LandingPage.module.css";

const LandingPage = () => {
  const homeLink = useHistory();
  const onclick = () => {
    homeLink.push("/home");
  };
  return (
    <div className={style.main}>
      <section>
        <h1>WELCOME TO</h1>
        <h1>MY PROJECT</h1>
        <h1>ABOUT DOGS</h1>

        <button className={style.button} onClick={onclick}>
          Enter
        </button>
      </section>
    </div>
  );
};

export default LandingPage;

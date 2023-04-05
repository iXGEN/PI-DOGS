import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import style from "./LandingPage.module.css";

const LandingPage = ({ onClick }) => {
  const linkedinLink = "https://www.linkedin.com/";
  const twitterLink = "https://twitter.com/";
  const emailLink = "dev.barrazagal@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(emailLink);
    alert("Email copied to clipboard!");
  };

  return (
    <div className={style.main}>
      <section>
        <h1>WELCOME TO</h1>
        <h1>MY PROJECT</h1>
        <h1>ABOUT DOGS</h1>

        <button className={style.button} onClick={onClick}>
          Enter
        </button>
      </section>
      <section>
        <FaLinkedin onClick={() => window.open(linkedinLink, "_blank")} />
        <FaTwitter onClick={() => window.open(twitterLink, "_blank")} />
        <FaEnvelope onClick={copyEmail} />
      </section>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { useHistory } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import style from "../LandingPage/LandingPage.module.css";

const LandingPage = () => {
  const homeLink = useHistory();
  const onclick = () => {
    homeLink.push("/home");
  };

  const linkedinLink = "https://www.linkedin.com/in/ignaciobarra-zagal/";
  const twitterLink = "https://twitter.com/IgnaBarraZagal";
  const emailLink = "dev.barrazagal@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailLink);
    alert("Email address copied to clipboard!");
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
      <section>
        <a href={linkedinLink} target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href={twitterLink} target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <span onClick={handleCopyEmail}>
          <FaEnvelope /> {emailLink}
        </span>
      </section>
    </div>
  );
};
export default LandingPage;

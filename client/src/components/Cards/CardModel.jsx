import React from "react";
import style from "./CardModel.module.css";
import { Link } from "react-router-dom";

export const CardModel = (props) => {
  return (
    <Link to={`/dogDetail/${props.id}`} style={{ textDecoration: "none" }}>
      <div className={style.cardV} key={props.id}>
        <img className={style.cardVImg} src={props.image} alt="img" />
        <div className={style.cardVBody}>
          <h3 className={style.cardVTitle}> {props.name}</h3>
          <p className={style.cardVInfo}>Temperaments: {props.temperament}</p>
          <p className={style.cardVInfo}>Min weight: {props.min_weight}kg</p>
          <p className={style.cardVInfo}>Max weight: {props.max_weight}kg</p>
        </div>
      </div>
    </Link>
  );
};

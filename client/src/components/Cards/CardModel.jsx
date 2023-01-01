import React from "react";
import style from "./CardModel.module.css";
import { Link } from "react-router-dom";

export const CardModel = (props) => {
  console.log(props);
  return (
    <Link to={`/dogDetail/${props.id}`} style={{ textDecoration: "none" }}>
      <div className={style.card} key={props.id}>
        <div>
          <h3 className={style.title}> {props.name}</h3>
          <img className={style.image} src={props.image} />
          <p>{props.temperament}</p>
          <p>{props.min_weight}</p>
          <p>{props.max_weight}</p>
        </div>
      </div>
    </Link>
  );
};

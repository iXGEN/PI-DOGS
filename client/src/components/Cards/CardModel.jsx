import React from "react";
import style from "./CardModel.module.css";
import { Link } from "react-router-dom";

export const CardModel = (props) => {
  return (
    <Link to={`/dogDetail/${props.id}`}>
      <div className={style.card} key={props.id}>
        {props.temperaments === undefined ? (
          props.temperaments?.map((ele) => <p>{ele.name}</p>)
        ) : (
          <p>{props.temperament}</p>
        )}
        <div>
          <h3 className={style.title}> {props.name}</h3>
          <img className={style.image} src={props.image} />
        </div>
      </div>
    </Link>
  );
};

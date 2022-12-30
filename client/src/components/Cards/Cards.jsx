import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import { CardModel } from "./CardModel";
import { Pagination } from "../Pagination/Pagination";
import style from "./CardModel.module.css";

export const Cards = ({ currentCharacters }) => {
  return (
    <div className={style.containerCards}>
      {currentCharacters?.map((el) => (
        <CardModel
          name={el.name}
          image={el.image?.url}
          key={el.id}
          id={el.id}
          temperament={el.temperament}
          temperaments={el.temperaments}
        />
      ))}
    </div>
  );
};

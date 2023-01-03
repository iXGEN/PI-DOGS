import React from "react";
import { CardModel } from "./CardModel";
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
          min_weight={el.min_weight}
          max_weight={el.max_weight}
        />
      ))}
    </div>
  );
};

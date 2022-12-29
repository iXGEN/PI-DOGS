import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import { CardModel } from "./CardModel";
import { Pagination } from "../Pagination/Pagination";
import style from "./CardModel.module.css";

export const Cards = ({ currentCharacters }) => {
  /* const allDogs = useSelector((state) => state.allDogs);
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const currentPage = useSelector((state) => state.currentPage); */
  /*  useEffect(() => {
    dispatch(actions.getDogs());
    dispatch(actions.getTemperaments());
  }, [dispatch]); */

  //const [charactersPerPage, setCharactersPerPage] = useState(8); //cuantos perros x pagina
  //const indexOfLastCharacter = currentPage * charactersPerPage; //pagina x cantidad  perros en pagina
  // const indexOfFirsChararacter = indexOfLastCharacter - charactersPerPage;
  //mala tu wea de codigo/* const currentCharacters = allDogs.slice(
  //indexOfFirsChararacter,
  //indexOfLastCharacter
  // );

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

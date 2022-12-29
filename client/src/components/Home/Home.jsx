import React, { useEffect } from "react";
import { Cards } from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
import style from "./Home.module.css";
import { Pagination } from "../Pagination/Pagination";
import { Filters } from "../Filters/Filters";
import { filtersLibrary } from "../../Library/index";

const Home = () => {
  const dispatch = useDispatch();
  const { allDogs, filters, currentPage } = useSelector((state) => state);

  const { allDogsCopy, indexOfFirsChararacter, indexOfLastCharacter } =
    filtersLibrary(filters, allDogs, currentPage);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className={style.Home}>
      <Filters />
      <Cards
        currentCharacters={allDogsCopy.slice(
          indexOfFirsChararacter,
          indexOfLastCharacter
        )}
      />
      ;
      <div className={style.pages}>
        <Pagination
          cardsQuantity={allDogsCopy.length}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;

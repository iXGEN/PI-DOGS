import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDogs,
  getTemperaments,
  filterCreated,
  orderBy,
  filterTemperaments,
  pageChanging,
  reset,
} from "../../redux/actions";
import { Nav } from "../Nav/Nav";
import style from "./Filters.module.css";

export const Filters = () => {
  const { temperaments, filters } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  ////////////////////////////////////////////////////////////////////////

  const handleClickCreated = (e) => {
    dispatch(filterCreated(e.target.value));
  };
  const handleClickOrderBy = (e) => {
    dispatch(orderBy(e.target.value));
  };

  const handleTemperaments = (e) => {
    dispatch(filterTemperaments(e.target.value));
  };

  ///////////////////////////////////////////////////////////////////////

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <form action="">
        <Nav />
        <div>
          <div>
            <select
              className={style.customSelect}
              name="Created in Database"
              value={filters.origin}
              onChange={handleClickCreated}
            >
              <option value="ALL" id="ALL">
                All
              </option>
              <option value="API" id="API">
                Originals
              </option>
              <option value="CREATED_IN_DB" id="CREATED_IN_DB">
                Created by user
              </option>
            </select>
          </div>
          <div>
            <select
              className={style.customSelect}
              name="Filter by temperaments"
              value={filters.filterByTemperament}
              onChange={handleTemperaments}
            >
              <option hidden>Filter by temperaments</option>
              {temperaments.map((t) => (
                <option value={t.name} key={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className={style.customSelect}
              name="Order alphabetically"
              value={filters.orderBy}
              onChange={handleClickOrderBy}
            >
              <option hidden>Order </option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="MIN_WEIGHT_ASC">
                by minimum weight ascending
              </option>
              .
              <option value="MIN_WEIGHT_DESC">
                by minimum weight descending
              </option>
              <option value="MAX_WEIGHT_ASC">
                by maximum weight ascending
              </option>
              <option value="MAX_WEIGHT_DESC">
                by maximum weight descending
              </option>
            </select>
          </div>
        </div>
      </form>
      <button className={style.buttonFilter} onClick={handleReset}>
        Reset filters
      </button>
    </>
  );
};

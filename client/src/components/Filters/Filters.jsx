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
} from "../../redux/actions";
import { Nav } from "../Nav/Nav";

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

  return (
    <>
      <form action="">
        <Nav />
        <div>
          <select name="Created in Database" onChange={handleClickCreated}>
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
          <select name="Filter by temperaments" onChange={handleTemperaments}>
            <option hidden>Filter by temperaments</option>
            {temperaments.map((t) => (
              <option value={t.name} key={t.id}>
                {t.name}
              </option>
            ))}
          </select>
          <select name="Order alphabetically" onChange={handleClickOrderBy}>
            <option hidden>Order </option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="MIN_WEIGHT_ASC">by minimum weight ascending</option>.
            <option value="MIN_WEIGHT_DESC">
              by minimum weight descending
            </option>
            <option value="MAX_WEIGHT_ASC">by maximum weight ascending</option>
            <option value="MAX_WEIGHT_DESC">
              by maximum weight descending
            </option>
          </select>
        </div>
      </form>
    </>
  );
};

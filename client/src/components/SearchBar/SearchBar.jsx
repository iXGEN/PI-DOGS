import React from "react";
import { useState } from "react";
import * as actions from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";
import style from "../SearchBar/SearchBar.module.css";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.searchDog(search));
    dispatch(actions.pageChanging(1));
  };
  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        name="search"
        placeholder="Search a dog..."
        autoComplete={"off"}
        onChange={(e) => handleChange(e)}
      ></input>
      <button
        className={style.button}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      ></button>
      <span>Search</span>
    </div>
  );
};

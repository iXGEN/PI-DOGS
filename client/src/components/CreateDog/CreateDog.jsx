import React from "react"; //rsc
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

import { getDogs, getTemperaments, postDog } from "../../redux/actions";

const CreateDog = () => {
  const [input, setInput] = useState({
    name: "",
    min_weight: 0,
    max_weight: 0,
    min_height: 0,
    max_height: 0,
    lifespan: 0,
    image: "",
    temperament: [],
  });
  const [error, setError] = useState({
    name: "",
    min_weight: 0,
    max_weight: 0,
    min_height: 0,
    max_height: 0,
    lifespan: 0,
    image: "",
    temperament: [],
  });

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" name="name" value={input.value} />
        <label>Minimum Weight</label>
        <input type="text" name="name" value={input.value} />
        <label>Maximum Weight</label>
        <input type="text" name="name" value={input.value} />
        <label>Minimum Height</label>
        <input type="text" name="name" value={input.value} />
        <label>Maximum Height</label>
        <input type="text" name="name" value={input.value} />
        <label>Life Span</label>
        <input type="text" name="name" value={input.value} />
        <label>Image url</label>
        <input type="text" name="name" value={input.value} />
        <label>Temperaments</label>
        <input type="text" name="name" value={input.value} />
      </form>
    </div>
  );
};

export default CreateDog;

import React from "react"; //rsc
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperaments, postDog } from "../../redux/actions";
import style from "../CreateDog/CreateDog.module.css";
import dogValidation from "./createDogLibrary.js";

const CreateDog = () => {
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    min_weight: "",
    max_weight: "",
    min_height: "",
    max_height: "",
    lifespan: "",
    image: "",
    temperament: [],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleInputs = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      dogValidation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleAddTemperaments = (e) => {
    setInput({ ...input, temperament: [...input.temperament, e.target.value] });
    setErrors(
      dogValidation({
        ...input,
        temperament: [...input.temperament, e.target.value],
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      dispatch(postDog(input));
    }
  };

  return (
    <main className={style.main}>
      <div className={style.title}>
        <h1>Create a new dog!</h1>
        <p>Crete your dog with its own characteristics</p>
      </div>

      <form>
        <div className={style.forms}>
          <div>
            <label className={style.labels}>Name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              placeholder="Enter dog's name"
              autoComplete="off"
              onChange={handleInputs}
            />
            {errors.name ? <p className={style.error}>{errors.name}</p> : null}
          </div>
          <div>
            <label className={style.labels}>Minimum weight</label>
            <input
              type="number"
              name="min_weight"
              value={input.min_weight}
              placeholder="Enter minimum weight"
              autoComplete="off"
              onChange={handleInputs}
            />
            {errors.min_weight ? (
              <p className={style.error}>{errors.min_weight}</p>
            ) : null}
          </div>
          <div>
            <label className={style.labels}>Maximum weight</label>
            <input
              type="number"
              name="max_weight"
              value={input.max_weight}
              placeholder="Enter maximum weight"
              autoComplete="off"
              onChange={handleInputs}
            />
            {errors.max_weight ? (
              <p className={style.error}>{errors.max_weight}</p>
            ) : null}
          </div>
          <div>
            <label className={style.labels}>Minimum height</label>
            <input
              type="number"
              name="min_height"
              value={input.min_height}
              placeholder="Enter minimum height"
              autoComplete="off"
              onChange={handleInputs}
            />
            {errors.min_height ? (
              <p className={style.error}>{errors.min_height}</p>
            ) : null}
          </div>
          <div>
            <label className={style.labels}>Maximum height</label>
            <input
              type="number"
              name="max_height"
              value={input.max_height}
              placeholder="Enter maximum height"
              autoComplete="off"
              onChange={handleInputs}
            />
            {errors.max_height ? (
              <p className={style.error}>{errors.max_height}</p>
            ) : null}
          </div>
          <div>
            <label className={style.labels}>Life span</label>
            <input
              type="number"
              name="lifespan"
              value={input.lifespan}
              placeholder="Enter life span"
              autoComplete="off"
              onChange={handleInputs}
            />
            {errors.lifespan ? (
              <p className={style.error}>{errors.lifespan}</p>
            ) : null}
          </div>
          <div>
            <label className={style.labels}>Add an image</label>
            <input
              type="text"
              name="image"
              value={input.image}
              placeholder="upload or link of an image"
              autoComplete="off"
              onChange={handleInputs}
            />
            {errors.image ? (
              <p className={style.error}>{errors.image}</p>
            ) : null}
          </div>
          <div>
            <select name="Add temperaments" onChange={handleAddTemperaments}>
              <option hidden>Select temperaments </option>
              {temperaments.map((t) => (
                <option value={t.name} key={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
            <div>
              <div>Selected temperaments: </div>
              {input.temperament.map((t) => {
                return <div>{t}</div>;
              })}
            </div>
          </div>
          <button onClick={handleSubmit}>Crear</button>
        </div>
      </form>
    </main>
  );
};

export default CreateDog;

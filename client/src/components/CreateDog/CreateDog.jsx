import React from "react"; //rsc
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../../redux/actions";
import style from "../CreateDog/CreateDog.module.css";
import dogValidation from "./createDogLibrary.js";
import { useHistory } from "react-router-dom";
const CreateDog = () => {
  const homeLink = useHistory();
  const temperaments = useSelector((state) => state.temperaments);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    min_weight: "",
    max_weight: "",
    min_height: "",
    max_height: "",
    min_lifespan: "",
    max_lifespan: "",
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

  const handleDeleteTemperaments = (temp) => {
    setInput({
      ...input,
      temperament: input.temperament.filter((t) => t !== temp),
    });
    setErrors(
      dogValidation({
        ...input,
        temperament: input.temperament.filter((t) => t !== temp),
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*  if (
      !errors.name &&
      !errors.min_weight &&
      !errors.max_weight &&
      !errors.min_height &&
      !errors.max_height &&
      !errors.temperament
    ) { */
    if (input.min_lifespan && input.max_lifespan) {
      let dogLS = {};
      for (var k in input) dogLS[k] = input[k];
      dogLS.lifespan = `${dogLS.min_lifespan} - ${dogLS.max_lifespan} years`;
      dispatch(postDog(dogLS));
    }
    dispatch(postDog(input));
    alert("DOG SUCCESSFULLY CREATED");
    homeLink.push("/home");

    /* setInput({
        name: "",
        min_weight: "",
        max_weight: "",
        min_height: "",
        max_height: "",
        min_lifespan: "",
        max_lifespan: "",
        image: "",
        temperament: [],
      }); */
    /* } else {
      alert("SOME FIELDS HAVE ERRORS");
    } */
  };

  return (
    <main className={style.main}>
      <div className={style.title}>
        <h1>Create a new dog!</h1>
        <p>Create your dog with its own characteristics</p>
      </div>

      <form>
        <div className={style.forms}>
          <div>
            <label className={style.labels}>Name</label>
            <br></br>
            <input
              className={style.input}
              type="text"
              name="name"
              value={input.name}
              placeholder="Enter dog's name"
              autoComplete="off"
              onChange={handleInputs}
              onBlur={handleInputs}
              autoFocus={true}
            />

            {errors.name ? (
              <p className={style.error}>{errors.name}</p>
            ) : (
              <p></p>
            )}
          </div>
          <div>
            <label className={style.labels}>Minimum weight</label>
            <br></br>
            <input
              className={style.input}
              type="number"
              name="min_weight"
              value={input.min_weight}
              placeholder="Enter minimum weight"
              autoComplete="off"
              onChange={handleInputs}
              onBlur={handleInputs}
            />

            {input.min_weight ? (
              errors.min_weight && (
                <p className={style.error}>{errors.min_weight}</p>
              )
            ) : (
              <p></p>
            )}
          </div>
          <div>
            <label className={style.labels}>Maximum weight</label>
            <br></br>
            <input
              className={style.input}
              type="number"
              name="max_weight"
              value={input.max_weight}
              placeholder="Enter maximum weight"
              autoComplete="off"
              onChange={handleInputs}
              onBlur={handleInputs}
            />
            {input.max_weight ? (
              errors.max_weight && (
                <p className={style.error}>{errors.max_weight}</p>
              )
            ) : (
              <p></p>
            )}
          </div>
          <div>
            <label className={style.labels}>Minimum height</label>
            <br></br>
            <input
              className={style.input}
              type="number"
              name="min_height"
              value={input.min_height}
              placeholder="Enter minimum height"
              autoComplete="off"
              onChange={handleInputs}
              onBlur={handleInputs}
            />
            {input.min_height ? (
              errors.min_height && (
                <p className={style.error}>{errors.min_height}</p>
              )
            ) : (
              <p></p>
            )}
          </div>
          <div>
            <label className={style.labels}>Maximum height</label>
            <br></br>
            <input
              className={style.input}
              type="number"
              name="max_height"
              value={input.max_height}
              placeholder="Enter maximum height"
              autoComplete="off"
              onChange={handleInputs}
              onBlur={handleInputs}
            />
            {input.max_height ? (
              errors.max_height && (
                <p className={style.error}>{errors.max_height}</p>
              )
            ) : (
              <p></p>
            )}
          </div>
          <div>
            <label className={style.labels}>Minimum Life span</label>
            <br></br>
            <input
              className={style.input}
              type="number"
              name="min_lifespan"
              value={input.min_lifespan}
              placeholder="Enter min life span"
              autoComplete="off"
              onChange={handleInputs}
              onBlur={handleInputs}
            />
            {input.min_lifespan ? (
              errors.min_lifespan && (
                <p className={style.semiError}>{errors.min_lifespan}</p>
              )
            ) : (
              <p></p>
            )}
          </div>
          <div>
            <label className={style.labels}>Maximum Life span</label>
            <br></br>
            <input
              className={style.input}
              type="number"
              name="max_lifespan"
              value={input.max_lifespan}
              placeholder="Enter max life span"
              autoComplete="off"
              onChange={handleInputs}
              onBlur={handleInputs}
            />
            {input.max_lifespan ? (
              errors.max_lifespan && (
                <p className={style.semiError}>{errors.max_lifespan}</p>
              )
            ) : (
              <p></p>
            )}
          </div>
          <div>
            <label className={style.labels}>Add an image</label>
            <br></br>
            <input
              className={style.input}
              type="text"
              name="image"
              value={input.image}
              placeholder="link of an image"
              autoComplete="off"
              onChange={handleInputs}
              onBlur={handleInputs}
            />
            {input.image ? (
              errors.image && <p className={style.semiError}>{errors.image}</p>
            ) : (
              <p></p>
            )}
          </div>
          <div>
            <select
              className={style.customSelect}
              name="Add temperaments"
              onChange={handleAddTemperaments}
              onBlur={handleInputs}
            >
              <option hidden>Select temperaments </option>
              {temperaments.map((t) =>
                !input.temperament.includes(t.name) ? (
                  <option value={t.name} key={t.id}>
                    {t.name}
                  </option>
                ) : null
              )}
            </select>
            {errors.temperament ? (
              <p className={style.error}>{errors.temperament}</p>
            ) : (
              <p></p>
            )}
            <div>
              <div className={style.selectedTemps} key="Selected Temperaments">
                Selected temperaments:
              </div>
              {input.temperament.map((t) => {
                return (
                  <div key={t}>
                    <button
                      type="button"
                      onClick={() => handleDeleteTemperaments(t)}
                    >
                      X
                    </button>
                    <div className={style.temperamentsDiv} key={t}>
                      {t}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {!errors.name &&
          !errors.min_weight &&
          !errors.max_weight &&
          !errors.min_height &&
          !errors.max_height &&
          !errors.temperament ? (
            <button onClick={handleSubmit}>Create</button>
          ) : (
            <button disabled>Create</button>
          )}
        </div>
      </form>
    </main>
  );
};

export default CreateDog;

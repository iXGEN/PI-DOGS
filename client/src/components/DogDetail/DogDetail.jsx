import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import { useParams } from "react-router-dom";
import style from "../DogDetail/DogDetail.module.css";

export const DogDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dogId = useSelector((state) => state.dogId);

  useEffect(() => {
    dispatch(actions.getDogById(id));
    return;
  }, []);
  useEffect(() => {
    return () => {
      if (dogId) {
        dispatch(actions.emptyDetail());
      }
    };
  }, [dispatch, id]);

  return (
    <div>
      {dogId.length > 0 ? (
        <div>
          <section className={style.dataSection}>
            <div className={style.leftDiv}>
              <h1>{dogId[0]?.name}</h1>
              <img className={style.img} src={dogId[0]?.image.url} />
            </div>
            <div className={style.rightDiv}>
              <p className={style.p}>Temperaments: {dogId[0]?.temperament}</p>
              <p className={style.p}>
                Minimum Weight: {dogId[0]?.min_weight}kg
              </p>
              <p className={style.p}>
                Maximum Weight: {dogId[0]?.max_weight}kg
              </p>
              <p className={style.p}>
                Minimum Height: {dogId[0]?.min_height}cm
              </p>
              <p className={style.p}>
                Maximum Height: {dogId[0]?.max_height}cm
              </p>
              <p className={style.p}>Lifespan: {dogId[0]?.lifespan}</p>
              <p className={style.p}>{dogId[0]?.width}</p>
              <p className={style.p}>{dogId[0]?.width}</p>
            </div>
          </section>
        </div>
      ) : (
        <h1 className={style.loading}>Loading...</h1>
      )}
    </div>
  );
};

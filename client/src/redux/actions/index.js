import axios from "axios";

export const getDogs = () => {
  return async (dispatch) => {
    let getDogs = await axios.get("http://localhost:3001/dogs");
    return dispatch({ type: "GET_DOGS", payload: getDogs.data });
  };
};
export const getDogById = (id) => {
  return async (dispatch) => {
    let getDogs = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({ type: "DOG_DETAIL", payload: getDogs.data });
  };
};
export const emptyDetail = () => {
  return {
    type: "EMPTY_DETAIL",
    payload: [],
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    let getTemperaments = await axios.get("http://localhost:3001/temperaments");
    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: getTemperaments.data,
    });
  };
};

export const postDog = (payload) => {
  return async (dispatch) => {
    const postDog = await axios.post("http://localhost:3001/dogs", payload);
    return dispatch({
      type: "POST_DOG",
      payload: postDog.data,
    });
  };
};

export const pageChanging = (Pagenumber) => {
  return {
    type: "PAGE_CHANGING",
    payload: Pagenumber++,
  };
};

export const searchDog = (name) => {
  return async (dispatch) => {
    let getDogs = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    return dispatch({ type: "SEARCH_DOG", payload: getDogs.data });
  };
};
export const filterCreated = (payload) => {
  return {
    type: "FILTER_CREATED",
    payload: payload,
  };
};
export const filterTemperaments = (payload) => {
  return {
    type: "FILTER_TEMPERAMENTS",
    payload: payload,
  };
};

export const orderBy = (payload) => {
  return {
    type: "ORDER_BY",
    payload: payload,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

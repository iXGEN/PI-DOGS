const initialState = {
  allDogs: [],
  copyAllDogs: [],
  temperaments: [],
  currentPage: 1,
  dogId: [],
  filters: { origin: "ALL", filterByTemperament: "ALL", orderBy: "ALL" },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        allDogs: action.payload,
      };
    case "SEARCH_DOG":
      return {
        ...state,
        allDogs: action.payload,
        currentPage: 1,
      };
    case "POST_DOG":
      return {
        ...state,
      };
    case "PAGE_CHANGING":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "EMPTY_DETAIL":
    case "DOG_DETAIL":
      return {
        ...state,
        dogId: action.payload,
      };
    case "FILTER_CREATED":
      return {
        ...state,
        filters: { ...state.filters, origin: action.payload },
        currentPage: 1,
      };

    case "FILTER_TEMPERAMENTS":
      const dogsFilteredByTemps = state.copyAllDogs.filter((d) =>
        d.temperament?.includes(action.payload) ? d : null
      );
      return {
        ...state,
        allDogs: dogsFilteredByTemps,
      };

    case "ORDER_BY":
      return {
        ...state,
        filters: { ...state.filters, orderBy: action.payload },
        currentPage: 1,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;

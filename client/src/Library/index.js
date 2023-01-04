export const filtersLibrary = (
  { origin, filterByTemperament, orderBy },
  allDogs,
  currentPage
) => {
  let allDogsCopy = [];

  if (origin === "ALL") {
    allDogsCopy = allDogs.slice();
  } else {
    if (origin === "CREATED_IN_DB") {
      allDogsCopy = allDogs.filter((e) => e.createdInDb);
    } else {
      allDogsCopy = allDogs.filter((e) => !e.createdInDb);
    }
  }

  if (filterByTemperament !== "ALL") {
    allDogsCopy = allDogsCopy.filter((t) => {
      return t.temperament?.includes(filterByTemperament) === true;
    });
  }

  if (orderBy !== "ALL") {
    if (orderBy === "A-Z") {
      allDogsCopy.sort((a, b) => {
        if (b.name.toLowerCase() > a.name.toLowerCase()) {
          return -1;
        }
        if (b.name < a.name) {
          return 1;
        }
        return 0;
      });
    } else if (orderBy === "Z-A") {
      allDogsCopy.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    } else if (orderBy === "MIN_WEIGHT_ASC") {
      allDogsCopy.sort((a, b) => a.min_weight - b.min_weight);
    } else if (orderBy === "MIN_WEIGHT_DESC") {
      allDogsCopy.sort((a, b) => b.min_weight - a.min_weight);
    } else if (orderBy === "MAX_WEIGHT_ASC") {
      allDogsCopy.sort((a, b) => a.max_weight - b.max_weight);
    } else if (orderBy === "MAX_WEIGHT_DESC") {
      allDogsCopy.sort((a, b) => b.max_weight - a.max_weight);
    }
  }
  const indexOfLastDog = currentPage * 8;
  const indexOfFirstDog = indexOfLastDog - 8;

  return { allDogsCopy, indexOfFirstDog, indexOfLastDog };
};

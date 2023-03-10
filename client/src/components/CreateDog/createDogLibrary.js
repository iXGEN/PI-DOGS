const dogValidation = (
  {
    name,
    min_weight,
    max_weight,
    min_height,
    max_height,
    min_lifespan,
    max_lifespan,
    image,
    temperament,
  },
  dogs
) => {
  const validationErrors = {};

  if (
    parseInt(min_weight) === 0 ||
    parseInt(max_weight) === 0 ||
    parseInt(min_weight) >= parseInt(max_weight)
  ) {
    validationErrors.min_weight =
      "REQUIRED: Minimum weight must be less than the Maximum weight";
    validationErrors.max_weight =
      "REQUIRED: Maximum weight must be greater than the Minimum weight";
  }

  if (name.toString().trim().length === 0) {
    validationErrors.name = "REQUIRED: Name field has to be filled";
  }
  let newDog = dogs.find((el) => el.name.toLowerCase() === name.toLowerCase());
  if (newDog) {
    validationErrors.name = "Dog has already been created";
  }

  if (min_weight.toString().trim().length === 0) {
    validationErrors.min_weight =
      "REQUIRED: Minimum weight field has to be filled";
  } else if (typeof min_weight === "number") {
    validationErrors.min_weight = "Minimum weight must be a number";
  }

  if (max_weight.toString().trim().length === 0) {
    validationErrors.max_weight =
      "REQUIRED: Maximum weight field has to be filled";
  } else if (typeof max_weight === "number") {
    validationErrors.max_weight = "Minimum weight must be a number";
  }

  if (
    parseInt(min_height) === 0 ||
    parseInt(max_height) === 0 ||
    parseInt(min_height) >= parseInt(max_height)
  ) {
    validationErrors.min_height =
      "REQUIRED: Minimum height must be less than the Maximum height";
    validationErrors.max_height =
      "REQUIRED: Maximum height must be greater than the Minimum height";
  }

  if (min_height.toString().trim().length === 0) {
    validationErrors.min_height =
      "REQUIRED: Minimum height field has to be filled";
  } else if (typeof min_height === "number") {
    validationErrors.min_height = "Minimum height must be a number";
  }

  if (max_height.toString().trim().length === 0) {
    validationErrors.max_height =
      "REQUIRED: Maximum height field has to be filled";
  } else if (typeof max_height === "number") {
    validationErrors.max_height = "Maximum height must be a number";
  }

  if (
    parseInt(min_lifespan) === 0 ||
    parseInt(max_lifespan) === 0 ||
    parseInt(min_lifespan) >= parseInt(max_lifespan)
  ) {
    validationErrors.min_lifespan =
      "Minimum lifespan must be less than the Maximum lifespan";
    validationErrors.max_lifespan =
      "Maximum lifespan must be greater than the Minimum lifespan";
  }

  if (min_lifespan.toString().trim().length === 0) {
    validationErrors.min_lifespan = "Minimum lifespan field is empty";
  } else if (typeof min_lifespan === "number") {
    validationErrors.min_lifespan = "Minimum lifespan must be a number";
  } else if (min_lifespan < 0) {
    validationErrors.min_lifespan =
      "Minimum lifespan must be more than 0 years";
  }

  if (max_lifespan.toString().trim().length === 0) {
    validationErrors.max_lifespan = "Maximum lifespan field is empty";
  } else if (typeof max_lifespan === "number") {
    validationErrors.max_lifespan = "Maximum lifespan must be a number";
  } else if (max_lifespan < 0) {
    validationErrors.max_lifespan =
      "Maximum lifespan must be more than 0 years";
  }

  if (image.toString().trim().length === 0) {
    validationErrors.image = "image URL is empty";
  } else if (!/^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/.test(image)) {
    validationErrors.image = "The URL is not valid";
  }
  /* console.log("TEMPERAMENTARRAY", temperament); */
  if (temperament.length === 0) {
    validationErrors.temperament =
      "REQUIRED: You must add at least one temperament";
  }

  return validationErrors;
};

export default dogValidation;

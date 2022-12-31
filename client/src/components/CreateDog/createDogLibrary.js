const validateDogs = (input) => {
  const errors = {};

  if (!input.name.length) errors.name = "El nombre no puede estar vacío";
};

const dogValidation = ({
  name,
  min_weight,
  max_weight,
  min_height,
  max_height,
  lifespan,
  image,
  temperament,
}) => {
  console.log(
    name,
    min_weight,
    max_weight,
    min_height,
    max_height,
    lifespan,
    image,
    temperament
  );
  const validationErrors = {};

  if (
    parseInt(min_weight) === 0 ||
    parseInt(max_weight) === 0 ||
    parseInt(min_weight) >= parseInt(max_weight)
  ) {
    validationErrors.min_weight =
      "Minimum weight must be less than the Maximum weight";
    validationErrors.max_weight =
      "Maximum weight must be greater than the Minimum weight";
  }

  if (name.toString().trim().length === 0) {
    validationErrors.name = "Name is empty";
  }
  if (min_weight.toString().trim().length === 0) {
    validationErrors.min_weight = "Minimum weight field is empty";
  } else if (typeof min_weight === "number") {
    validationErrors.min_weight = "Minimum weight must be a number";
  }

  if (max_weight.toString().trim().length === 0) {
    validationErrors.max_weight = "Maximum weight field is empty";
  } else if (typeof max_weight === "number") {
    validationErrors.max_weight = "Minimum weight must be a number";
  }
  /*  else if (altura < 0 || altura > 280) {
      validationErrors.altura = "La Altura solo puede estar entre 0 a 280";
    } */

  if (
    parseInt(min_height) === 0 ||
    parseInt(max_height) === 0 ||
    parseInt(min_height) >= parseInt(max_height)
  ) {
    validationErrors.min_height =
      "Minimum height must be less than the Maximum height";
    validationErrors.max_height =
      "Maximum height must be greater than the Minimum height";
  }

  if (min_height.toString().trim().length === 0) {
    validationErrors.min_height = "Minimum height field is empty";
  } else if (typeof min_height === "number") {
    validationErrors.min_height = "Minimum height must be a number";
  }
  if (max_height.toString().trim().length === 0) {
    validationErrors.max_height = "Maximum height field is empty";
  } else if (typeof max_height === "number") {
    validationErrors.max_height = "Maximum height must be a number";
  }

  if (lifespan.toString().trim().length === 0) {
    validationErrors.lifespan = "Lifespan field is empty";
  } else if (typeof lifespan === "number") {
    validationErrors.lifespan = "Lifespan must be a number";
  } else if (lifespan < 0) {
    validationErrors.lifespan = "Lifespan must be more than 0 years";
  }

  if (image.toString().trim().length === 0) {
    validationErrors.image = "image URL is empty";
  } else if (!/^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/.test(image)) {
    validationErrors.image = "The URL is not valid";
  }

  if (temperament.length === 0) {
    validationErrors.temperament = "You must add at least one temperament";
  }

  return validationErrors; // {name: error, min_weight: error, max_weight: error}
};

export default dogValidation;

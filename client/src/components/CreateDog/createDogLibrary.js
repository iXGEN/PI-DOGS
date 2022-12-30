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

  if (name.toString().trim().length === 0) {
    validationErrors.name = "El name esta Vacio";
  }
  if (min_weight.toString().trim().length === 0) {
    validationErrors.min_weight = "La min_weight esta Vacia";
  } else if (typeof min_weight === "number") {
    validationErrors.min_weight = "La min_weight No es un Numero";
  }

  if (max_weight.toString().trim().length === 0) {
    validationErrors.max_weight = "La max_weight esta Vacia";
  } else if (typeof max_weight === "number") {
    validationErrors.max_weight = "La max_weight No es un Numero";
  }
  /*  else if (altura < 0 || altura > 280) {
      validationErrors.altura = "La Altura solo puede estar entre 0 a 280";
    } */

  if (min_height.toString().trim().length === 0) {
    validationErrors.min_height = "El min_height esta Vacio";
  } else if (typeof min_height === "number") {
    validationErrors.min_height = "El min_height No es un Numero";
  } /* else if (min_height < 0 || min_height > 280) {
      validationErrors.min_height = "El Peso solo puede estar entre 0 a 280";
    } */
  if (max_height.toString().trim().length === 0) {
    validationErrors.max_height = "El max_height esta Vacio";
  } else if (typeof max_height === "number") {
    validationErrors.max_height = "El max_height No es un Numero";
  } /* else if (max_height < 0 || max_height > 280) {
      validationErrors.max_height = "El Peso solo puede estar entre 0 a 280";
    } */

  if (lifespan.toString().trim().length === 0) {
    validationErrors.lifespan = "La lifespan esta Vacia";
  } else if (typeof lifespan === "number") {
    validationErrors.lifespan = "La lifespan No es un Numero";
  } else if (lifespan < 0) {
    validationErrors.lifespan = "Life span needs to be more than 0 years";
  }

  if (image.toString().trim().length === 0) {
    validationErrors.image = "La image esta Vacia";
  } else if (!/^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/.test(image)) {
    validationErrors.image = "La Url de la image no es Valida";
  }

  if (temperament.length === 0) {
    validationErrors.temperament = "Los temperament estan Vacia";
  }

  return validationErrors; // {name: error, min_weight: error, max_weight: error}
};

export default dogValidation;

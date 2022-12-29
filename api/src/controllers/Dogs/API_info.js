const axios = require("axios");
const { Dogs } = require("../../db");
const { apik } = process.env;

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${apik}`
  );
  const apiInfo = await apiUrl.data.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      min_weight: dog.weight?.metric.split("-")[0].trim(),
      max_weight: dog.weight?.metric.split("-").reverse()[0].trim(),
      min_height: dog.height?.metric.split("-")[0].trim(),
      max_height: dog.height?.metric.split("-").reverse()[0].trim(),
      lifespan: dog.life_span,
      image: dog.image,
      temperament: dog.temperament,
    };
  });

  return apiInfo;
};

module.exports = { getApiInfo };

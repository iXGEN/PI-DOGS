const axios = require("axios");
const { Temperaments } = require("../../db");
const { apik } = process.env;

const getTempsApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${apik}`
  );
  const apiInfo = await apiUrl.data;
  const temperaments = apiInfo
    .map((d) => d.temperament)
    .join()
    .split(",")
    .sort();

  await temperaments
    .filter((t, i) => temperaments.indexOf(t) === i)
    .forEach(
      (t) =>
        t.trim() !== "" &&
        Temperaments.findOrCreate({
          where: {
            name: t.trim(),
          },
        })
    );

  const allTemperaments = await Temperaments.findAll({ order: [["name"]] });
  return allTemperaments;
};

module.exports = {
  getTempsApiInfo,
};

const { Dogs, Temperaments } = require("../../db");

const getDbInfo = async () => {
  let dogsDb = await Dogs.findAll({
    include: {
      model: Temperaments,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return dogsDb.map((d) => {
    console.log(d);
    return {
      id: d.dataValues.id,
      name: d.dataValues.name,
      min_height: d.dataValues.min_height,
      max_height: d.dataValues.max_height,
      min_weight: d.dataValues.min_weight,
      max_weight: d.dataValues.max_weight,
      lifespan: d.dataValues.lifespan,
      image: { url: d.dataValues.image },
      createdInDb: d.dataValues.createdInDb,
      temperament: d.dataValues.Temperaments?.map((ele) => ele.name).join(", "),
    };
  });
};

module.exports = { getDbInfo };

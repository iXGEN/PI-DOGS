const { getApiInfo } = require("./API_info");
const { getDbInfo } = require("./dataBase_info");

const getAllDogs = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();

  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = { getAllDogs };

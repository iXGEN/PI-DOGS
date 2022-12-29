const { Router } = require("express");
const { getTempsApiInfo } = require("../../controllers/Temperaments/API_info");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const dataBaseTemps = await getTempsApiInfo();
    res.status(200).send(dataBaseTemps);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;

const { Router } = require("express");
const { getAllDogs } = require("../../controllers/Dogs/All_info");

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const allDogs = await getAllDogs();
    if (id) {
      const dogId = await allDogs.filter((dog) => dog.id == id);
      if (dogId.length) {
        res.status(200).send(dogId);
      } else {
        res.status(404).send("Oops, Dog not found");
      }
    }
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});

module.exports = router;

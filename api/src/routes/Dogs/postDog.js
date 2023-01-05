const { Router } = require("express");
const { Dogs, Temperaments } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
  const {
    name,
    min_weight,
    max_weight,
    min_height,
    max_height,
    lifespan,
    image,
    temperament,
  } = req.body;

  try {
    const dogCreated = await Dogs.create({
      name,
      min_weight,
      max_weight,
      min_height,
      max_height,
      lifespan,
      image,
    });
    const temperamentDb = await Temperaments.findAll({
      where: {
        name: temperament,
      },
    });

    await dogCreated.addTemperament(temperamentDb);
    res.status(201).send({ success: "Dog successfully created!" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;

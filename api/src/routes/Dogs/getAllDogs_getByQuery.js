const { Router } = require("express");
const { getAllDogs } = require("../../controllers/Dogs/All_info");

const router = Router();

/* router.get("/", async (req, res) => {
  const name = req.query.name;
  let dogsTotal = await getAllDogs();
  try {
    if (name) {
      let dogsName = await dogsTotal.filter((ele) =>
        ele.name.toLowerCase().includes(name.toLowerCase())
      );
      dogsName.length
        ? res.status(200).send(dogsName)
        : throw new Error("eeeeee");
    } else {
      res.status(200).send(dogsTotal);
    }
  } catch (error) {
    res.status(404).send(error);
  }
}); */
////////////////////////////
router.get("/", async (req, res) => {
  const name = req.query.name;
  let allDogs = await getAllDogs();
  try {
    if (name) {
      let dogsName = await allDogs.filter((ele) =>
        ele.name.toLowerCase().includes(name.toLowerCase())
      );

      if (dogsName.length) res.status(200).send(dogsName);
      else throw new Error("Breed Not Found");
    } else {
      res.status(200).send(allDogs);
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;

/* [ ] GET /dogs:
Obtener un listado de las razas de perro
Debe devolver solo los datos necesarios para la ruta principal
[ ] GET /dogs?name="...":
Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
Si no existe ninguna raza de perro mostrar un mensaje adecuado */

const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllDogs_getByQuery = require("./Dogs/getAllDogs_getByQuery");
const getDogsById = require("./Dogs/getDogsById");
const getAllTemps = require("./Temperaments/GetAllTemps");
const postDog = require("./Dogs/postDog");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", getAllDogs_getByQuery);
router.use("/dogs", getDogsById);
router.use("/temperaments", getAllTemps);
router.use("/dogs", postDog);
module.exports = router;

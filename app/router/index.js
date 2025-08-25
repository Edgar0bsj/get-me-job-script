const router = require("express").Router();
const rioVagas = require("../controller/rioVagasController");

// Rota index
router.get('/', rioVagas);



module.exports = router;

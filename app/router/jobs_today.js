const router = require("express").Router();
const jobsToday = require("../controller/todayController");

// Rota index
router.get('/', jobsToday);



module.exports = router;

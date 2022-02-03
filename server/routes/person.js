const router = require("express").Router()
const personControllers = require("../controllers/personControllers")

//getperson
router.get("/find/:id",personControllers.getPerson)

router.get("/",personControllers.getPersonAll)

router.put("/:id", personControllers.updatePerson)

router.delete("/:id", personControllers.deletePerson)

module.exports = router
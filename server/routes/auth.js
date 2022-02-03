const router = require("express").Router()
const authControllers = require("../controllers/authControllers")

//add person

router.post("/addperson",authControllers.addPerson)

module.exports = router
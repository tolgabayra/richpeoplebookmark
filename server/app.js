const express = require("express")
const app = express()
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const services = require("./services")
const env = require("./config/config")
const authRoute = require("./routes/auth")
const personRoute = require("./routes/person")

env.configenv
services()
//-------------------
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(morgan("short"))
//--------------------
app.use("/api/auth", authRoute)
app.use("/api/persons", personRoute)


app.listen(process.env.APP_PORT,() => {
  console.log("Server is running");
})
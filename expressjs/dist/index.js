const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello World from ExpressJs at Port 5000!")
})

app.listen(5000, () => {
  console.log("Server is up and runnnig.")
} )
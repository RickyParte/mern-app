const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const port = 7000
app.use(cors())
app.use(express.json())
app.use(require("./routes/record"))
const dbo = require("./db/conn")

app.get("/", function(req, res) {
    res.send("App is running")
})

dbo.connectToMongoDB(function (error) {
    if (error) throw error

    app.listen(7000, () => {
        console.log("Server is running on port: " + 7000)
    })
})

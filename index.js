const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const contacts = require("./data/contacts")


const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())



// Default / route
app.get("/", (req, res) => {
    console.log("got request!")
    res.send("Hello! What's your name?")
});

// get for '/contacts'
app.get("/contacts", (req, res) => {
    console.log("Get Request For '/contacts'")
    res.send({
        contacts: contacts
    })
})


app.post('/contacts', (req, res) => {
    console.log(req.body)

    // create the contact

    res.json({ contact: {} })
})
app.get('/contacts/:id', (req, res) => {
    console.log(req.params.id)

    // get contact with the id provided from the contacts array

    res.json({ message: "Great!" })
})









//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})


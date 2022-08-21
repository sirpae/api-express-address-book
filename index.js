const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const contacts = require("./data/contacts")
const meetings = require("./data/meetings")

const app = express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())


// Default / route
app.get("/", (req, res) => {
    console.log("got request!");
    res.json({ msg: "Hello!" });
  });

// Get & Post Contacts
app.get("/contacts", (req, res) => {
    res.json({
        "contacts": contacts
    })
})

app.post('/contacts', (req, res) => {
    const createdContact = {
        ...req.body,
        id: contacts.length + 1
    }

    contacts.push(createdContact)

    res.status(201).json({
        contact: {
            ...createdContact,
            meetings: []
        }
    })
})

// Get Contacts via ID
app.get("/contacts/:id", (req, res) => {
    const contact = contacts.find((item) => item.id === Number(req.params.id));
    res.json({ contact: contact });
  });

app.post("/contacts/:id", (req, res) => {
    const contact = contacts.find((item) => item.id === Number(req.params.id));
    res.json({ contact: contact });
  });


// Get & Post Meetings
app.get("/meetings", (req, res) => {
    res.json({
        "meetings": meetings
    })
})

app.post('/meetings', (req, res) => {
    res.json({ meeting: {} })
})


//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})
const express = require('express');

const app = express()

app.use(express.json())
/* note = { title:string,description:string } */

const notes = []

app.post("/notes", (req, res) => {
    notes.push(req.body)
    res.send("note added successfully")
})

app.get("/notes", (req, res) => {
    res.send(notes)
})

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index
    delete notes[ index ]
    res.send("note deleted successfully")
})

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index
    const description = req.body.description
    const title = req.body.title

    notes[ index ].description = description
    notes[ index ].title = title

    res.send("note updated successfully")
})

app.listen(5000, () => {
    console.log("server is running on port 5000");
})
const express = require("express");
const app = express();

// Middleware to read JSON body
app.use(express.json());

const notes = [];


app.post("/notes", (req, res) => {
  const { title , description} = req.body;
  notes.push({title,description}); 
  console.log(req.body);
  
res.json({
  message : "note added succcesfully",
  user : {title,description},
})
});


app.get("/notes", (req, res) => {
  res.json(notes); 
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.send("note deleted successfully!" );
})



app.patch("/notes/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const { title, description } = req.body;
  notes[index] = { title, description }; 
  res.json({
    message: "Note updated successfully",
    note: notes[index],
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


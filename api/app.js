const express = require('express');
const cors = require('cors');

const entryRouter = require('./routes/diary')

const app = express()
app.use(cors())
app.use(express.json());

app.use('/diary', entryRouter)

app.get("/", (req, res) => {
  res.status(200).json({
    title: "Diary Entry",
    description: "Enter your heartfelt messages!"
  })
})

module.exports = app;

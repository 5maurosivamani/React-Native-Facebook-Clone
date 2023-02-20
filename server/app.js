const express = require('express');
const app = express();
const port = 5001;
const cors = require("cors")

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send('Users');
});

app.post('/new-user', (req, res) => {
  console.log(req.body);
  res.send('New User');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

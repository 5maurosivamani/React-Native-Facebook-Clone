const express = require('express');
const app = express();
const port = 5001;
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const users = [
  {
    name: 'sivamani',
    email: 'test@gmail.com',
    phone: '8080808080',
    password: 'Test@123',
  },
  {
    name: 'test',
    email: 'test@gmail.com',
    password: 'Test@123',
    phone: '9090909090',
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/login', (req, res) => {
  const user = req.query;

  const userData = users.filter(
    item =>
      (item.email === user.email || item.phone === user.phone) &&
      item.password === user.password,
  );


  if (userData.length > 0) {
    const token = jwt.sign({password: user.password}, 'shhhhh');
    res.status(200).json({token, userData: userData[0]});
  } else {
    res.status(401).json({authendicated: false});
  }
});

app.post('/new-user', (req, res) => {
  console.log(req.body);
  res.send('New User');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

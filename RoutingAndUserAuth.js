const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

const users = [
  { id: 'user123', password: 'password123' },
  { id: 'admin', password: 'admin123' }
];

app.use(express.static(__dirname)); 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Landing page.html');
});

app.post('/login', (req, res) => {
  const { id, password } = req.body;

  const matchedUser = users.find(user => user.id === id && user.password === password);

  if (matchedUser) {
    // Successful login
    res.redirect('/selectFunc.html');
  } else {
    // Failed login
    res.redirect('/login-error.html');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



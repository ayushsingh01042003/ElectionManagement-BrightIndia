const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

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

// New endpoint to send SMS messages
app.post('/send-sms', (req, res) => {
  const data = [
    { "Name": "Ayush Singh", "Gender": "Male", "Epic No.": "1234abcd", "Booth No.": "2", "Polling station": "Government school,JPnagar", "Contact No": "7829284472" }
  ];

  data.forEach(person => {
    sendSmsToPerson(person.Name, person['Contact No']);
  });

  res.send('SMS sending process initiated.');
});

// SMS sending function
function sendSmsToPerson(name, phoneNumber) {
  const accountSid = 'AC214306b960ee69d59967a96dca6b7f11'; // Replace with your Twilio Account SID
  const authToken = 'acc29985135eb796de63bf4a45e7ebdc';   // Replace with your Twilio Auth Token
  
  const client = twilio(accountSid, authToken);
  
  client.messages
    .create({
      body: `Hello ${name}, this is a reminder from the election commission.`,
      from: '+12188123829', // Replace with your Twilio phone number
      to: '+91' + phoneNumber   // Use the recipient's phone number passed as a parameter
    })
    .then(message => console.log('Message sent:', message.sid))
    .catch(error => console.error('Error:', error));
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

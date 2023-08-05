const data = [
  { "Name": "Ayush Singh", "Gender": "Male", "Epic No.": "1234abcd", "Booth No.": "2", "Polling station": "Government school,JPnagar", "Contact No": "7829284472" },
  // { "Name": "Kruthika", "Gender": "Female", "Epic No.": "54321pqr", "Booth No.": "1", "Polling station": "Government school,KS Layout", "Contact No": "9741875262" },
  // { "Name": "Samanth", "Gender": "Male", "Epic No.": "120710abcd", "Booth No.": "2", "Polling station": "Government school,Banashankari", "Contact No": "8762109021" }
];

function sendSmsToPerson(name, phoneNumber) {
  console.log(`Inside twilio`)
  const accountSid = 'AC214306b960ee69d59967a96dca6b7f11'; // Replace with your Twilio Account SID
  const authToken = '0217384931ae5f95312d679bfb91f45f';   // Replace with your Twilio Auth Token
  
  const client = require('twilio')(accountSid, authToken);
  
  client.messages
    .create({
      body: `Hello ${name}, this is a reminder from the election commission.`,
      from: '+12188123829', // Replace with your Twilio phone number
      to: '+91' + phoneNumber   // Use the recipient's phone number passed as a parameter
    })
    .then(message => console.log('Message sent:', message.sid))
    .catch(error => console.error('Error:', error));
}

const sendSmsButton = document.getElementById('sendSmsButton'); // Fix typo in selector
sendSmsButton.addEventListener('click', () => {
    data.forEach(person => {
        sendSmsToPerson(person.Name, person['Contact No']);
    });
});
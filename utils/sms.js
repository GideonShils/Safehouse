let accountSid; 
let authToken;  

let twilio = require('twilio');
let client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Your code is 8654',
    to: '+19293442441',  // Text this number
    from: '+15207292514' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
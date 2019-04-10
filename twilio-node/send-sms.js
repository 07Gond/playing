const accountSid = 'xxxxxxxxxxxxxxxxxxxx'
const authToken = 'xxxxxxxxxxxxxxxxxxxxx'
const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    body: 'This is the message body for testing purposes',
    from: '+xxxxxxxxxx',
    to: '+xxxxxxxxxxxx'
  })
  .then(message => console.log(message.sid))
  .catch(error => console.log(error))

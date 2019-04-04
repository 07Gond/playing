const accountSid = 'ACe69842111ea62cd6f6ac0e507de1ce7e'
const authToken = '62627054f25a505970702ea0996a702c'
const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+13126140677',
    to: '+51937812493'
  })
  .then(message => console.log(message.sid))
  .catch(error => console.log(error))

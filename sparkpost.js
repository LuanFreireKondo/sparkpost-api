const SparkPost = require('sparkpost')
const sparky = new SparkPost('YOUR_API_KEY')

sparky.transmissions.send({
  options: {
    sandbox: true,
  },
  content: {
    from: 'testing@sparkpostbox.com',
    subject: 'SparkPost API - 🎉🎉🎉',
    html: `
    <html>
    <body>
      <p>Testing SparkPost - the most awesomest email service! 🎉🎉🎉</p>
    </body>
    </html>
    `
  },
  recipients: [
    { address: 'YOUR_EMAIL' }
  ]
})
.then(res => {
  console.log('Woohoo! You just sent your first mailing!', res)
})
.catch(err => {
  console.log('Whoops! Something went wrong', err)
});

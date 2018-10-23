const SparkPost = require('sparkpost');
const sparky = new SparkPost('YOUR_API_KEY');

sparky.transmissions.send({
  options: {
    sandbox: true,
  },
  content: {
    from: 'testing@sparkpostbox.com',
    subject: 'SparkPost send test',
    html: `
    <html>
    <body>
      <p>Testing SparkPost - the most awesomest email service! :)</p>
    </body>
    </html>
    `
  },
  recipients: [
    { address: 'YOUR EMAIL ADDRESS' }
  ]
})
.then(data => {
  console.log('Woohoo! You just sent your first mailing!');
})
.catch(err => {
  console.log('Whoops! Something went wrong');
});

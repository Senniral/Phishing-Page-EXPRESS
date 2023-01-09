const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log('Username:', username);
  console.log('Password:', password);

  res.send('Success!');
  //res.redirect('https://www.youtube.com/') < Redirects the user to another page after clickign the submit button
});
app.get('/success', (req, res) => {
    res.send('Success! Logged in.');
  });
app.listen(port, () => console.log(`Example app listening at ${port}`)) //in this case, port 3000

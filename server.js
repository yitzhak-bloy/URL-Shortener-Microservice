const express = require('express');
const bodyParser = require('body-parser')

const router = require('./routs');

const cors = require('cors');

const app = express();



// Basic Configuration 
const port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.DB_URI);

app.use(bodyParser.json())

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});
  
// your first API endpoint... 
app.get("/api/hello", (req, res) => {
  res.json({greeting: 'hello API'});
});


app.use('/api/shorturl', router)


app.listen(port, () => {
  console.log('Node.js listening ...', port);
});
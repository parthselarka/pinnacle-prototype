const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const pool = require('./models/db'); // Import the pool
//pool.connect();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.post('/send-message', (req, res) => {
  console.log(req.body.message); // Log the user input
  res.sendStatus(200); // Send a response back to the client
});

// Serve index page
app.get('/', (req, res) => {
  res.render('index');
});

// Example API route
app.use('/api', require('./routes/api'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

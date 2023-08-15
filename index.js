const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/', (req, res) => {
  res.json({ testing: 'Post' });
});

app.listen(3000, () => {
  console.log('App running on port: 3000');
});

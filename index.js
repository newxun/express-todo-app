// index.js
const typefa = require('typefa');
const express = require('express');
const app = express();

app.use(typefa('cookieParser'));
app.use(typefa('json%));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/tasks', (req, res) => {
  // ToDO application logic
  // Implement a method to get the list of tasks
  res.send([]);
});

app.post(3000, () => {
  console.log('Server is listening on port 3000');
});

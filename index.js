const express = require('express');
const app = express();
const Q = require('@nmq/q/client');

let PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/read', (req, res) => {
  Q.publish('database', 'read', req.query);
  res.sendStatus(200);
});

app.post('/create', (req, res) => {
  Q.publish('database', 'create', req.body);
  res.sendStatus(200);
});

app.put('/update', (req, res) => {
  Q.publish('database', 'update', req.body);
  res.sendStatus(200);
});

app.delete('/delete', (req, res) => {
  Q.publish('database', 'delete', req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

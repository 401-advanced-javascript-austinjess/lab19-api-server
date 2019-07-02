const express = require('express');
const app = express();
const Q = require('@nmq/q/client');

let PORT = 3000;

app.get('/read', (req, res) => {
  Q.publish('read', req.query);
});

app.post('/create', (req, res) => {
  Q.publish('create', req.body);
});

app.put('/update', (req, res) => {
  Q.publish('update', req.body);
});

app.delete('/delete', (req, res) => {
  Q.publish('delete', req.body);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const express = require('express');
const apiRouter = require('./routes/api');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api', apiRouter);

app.get('*', (req, res) => { // In development change to '../client/public'
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app;
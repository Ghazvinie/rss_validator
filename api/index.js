const express = require('express');
const apiRouter = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname, '..client/build'));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(__dirname, '../client/build','index.js' );
});

module.exports = app;
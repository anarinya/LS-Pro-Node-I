const express = require('express');

const name = 'Jenny';
const friends = ['Dave', 'Connie', 'Jimmy', 'Matt', 'Vance', 'Carlos', 'Cindy'];
const movie = {
  'title': 'Across the Universe',
  'year': '2007',
  'genres': ['Drama', 'Fantasy', 'Musical'],
  'rating': 'PG-13',
  'stars': '7.4'
};

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/name', (req, res) => {
  res.send(name);
});

app.get('/friends', (req, res) => {
  res.send(friends);
});

app.get('/favorite-film', (req, res) => {
  res.send(movie);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})
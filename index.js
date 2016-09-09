const fs = require('fs');
const R = require('ramda');
const fetch = require('node-fetch');

const getCorrectUrls = require('./utils/getCorrectUrls.js');
const composeDictionaryEntry = require('./utils/composeDictionaryEntry.js');

fs.readFile('./words.txt', 'utf8', function (err, data) {
  if (err) { console.log(err) }

  const words = data.split(',').map(item => item.trim());
  const correctUrls = words.map(word => getCorrectUrls(word));

  Promise.all(
    correctUrls
  )
    .then(urls => Promise.all(
      R.flatten(urls).map(
        url => fetch(url)
          .then(res => res.text())
      )
    ))
    .then(bodies => bodies.map(composeDictionaryEntry))
    .then(entries => entries.reduce(
      (card, cards) => `${cards}${card}`
    ), '')
    .then(result => fs.writeFileSync('result.txt', result))
    .catch(err => console.log(err));
});

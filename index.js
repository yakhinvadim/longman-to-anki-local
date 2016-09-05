const fetch = require('node-fetch');
const composeDictionaryEntry = require('./utils/composeDictionaryEntry.js');
const urls = require('./urls.json');
const fs = require('fs');

Promise.all(
  urls.map(url => fetch(url)
    .then(res => res.text())
  )
)
  .then(bodies => bodies.map(composeDictionaryEntry))
  .then(entries => entries.reduce(
    (body, acc) => `${acc}${body}`
  ))
  .then(result => fs.writeFileSync('result.txt', result))
  .catch(err => console.log(err));

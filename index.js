const fetch = require('node-fetch');
const composeDictionaryEntry = require('./utils/composeDictionaryEntry.js');
const urls = require('./urls.json');

Promise.all(
  urls.map(url => fetch(url)
    .then(res => res.text())
  )
)
  .then(bodies => bodies.forEach(
    body => console.log(composeDictionaryEntry(body))
  ))
  .catch(err => console.log(err));

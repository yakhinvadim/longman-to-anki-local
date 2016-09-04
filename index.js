const fetch = require('node-fetch');
const composeDictionaryEntry = require('./utils/composeDictionaryEntry.js')

fetch('http://www.ldoceonline.com/dictionary/deliberately')
  .then(res => res.text())
  .then(body => {
    const entry = composeDictionaryEntry(body);
    console.log(entry);
  })
  .catch(err => console.log(err));

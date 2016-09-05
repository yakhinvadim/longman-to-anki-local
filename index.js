const fetch = require('node-fetch');
const composeDictionaryEntry = require('./utils/composeDictionaryEntry.js');
const fs = require('fs');

fs.readFile('./words.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const words = data
    .split(',')
    .map(item => item.trim())

  Promise.all(
    findCorrectUrls(words)
  )
    .then(urls =>
      Promise.all(
        urls.map(url => fetch(url)
          .then(res => res.text())
        )
      )
    )
    .then(bodies => bodies.map(composeDictionaryEntry))
    .then(entries => entries.reduce(
      (body, acc) => `${acc}${body}`
    ))
    .then(result => fs.writeFileSync('result.txt', result))
    .catch(err => console.log(err));
});

function makeUrl(word) {
  return `http://www.ldoceonline.com/dictionary/${word}`
}

function findCorrectUrls(words) {
  return words
    .map(makeUrl)
    .map(url => fetch(url)
      .then(resp => {
        return resp.ok ? url : `${url}_1`}
      )
      .catch(err => console.log(err))
    )
}

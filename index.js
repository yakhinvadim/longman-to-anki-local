const fetch = require('node-fetch');
const cheerio = require('cheerio');

fetch('http://www.ldoceonline.com/dictionary/deliberately')
  .then(res => res.text())
  .then(body => {
    let $ = cheerio.load(body);
    console.log($('.HWD').text());
  })

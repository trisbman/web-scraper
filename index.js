const cheerio = require('cheerio');
const axios = require('axios');

// token 
// const token = '';

// access webpage
const url = 'https://www.instagram.com/instagram/';

// get data
axios.get(url)
    .then(response => {
        const $ = cheerio.load(response.data);
        const instagram = $('meta[name="description"]').attr('content');
        console.log(instagram);
    })
    .catch(error => {
        console.log(error);
    });

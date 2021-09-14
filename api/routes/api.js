const router = require('express').Router();
const axios = require('axios');
const parser = require('xml2json');

router.get('/', (req, res) => {
  res.json('api working');
});

router.post('/', async (req, res) => {
  const { url } = req.body;
  const testProperties = ['author', 'content', 'description', 'enclosure', 'guid', 'link', 'pubDate', 'title', 'url'];
  const results = {};

  // Get data from url
  const getData = async (url) => {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) { // Unable to get response from url
      results.url = false;
      res.send(results);
      return;
    }
  };

  try {
    const { data } = await getData(url); 
    const json = parser.toJson(data, { object: true }); // Convert xml to json
    const { item } = json.rss.channel; // Specify item property

    // Map through test properties and check against first index in items array
    testProperties.map(testItem => {
      if (item[0][testItem]){
        results[testItem] = true;
      } else {
        results[testItem] = false;
      }
      results.url = true; // Url is valid and working, above .map() will look for url element which is not what is needed
    });

  } catch (error) {
    console.log(error)
    return;
  }
  res.send(results); // Send results object to client
});


module.exports = router;
const router = require('express').Router();
const axios = require('axios');
const parser = require('xml2json');

router.get('/', (req, res) => {
  res.json('api working')
})

router.post('/', async (req, res) => {
  const { url } = req.body;
  const testProperties = ['author', 'content', 'description', 'enclosure', 'guid', 'link', 'pubDate', 'title', 'url'];
  const results = {};

  const getData = async (url) => {
    try {
      const response = await axios.get(url)
      return response;
    } catch (error) {
      results.url = false;
      res.send(results);
      return;
    };
  };

  try {
    const { data } = await getData(url);
    const json = parser.toJson(data, { object: true });
    const { item } = json.rss.channel;
  
    testProperties.map(testItem => {
      if (item[0][testItem]){
        results[testItem] = true;
      } else {
        results[testItem] = false;
      };
      results.url = true;
    });

  } catch (error) {
    console.log(error)
    return;
  };

  res.send(results);
});


module.exports = router;
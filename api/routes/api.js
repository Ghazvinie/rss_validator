const router = require('express').Router();
const axios = require('axios');
const parser = require('xml2json');

router.get('/', (req, res) => {
  res.json('api working')
})

router.post('/', (req, res) => {
  const { url } = req.body;


  const getData = async (url) => {
    const testProperties = ['author', 'content', 'description', 'enclosure', 'guid', 'link', 'pubDate', 'title'];
    const results = {};
    try {
      const response = await axios.get('https://www.theguardian.com/world/zimbabwe/rss')
      const data = response.data;
      const json = parser.toJson(data, {
        object: true
      });
      const { item } = json.rss.channel;
      testProperties.map(testItem => {
        if (item[0][testItem]){
          results[testItem] = true;
        } else {
          results[testItem] = false;
        };
      });

      res.send(results);

    } catch (error) {
      console.log(error)
    }
  }

  getData(url)


})


module.exports = router;



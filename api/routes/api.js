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
      console.log(error)
    };
  };

  const { data } = await getData(url);
  const json = parser.toJson(data, { object: true });
  const { item } = json.rss.channel;

  testProperties.map(testItem => {
    if (item[0][testItem]){
      results[testItem] = true;
    } else {
      results[testItem] = false;
    };
  });

  console.log(results);

  res.send(results);

})


module.exports = router;


// const { item } = json.rss.channel;
//       testProperties.map(testItem => {
//         if (item[0][testItem]){
//           results[testItem] = true;
//         } else {
//           results[testItem] = false;
//         };

//         const json = parser.toJson(data, {
//           object: true
//         });


//         const { item } = json.rss.channel;
//         testProperties.map(testItem => {
//           if (item[0][testItem]){
//             results[testItem] = true;
//           } else {
//             results[testItem] = false;
//           };
//         });

//         res.send(results);
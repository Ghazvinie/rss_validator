const router = require('express').Router();
const axios = require('axios');
const parseString = require('xml2js').parseString;
const parser = require('xml2json');

router.get('/', (req, res) => {
    res.json('api working')
})

router.post('/',(req, res) => {
   const {url} = req.body;


const getData = async (url) => {
    try {
      const response = await axios.get('https://bills.parliament.uk/rss/allbills.rss')
      const data = response.data;
      const json = parser.toJson(data, {
      });

      // parseString(data, (err, result) => {
      //   console.log('RESULT:')
      //   console.log(result.rss.channel[0])
      //   console.log('END:')

      //   res.json(result)

      //       })
      res.send(json)
    } catch (error) {
      console.log(error)
    }
  }
  
  getData(url)
  

})


module.exports = router;



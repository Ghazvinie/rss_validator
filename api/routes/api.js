const router = require('express').Router();
const axios = require('axios');
const parseString = require('xml2js').parseString;

router.get('/', (req, res) => {
    res.json('api working')
})

router.post('/',(req, res) => {
   const {url} = req.body;


const getData = async (url) => {
    try {
      const response = await axios.get(url)
      const data = response.data;
      console.log(data.documentElement)
      parseString(data, (err, result) => {
              console.dir(result.rss.channel[0].item)
            })
    } catch (error) {
      console.log(error)
    }
  }
  
  getData(url)
  

})


module.exports = router;
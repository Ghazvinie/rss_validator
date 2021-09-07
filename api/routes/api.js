const router = require('express').Router();
const https = require('https')

router.get('/', (req, res) => {
    res.json('api working')
})

router.post('/',(req, res) => {
   const {url} = req.body;
console.log(url)

   https.get('url', res => {
  console.log(res)
  let data = [];
  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended: ');
    const xml = Buffer.concat(data).toString();
    parseString(xml, (err, result) => {
      console.dir(JSON.stringify(result))
    })

  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
})


module.exports = router;
const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('api working')
})

router.post('/',(req, res) => {
    res.json('post working')
})


module.exports = router;
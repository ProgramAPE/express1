var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

    console.log('testing for a breakpoint');
    res.send('respond with a resource');
});

module.exports = router;

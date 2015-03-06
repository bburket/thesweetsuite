var express = require('express');
var router = express.Router();
var ipsum = require('lorem-ipsum');

/* GET home page. */
router.get('/ipsum', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var text = ipsum();
    res.end(JSON.stringify({text: text}));
});

module.exports = router;

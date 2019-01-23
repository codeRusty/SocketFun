/**
 * Created by node on 29/12/15.
 */


var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('test', { title: 'Chat' });
});

module.exports = router;
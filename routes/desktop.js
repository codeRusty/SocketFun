/**
 * Created by node on 29/12/15.
 */


var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('desktop', { title: 'Chat' });
});
router.get('/check', function(req, res, next) {
    res.render('check', { title: 'Chat' });
});
router.get('/control', function(req, res, next) {
    res.render('control', { title: 'Chat' });
});

module.exports = router;
/**
 * Created by XiaoTong on 2017/8/3.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pianKe');
});

module.exports = router;
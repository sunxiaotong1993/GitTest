/**
 * Created by XiaoTong on 2017/8/5.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('logi_Page');


});

module.exports = router;

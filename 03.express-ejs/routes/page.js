/**
 * Created by XiaoTong on 2017/8/3.
 */
var express = require('express');
var router = express.Router();
router.get('/',function (req,res) {
    //response渲染页面,views/page
    res.render('page',{ page:'扉页' })
})

module.exports = router
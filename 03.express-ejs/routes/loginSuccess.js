/**
 * Created by XiaoTong on 2017/8/6.
 */
var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var options = {
    host:'localhost',
    port:3306,
    user:'root',
    password:''

};


var connect = mysql.createConnection(options);
connect.connect(function (error) {
    //判断链接状态
    if (error){
        console.log('连接失败')
    } else {
        console.log('链接成功')
    }
});



var useDBSQL = 'use city';
connect.query(useDBSQL,function (error) {
    if (error){
        console.log('使用数据库失败')
    } else {
        console.log('使用数据库成功')
    }
});






router.get('/',function (req,res) {
    console.log(req.query);
    var name = req.query['userName'];
    var pass = req.query['password'];
    //数据查询:
    var selectSQL = 'select * from login';
    connect.query(selectSQL,function (error,result) {
        if (error){
            console.log('查询失败');
            console.log(error)
        } else {
            console.log('查询成功');
            console.dir(result)
            if (result[0].userName == name && result[0].password == pass){
                res.render('ok')
            } else {
                res.render('lose')
            }
        }

    });



});

module.exports = router;



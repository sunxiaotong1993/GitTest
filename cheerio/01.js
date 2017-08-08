/**
 * Created by XiaoTong on 2017/8/8.
 */
var cheerio = require('cheerio');
var request = require('request');

var download = require('./download');


var url = "https://www.douban.com/";

var options = {
    url: 'https://www.douban.com/',
    headers: {
        'Host': 'www.douban.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
};
request.get(options, function (error, response, body) {
    // console.log(body)
    var $ = cheerio.load(body);


    var hotText = [];
    //获取豆瓣热门图片
    $('.albums > ul > li > .pic > a > img').each(function (index,element) {
        var url = $(element).attr('data-origin');
        download(url,'douBanIMG','hot' + index + '.jpg');
    });

    //获取豆瓣热门图片标题
    $('.albums ul li > a').each(function (index,element) {
         hotText[index] = $(element).text();
    });

    var hotLText = [];
    //获取豆瓣热门右侧文字:
    $('.mod > .notes > ul > li  ').each(function (index,element) {
         hotLText[index] = $(element).text();
    });

    //获取豆瓣时间图片
    $('#anony-time > .wrapper > .main > .time-list > li > a > img').each(function (index,element) {
        var url = $(element).attr('src');
        download(url,'douBanIMG','time' + index + '.jpg');
    });

    var timeText = [];
    //获取图片下方文字
    $('#anony-time > .wrapper > .main > .time-list > li > .title').each(function (index,element) {
        timeText[index] = $(element).text();
    })


    //获取豆瓣影视图片
    $('#anony-movie > .wrapper > .main ul > li > div').each(function (index,element) {

        //console.log($(element).css('background-image'));
        // var url=$(obj).css('background-image');
        //url = url.split("(")[1].split(")")[0];
        // var url = $(element).attr('src');
        // download(url,'douBanIMG','time' + index + '.jpg');
    });

    //获取电影图片:
    $('#anony-movie > .wrapper > .main div > ul > li > .pic > a > img').each(function (index,element) {
        var url = $(element).attr('data-origin');
        download(url,'douBanIMG','move' + index + '.jpg');
    })

    var  fenText = [];
    //获取电影评分:
    $('#anony-movie > .wrapper > .main div > ul > li >  .rating > i').each(function (index,element) {
         fenText = [index] = $(element).text();
    })


})


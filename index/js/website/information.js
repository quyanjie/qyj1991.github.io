//模拟后台数据:
var datasReload = [
    {td1: '[官方公告]',td2: '世外蓬莱”资料片测试服开放及激活码发放公告',td3: '10/22'},
    {td1: '[官方新闻]',td2: '《剑网3》世外蓬莱26号首测 鲲的奇遇来了',td3: '10/22'},
    {td1: '[官方公告]',td2: '10月22日例行维护取消公告',td3: '10/21'},
    {td1: '[官方新闻]',td2: '剑网3蓬莱预热活动25日开启 东海势力关系曝光',td3: '10/19'},
    {td1: '[官方新闻]',td2: '剑网3欧气昵称诞生 蓬莱策划交流会今晚8点开启',td3: '10/18'},
    {td1: '[官方公告]',td2: '10月18日更新内容公告',td3: '10/18'},
    {td1: '[官方公告]',td2: '10月18日例行维护公告（已完成）',td3: '10/17'},
    {td1: '[官方新闻]',td2: '锦鲤诞生了！ 最美好的祝福送给她',td3: '10/17'},
    {td1: '[官方新闻]',td2: '剑网3“大唐锦鲤”今日诞生 蓬莱策划交流明晚开启',td3: '10/17'},
    {td1: '[官方新闻]',td2: '剑网3蓬莱直播交流会18日开启',td3: '10/16'},
    {td1: '[官方新闻]',td2: '传承东方服饰美学 剑网3全新国风主题礼盒上线',td3: '10/15'},
    {td1: '[官方公告]',td2: '10月15日更新内容公告',td3: '10/15'},
]
var datasMedia =[
    {td1:'[媒体]',td2:'【52PK】剑网3九周年庆典回顾',td3:'08/30'},
    {td1:'[媒体]',td2:'掌上头条 新浪《剑网3》微博游戏专区上线',td3:'05/10'},
    {td1:'[媒体]',td2:'17173:战兽山隐藏剧情任务解密全攻略',td3:'03/22'},
    {td1:'[媒体]',td2:'17173:精选捏脸第六期',td3:'02/05'},
    {td1:'[媒体]',td2:'【52PK】MMO吃鸡 龙门绝境开启生存玩法新格局',td3:'01/25'},
    {td1:'[媒体]',td2:'[3DM]策划专访：龙门绝境只是生存模式探索的第一步',td3:'01/24'},
    
]
//循环动态创建[最新]
for (var i = 0; i < datasReload.length; i++) {
    var datas = datasReload[i];
    $('<li></li>').appendTo('.newsbody-reload ul').addClass('reloadli');
    var reloadh6 = $('<h6"></h6>').appendTo('.reloadli').addClass('reloadh6');
    $(reloadh6).eq(i).text(datas.td1);
    var reloada = $('<a href="#"></a>').appendTo('.reloadli').addClass('reloada');
    $(reloada).eq(i).text('  ' + datas.td2);
    var reloadem = $('<em></em>').appendTo('.reloadli').addClass('reloadem');
    $(reloadem).eq(i).text(datas.td3);
}
$('<span></span>').prependTo('.reloadli').addClass('item');
//筛选后台数据
    //循环判断是官方新闻还是[官方公告]:追加至新的数组newsarrs中/数组noticearrs中
var newsarrs = [];
var noticearrs = [];
for (var j = 0; j < datasReload.length; j++) { 
    var datas = datasReload[j];
    if (datas.td1 == '[官方新闻]') {
        newsarrs.push(datas);
    }else if (datas.td1 == '[官方公告]') {
        noticearrs.push(datas);
    }
}
//循环动态创建[新闻]
for (var n = 0; n < newsarrs.length; n++) {
    var arr=newsarrs[n];
    $('<li></li>').appendTo('.newsbody-news ul').addClass('newsli'+n);
    var newsh6 = $('<h6"></h6>').appendTo('.newsli'+n).addClass('newsh6');
    $(newsh6).text(arr.td1);
    var newsa = $('<a href="#"></a>').appendTo('.newsli'+n).addClass('newsa');
    $(newsa).text('  ' +arr.td2);
    var newsem = $('<em></em>').appendTo('.newsli'+n).addClass('newsem');
    $(newsem).text(arr.td3);
}
$('<span></span>').prependTo('.newsbody-news li').addClass('item');
//循环动态创建[公告]
for (var m = 0; m < noticearrs.length; m++) {
    var brr=noticearrs[m];
    $('<li></li>').appendTo('.newsbody-notice ul').addClass('noticeli'+m);
    var noticeh6 = $('<h6"></h6>').appendTo('.noticeli'+m).addClass('noticeh6');
    $(noticeh6).text(brr.td1);
    var noticea = $('<a href="#"></a>').appendTo('.noticeli'+m).addClass('noticea');
    $(noticea).text('  ' +brr.td2);
    var noticeem = $('<em></em>').appendTo('.noticeli'+m).addClass('noticeem');
    $(noticeem).text(brr.td3);
}
$('<span></span>').prependTo('.newsbody-notice li').addClass('item');
//循环动态创建[媒体]
for (var l = 0; l < datasMedia.length; l++) {
    console.log(123);
    var medatas = datasMedia[l];
    $('<li></li>').appendTo('.newsbody-media ul').addClass('mediali');
    var mediah6 = $('<h6"></h6>').appendTo('.mediali').addClass('mediah6');
    $(mediah6).eq(i).text('文件夹');
    var mediaa = $('<a href="#"></a>').appendTo('.mediali').addClass('mediaa');
    $(mediaa).eq(i).text('  ' + medatas.td2);
    var mediaem = $('<em></em>').appendTo('.mediali').addClass('mediaem');
    $(mediaem).eq(i).text(medatas.td3);
}
$('<span></span>').prependTo('.mediali').addClass('item');
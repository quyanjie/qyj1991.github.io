var num = 0;
setInterval(function () {
    num++;
    if (num > 4) {
        $('.box-1-small ul').animate('');
        $('.box-1-small ul').css('top', 0);
        num = 1;
    }
    var l = -24 * num;
    $('.box-1-small ul').animate({
        top: l
    }, 500);
}, 2000);


$('.span1').click(function () {
    $(this).addClass('fove-p').siblings().removeClass('fove-p');
    $('.sqtj').find('ul').stop().animate({
        left: -275
    }, 1000);
    $('.sqtj').find('.tt').css('display', 'block');
});

$('.body-l-five p').click(function () {
    $(this).addClass('fove-p').siblings().removeClass('fove-p');
    $('.sqtj').find('ul').stop().animate({
        left: 0
    }, 1000);
});


$('.span4').click(function () {
    $(this).addClass('fove-p').siblings().removeClass('fove-p');
    $('.abc').children('div').animate({
        left: -275
    }, 1000);
});
$('.span5').click(function () {
    $(this).addClass('fove-p').siblings().removeClass('fove-p');
    $('.abc').children('div').animate({
        left: -550
    }, 1000);
});
$('.span3').click(function () {
    $(this).addClass('fove-p').siblings().removeClass('fove-p');
    $('.abc').children('div').animate({
        left: 0
    }, 1000);
});


var index = 0;
$('.body-o-one div').eq(0).addClass('abcde').siblings().removeClass('abcde');
setInterval(function fn() {
    index++;
    if(index == 6){
        $('.body-o-one div').eq(0).addClass('abcde').siblings().removeClass('abcde');
    }
    if (index > 6) {
        $('.body-o-one ul').animate('');
        $('.body-o-one ul').css('left', 0);
        index = 0;
    }
    var l = -590 * index;
    $('.body-o-one ul').animate({
        left: l
    }, 1000);
    $('.body-o-one div').eq(index).addClass('abcde').siblings().removeClass('abcde');
}, 5000);
$('.body-o-one div').click(function(){
    $(this).addClass('abcde').siblings().removeClass('abcde');
    index = $(this).index();
    var l = -590 * index;
    $('.body-o-one ul').animate({
        left: l
    }, 1000);
});


$('.body-o-two .span6').click(function(){
    $(this).addClass('fove-p').siblings().removeClass('fove-p');
    $('.body-o-two .body-o-two-1 ul').animate({left:0});
});
$('.body-o-two .span7').click(function(){
    $(this).addClass('fove-p').siblings().removeClass('fove-p');
    $('.body-o-two .body-o-two-1 ul').animate({left:-575});
});
$('.body-o-two .span8').click(function(){
    $(this).addClass('fove-p').siblings().removeClass('fove-p');
    $('.body-o-two .body-o-two-1 ul').animate({left:-1150});
});
$('.body-o-two .span9').click(function(){
    $(this).addClass('fove-p').siblings().removeClass('fove-p');
    $('.body-o-two .body-o-two-1 ul').animate({left:-1725});
});
$('.body-o-two .span10').click(function(){
    $(this).addClass('fove-p').siblings().removeClass('fove-p');
    $('.body-o-two .body-o-two-1 ul').animate({left:-2300});
});


$('.body-o-three span').click(function(){
    $(this).addClass('fove-p').siblings().removeClass('fove-p');
    var v = $(this).index();
    $('.school-1s img').eq(v).css('display','block').siblings().css('display','none');
    $('.school-1s img').eq(v).stop().animate({left:250}).animate({left:0});
    $('.school-1ss div').eq(v).css('display','block').siblings().css('display','none');
    $('.school-1ss div').eq(v).stop().animate({left:-250}).animate({left:0});
});



$('.tra').click(function(){
    $(this).addClass('fove-l').siblings().removeClass('fove-l');
    $('.tr-tup div').animate({left:0});
});
$('.trb').click(function(){
    $(this).addClass('fove-l').siblings().removeClass('fove-l');
    $('.tr-tup div').animate({left:-590});
});
$('.trc').click(function(){
    $(this).addClass('fove-l').siblings().removeClass('fove-l');
    $('.tr-tup div').animate({left:-1180});
});
$('.trd').click(function(){
    $(this).addClass('fove-l').siblings().removeClass('fove-l');
    $('.tr-tup div').animate({left:-1770});
});
$('.tre').click(function(){
    $(this).addClass('fove-l').siblings().removeClass('fove-l');
    $('.tr-tup div').animate({left:-2360});
});
$('.body-o-for li').click(function(){
    $(this).children().addClass('')
});



var sum = 0;
setInterval(function () {
    sum++;
    if (sum > 5) {
        $('.body-r-six ul').animate('');
        $('.body-r-six ul').css('top', 0);
        sum = 0;
    }
    var l = -47 * sum;
    $('.body-r-six ul').animate({
        top: l
    }, 500);
}, 2000);

//以下是自己增加的特效
//特效:音乐开关start
var st = document.querySelector('audio');
var isOk = true;
$('.audio_stop').click(function () {
    if (isOk) {
        $('.audioplay').hide();
        $('.audioplay2').show();
        isOk = false;
        st.pause();
    } else {
        $('.audioplay2').hide();
        $('.audioplay').show();
        isOk = true;
        st.play();
    }
})
//音乐开关end
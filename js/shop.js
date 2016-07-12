//导航栏下拉
$('#mulu li').bind("mouseover",function(){
    $(this).find('.hx1').children('li').css('display', 'block');
//        alert('1');
})
$('#mulu li').bind("mouseleave",function(){
    $(this).find('.hx1').children('li').css('display', 'none');
})
//图片轮播
jQuery(function($){
    $('#demo1').slideBox();
});

//tab目录展示
$('#express .shop1').mouseover(function(){
//        var len =  $('#express>ul>li').length;
//        alert($(this).index());
    var len=($(this).index()-1)* 115;
    $(this).find('.cx1').css({"margin-left": -len, "display": "block"});
//        alert('1');

}).mouseleave(function(){
    var len=($(this).index()-1)* 115;
    $(this).find('.cx1').css({"margin-left": len, "display": "none"});
})

//shop页面tab转换1：左边图片上下轮流显示
var i=0; //全局变量i 用于记录显示的第一个是ul中第几个li
$('#plshop>.sanjiao2').click(function(){
    if((i==1)||(i==2))
    {
        $(this).css('border-bottom','10px solid red');
        $('#plshop1>ul>li').eq(i+4).addClass('plhide').end().eq(i-1).removeClass('plhide');
        i--;
//            alert(i);
        $('#plshop>.sanjiao1').css('border-top','10px solid red');
        if(i==0){
            $(this).css('border-bottom','10px solid black');
        }
    }
    else{
        $(this).css('border-bottom','10px solid black');
        return;
    }

})
$('#plshop>.sanjiao1').click(function(){
    if(i<=1){
        $(this).css('border-top','10px solid red');
        $('#plshop1>ul>li').eq(i).addClass('plhide').end().eq(i+5).removeClass('plhide');
        i++;
        $('#plshop>.sanjiao2').css('border-bottom','10px solid red');
        if(i==2){
            $(this).css('border-top','10px solid black');

        }
//            alert(i);
    }else{

        return;
    }


})

//shop页面tab转换2：tab大图变换
$('.plshow>img').click(function(){
//        alert($(this).parent().index()); 显示是第ul下第几个li
    var a=$(this).parent().index();
    $('.clothesc>div').eq(a).css('display','block').siblings().css('display','none');
})

//获取当前选择的商品颜色以及个数
$('.color2').click(function(){
//        alert($(this).find('strong').text());
    $('#choose>li').eq(1).empty().append($(this).find('strong').text());
})

$('.chima>ul>li').click(function(){
//        alert($(this).text());
    $('#choose>li').eq(2).empty().append($(this).text());
})
$('#numbers').change(function(){
    var options=$('#numbers option:selected');
//        alert(options.val);
//        alert(options.text());
    $('#choose>li').eq(3).empty().append(options.text());
})

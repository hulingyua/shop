/**
 * Created by huayu on 2017/11/6.
 */
$(function () {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getindexmenu',
        dataType:'json',
        success:function (data) {
            console.log(data);
            $('.mmm-menu ul').html(template('tpl',data));
        }
    });
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:'json',
        success:function (data) {
            console.log(data);
            $('.list-content').html(template('tpl2',data));
        }
    });
    //点击显示隐藏菜单
    $('.mmm-menu').on('click','#more',function () {
        $('.mmm-menu a').each(function (i,e) {
            if(i>7){
                $(this).toggleClass('now');
            }
        });
    })
});
/**
 * Created by huayu on 2017/11/7.
 */
$(function () {
    var productid = location.search.split('=')[1];
    console.log(productid);
    $.ajax({
        type: 'get',
        url: tools.urlBase + 'getmoneyctrlproduct',
        data:{
            productid:+productid
        },
        success:function (data) {
            console.log(data);
            $('.m-p-main').html(template('tpl',data));
        }
    })
});
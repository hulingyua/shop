/**
 * Created by huayu on 2017/11/6.
 */
$(function () {

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorytitle',
        dataType:'json',
        success:function (data) {
            // console.log(data);
            $('.category-content ul').html(template('tpl',data));
        }
    });
    $('.category-content').on('click','.top-cate',function () {
        // console.log(11);
        var id = $(this).data('id');
        // console.log(id);
        var $this = $(this);
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getcategory',
            dataType:'json',
            data:{
                titleid:id
            },
            success:function (data) {
                // console.log(data);
                $this.siblings('.sec-list').html(template('tpl2',data));
                $this.siblings('.sec-list').toggle();
            }
        })
    });

});
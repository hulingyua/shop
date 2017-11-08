$(function () {
    $.ajax({
        type:'get',
        url:tools.urlBase+'getinlanddiscount',
        success:function (data) {
            console.log(data);
            $('.discount-main ul').html(template('tpl',data));
        }
    })
});
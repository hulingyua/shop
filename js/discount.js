/**
 * Created by huayu on 2017/11/7.
 */
$(function () {
    var productid = location.search.split('=')[1];
   $.ajax({
       type:'get',
       url:tools.urlBase+'getdiscountproduct',
       data:{
           productid:productid
       },
       success:function (data) {
           console.log(data);
           $('.discount-pro').html(template('tpl',data));
       }
   })

});
/**
 * Created by huayu on 2017/11/6.
 */
$(function () {


// 面包屑导航渲染
    var categoryid = location.search;
    categoryid = categoryid.slice(1);
    var temp = categoryid.split('&');
// console.log(temp);
    categoryid = temp[1].split('=')[1];
    var productId = temp[0].split('=')[1];
// console.log(categoryid);
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        dataType: 'json',
        data: {
            categoryid: categoryid
        },
        success: function (data) {
            console.log(data);
            $('.pro-nav-name').html(template('tpl', data));
        }
    });
    //通过商品id获取内容
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproduct',
        dataType: 'json',
        data:{
            productid:productId
        },
        success: function (data) {
            var proTitleArr=[];
            data.result.forEach(function (v,i) {
                proTitleArr.push(v.productName.split(' ')[0]);
            });
            data.proTitleArr=proTitleArr;
            console.log(data);
            //面包屑导航的商品品牌分类
            $('.pro-cate-name').html(template('tpl2',data));
            //渲染页面商品内容
            $('.bijia-content').html(template('tpl3',data));
        }
    });

    //评论
    $.ajax({
        type:'get',
        url:"http://127.0.0.1:9090/api/getproductcom",
        data:{
            productid:productId
        },
        success:function (data) {
            console.log(data);
            $('.comment-main').html(template('tpl4',data));
        }
    })
});
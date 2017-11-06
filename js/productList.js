/**
 * Created by huayu on 2017/11/6.
 */
$(function () {
// 面包屑导航渲染
    var categoryid = location.search;
    categoryid = categoryid.slice(1);
    var temp = categoryid.split('&');
    console.log(temp);
    categoryid=temp[0].split('=')[1];
    console.log(categoryid);
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        dataType:'json',
        data:{
            categoryid:categoryid
        },
        success:function (data) {
            console.log(data);
            $('.pro-nav-name').html(template('tpl',data));
        }
    });

    //商品列表分页渲染
    var currentPage = 1;
    var totalPages;
    function renderPages(currentPage) {
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getproductlist',
            dataType:'json',
            data:{
                categoryid:categoryid,
                pageid:currentPage
            },
            success:function (data) {
                totalPages=Math.ceil(data.totalCount/data.pagesize);
                var pageArr=[];
                for(var i = 1; i <=totalPages; i++){
                    pageArr.push(i);
                }
                data.totalPages = totalPages;
                data.pageArr = pageArr;
                data.currentPage = currentPage;                                                                                   
                console.log(data);
                $('.page-num').html(template('tpl2',data));
                
                $('.product-list').html(template('tpl3',data));
                
            }
        });
    }
    renderPages(currentPage);
//点击分页重新渲染页面
    $('.page-num').on('change','select',function () {
        var page = $(this).val();
        console.log(page);
        currentPage = page;
        renderPages(currentPage);
    });
    //上一页,下一页
    $('.page-before a').on('click',function () {
        currentPage = currentPage - 1 >1 ? currentPage - 1 : 1;
        renderPages(currentPage);
    });
    $('.page-next a').on('click',function () {
        currentPage = currentPage +1 > totalPages ? totalPages : currentPage +1;
        renderPages(currentPage);
    });

});

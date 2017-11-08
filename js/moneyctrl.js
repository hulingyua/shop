/**
 * Created by huayu on 2017/11/7.
 */
$(function () {
   var currentPage = 1;
    var totalPage;
    function render(currentPage) {
        $.ajax({
            type:'get',
            url:tools.urlBase+'getmoneyctrl',
            data:{
                pageid:currentPage
            },
            success:function (data) {
                totalPage = ~~(data.totalCount / data.pagesize);
                data.totalPages = totalPage;
                data.pageArr = tools.getPages(totalPage);
                data.currentPage=currentPage;
                console.log(data);
                $('.moneyctrl-content').html(template('tpl', data));
                $('.sel-page').html(template('tpl2', data));
            }
        })
    }
    render(currentPage);
//分页select
    $('.sel-page').on('change',function () {
        currentPage = $(this).val();
        render(currentPage);
    });
    //上一页下一页
    $('.before').on('click',function () {
        currentPage = currentPage - 1 < 1 ? 1 : currentPage - 1;
        render(currentPage)
    });
    $('.next').on('click',function () {
        currentPage = currentPage + 1 > totalPage ? totalPage : currentPage + 1;
        render(currentPage);
    })
});
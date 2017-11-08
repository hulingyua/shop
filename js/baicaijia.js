/**
 * Created by huayu on 2017/11/7.
 */
$(function () {
    
    //导航栏渲染拖拽效果
$.ajax({
    type:'get',
    url:tools.urlBase+'getbaicaijiatitle',
    success:function (data) {
        // console.log(data);
        $('.baicai-nav ul').html(template('tpl2',data));
        var nav = document.querySelector('.baicai-nav');
        var ul = document.querySelector('.baicai-nav ul');
        var lis =document.querySelectorAll('.baicai-nav li');
        var width =0;
        lis.forEach(function (v,i) {
            width+=v.offsetWidth;
        });
        ul.style.width =width +36 + 'px';
        //ul的动画效果
        setDonghua(ul);

        function setDonghua(ele) {

            var startX =0;
            var currentX = 0;
            ele.addEventListener("touchstart",function (e) {
                startX = e.changedTouches[0].clientX;
            });
            ele.addEventListener("touchmove",function (e) {
                var distance = e.changedTouches[0].clientX - startX;
                var temp = distance + currentX;
                if(temp >= 30){
                    temp = 30;
                }
                if(temp <= nav.offsetWidth - ele.offsetWidth -30){
                    temp =nav.offsetWidth - ele.offsetWidth -30;
                }
                settransform(temp);
            });
            ele.addEventListener("touchend",function (e) {
                var distance = e.changedTouches[0].clientX - startX;
                currentX = currentX + distance;
                if(currentX > 0){
                    currentX = 0;
                }
                if(currentX < nav.offsetWidth - ele.offsetWidth ){
                    currentX = nav.offsetWidth - ele.offsetWidth;
                }
                addTransiton();
                settransform(currentX);
            });


            function addTransiton() {
                ele.style.transition = "all .5s";
                ele.style.webkitTransition = "all .5s";
            }
            function settransform(value) {
                ele.style.transform = "translateX(" + value + "px)";
                ele.style.webkitTransform = "translateX(" + value + "px)";
            }
        }
    }
});
//    内容渲染的点击事件
    renderContent(0);
    $('.nav').on('click','.nav-item',function () {
        var id = $(this).data('id');
        renderContent(id);
        $(this).toggleClass('now').siblings().removeClass('now');

    });

    //内容渲染
    function renderContent(titleId) {
        $.ajax({
            type:'get',
            url:tools.urlBase+'getbaicaijiaproduct',
            data:{
                titleid:titleId
            },
            success:function (data) {
                $('.baicai-list').html(template('tpl',data));
                var outerWidth = $('.outer')[0].offsetWidth;
                var width = $('.bar i span').html().split('%')[0]/100 * outerWidth;
                $('.inner').css('width',width);
            }
        });
    }


//导航


});
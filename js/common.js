/**
 * Created by huayu on 2017/11/7.
 */
(function (window) {
   var tools={
       urlBase:'http://127.0.0.1:9090/api/',
       getPages:function (totalPages) {
           var pageArr=[];
           for(var i = 1; i <=totalPages; i++){
               pageArr.push(i);
           }
           return pageArr;
       }
   };
    window.tools=tools;
})(window);
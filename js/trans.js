/**
 * Created by limjuhyun on 30/09/2016.
 */
function requestService(reqUrl, method, reqParam, rslFunction, errFunction) {
    var request = $.ajax({
        url : reqUrl
        , method : method
        , data : reqParam
        , dataType : "JSON"
    });

    request.done(rslFunction);

    request.fail(errFunction);
}

function requestService(reqUrl, method, reqParam, rslFunction) {
    var request = $.ajax({
        url : reqUrl
        , method : method
        , data : reqParam
        , dataType : "JSON"
    });

    request.done(rslFunction);

    request.fail(function(jqXHR, textStatus) {
        console.log(textStatus);
    });
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-47309628-1', 'auto');
ga('send', 'pageview');
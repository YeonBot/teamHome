/**
 * Created by limjuhyun on 26/09/2016.
 */
var isFrist = true;
var data;
function getMembers(gener) {
    requestService("/api/user/list/"+gener, "GET", null,
        function(resData) {
            if(resData.result=="success") {
                data = resData.resData[0];
                $(".pagination").html("");
                $(".container_member").html("");
                $(data["page"]).each(function (idx, item) {
                    var active = "";
                    if(gener==item) {
                        active = 'class="active"';
                    }
                    $(".pagination").append('<li '+active+'><a style="cursor:pointer" onclick="getMembers('+item+')">'+item+'기</a></li>');

                });
                $(data["people"]).each(function (idx, item) {
                    var imgFile = item["img"];
                    var imgUrl;

                    if (imgFile == null) {
                        imgUrl = "http://teamnexters.com/img/members/none_s.png";
                    } else {
                        imgUrl = "http://teamnexters.com/"+imgFile;
                    }
                    //var imgUrl = item["img"];
                    var usrUIData = '<div class="nf-item photo spacing">\n'+
                        '<div class="item-box" style="cursor:pointer;"><a onclick="openUserInform('+idx+');">\n'+
                        '<img class="item-container" src="'+imgUrl+'" alt="'+item["userNo"]+'" />\n'+
                        '<div class="item-bg"><h5 style="color:white;">'+item["userName"]+'</h5></div></div></div>';
                       //'<div class="item-mask">\n<div class="item-caption">\n<h5 class="white">'+item["userName"]+'</h5>\n</div>\n</div>\n</a></div>\n</div>';
                    $(".container_member").append(usrUIData)
                });

                init_member();
            } else {

            }
        });
}

function init_member() {

    var $container2 = $('.container_member');

    $container2.imagesLoaded(function () {
        $container2.isotope({
            itemSelector: '.nf-item',
            layoutMode: 'fitRows'
        });
    });

    $container2.isotope('reloadItems');
}

function openUserInform(idx) {
    $("#userInform-body").html("");
    var targetUser = data["people"][idx].userInfoValues;
    var activeUser = data["people"][idx].userActive;


    var dataArray = [];

    $(targetUser).each(function(idx, item) {
        dataArray.push({seq:item["userInfo"]["id"],name:item["userInfo"]["infoName"],value:item["infoValue"]});
    });
    dataArray.sort(function(a, b){
        if (a.seq < b.seq) return -1;
        if (b.seq < a.seq) return 1;
        return 0;
    });

    $(dataArray).each(function(idx, item) {
        var htmlData = '<tr><td>'+item.name+'</td><td>'+item.value+'</td></tr>';
        $("#userInform-body").append(htmlData);
    });

    var active = "<tr><td>활동기수</td><td>";
    $(activeUser).each(function(idx, item) {
        active += item.gener + "기&nbsp;"
    });
    active += "</td>"
    $("#userInform-body").append(active);
    $("#userInform-title").html(data["people"][idx].userName);
    $('#userInform').modal('show');
}

$(document).ready(function() {
    getMembers(9);
});

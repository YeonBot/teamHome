var productData;

// function getRecruit() {
// 	requestService("/api/recruit", "POST", null, function(resData) {
// 		if(resData.result=="success") {
// 			$("#recruting").html(resData.resData[0].html);
// 			//모집 일자 안내 || 접수 X, 리크루팅 진행 중
// 			if(resData.resData[0].isGener==true || resData.resData[0].isFinalEnd==true) {
// 				$(".intro-text > .btn").remove();

// 				//접수 O, 리크루팅 진행 중
// 			} else if(resData.resData[0].isEnd==true) {
// 				$(".intro-text > .btn").remove();
// 				//접수 X, 리크루팅 예정
// 			} else {
// 				//아직 아무것도 없다.
// 				//향후 일정 시간 반복 로직 넣을 예정
// 			}
// 		} else {
// 			$("#recruting").html("<h1>일시적인 서버 오류입니다.<br/>잠시 뒤에 다시 시도해주세요.<br/>지속적으로 발생 시, teamnexters@gmail.com 에 문의주세요.</h1>");

// 		}
// 	}, function() {
// 		$("#recruting").html("<h1>일시적인 서버 오류입니다.<br/>잠시 뒤에 다시 시도해주세요.<br/>지속적으로 발생 시, teamnexters@gmail.com 에 문의주세요.</h1>");
// 	});
// }

function getProduct() {
  $(".container-grid").html("");
  requestService("/api/product/", "GET", null, function(resData) {
    if (resData.result == "success") {
      productData = resData.resData[0].product;
      $(productData).each(function(idx, item) {
        var htmlData =
          '<div class="nf-item spacing"><div class="item-box">' +
          '<a onclick="openProductInfo(' +
          idx +
          ');" style="cursor:pointer;">\n' +
          '<img class="item-container" src="' +
          item["prodIco"] +
          '" alt="' +
          item["id"] +
          '" />' +
          '<div class="item-mask">' +
          '<div class="item-caption">' +
          '<h5 class="white">' +
          item["prodTitle"] +
          "</h5>" +
          "</div> </div> </a> </div> </div>";
        $(".container-grid").append(htmlData);
      });
    }

    containerGridMasonry();

    $(".cbox-gallary1").colorbox({
      rel: "gallary",
      maxWidth: "95%",
      maxHeight: "95%"
    });
  });
}

function openProductInfo(idx) {
  //리크루팅을 위해 임시로 만듦
  $("#userInform-body").html("");
  var targetProduct = productData[idx];
  var reg = /\r\n/g;
  var html = "";

  html +=
    "<tr><td class='text-center' style='padding:20px 0;'><img style='width:50%;height=50%' src='" +
    targetProduct.prodIco +
    "'/></td>";
  if (targetProduct.prodLink != null) {
    html +=
      "<tr><td><a target='_blank' href='" +
      targetProduct.prodLink +
      "'>[링크]</a></td>";
  }
  if (targetProduct.prodDesc != null) {
    html +=
      "<tr><td>" +
      targetProduct.prodDesc
        .replace(reg, "<br/>")
        .autoLink({ target: "_blank" }) +
      "</td>";
  }

  $("#productInform-body").html(html);
  $("#productInform-title").html(targetProduct.prodTitle);
  $("#productInform").modal("show");
}

function createProductInformation(name, value) {
  return "<tr><td>" + name + "</td><td>" + value + "</td></tr>";
}

$(document).ready(function() {
  getProduct();
  // getRecruit();
  //setInterval(getRecruit, 60000);
});

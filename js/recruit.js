// function getRecruit() {
// 	requestService("http://new.teamnexters.com/recruit", "POST", null, function(resData) {
// 		if(resData.result=="success") {
// 			$("#recruting").html(resData.resData[0].html);
// 			//모집 일자 안내 || 접수 X, 리크루팅 진행 중
// 			if(resData.resData[0].isGener==true || resData.resData[0].isFinalEnd==true) {
// 				$(".intro-text > .btn").remove();


// 				//접수 O, 리크루팅 진행 중
// 			} else if(resData.resData[0].isEnd==true) {

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


// $(document).ready(function() {
// 	getRecruit();
// 	//setInterval(getRecruit, 60000);
// });

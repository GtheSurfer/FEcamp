jQuery(function($){

	// 모바일 GNB 토글 버튼
	var $gnbBtn = $(".gnb>button");

	$gnbBtn.on("click", function(){
		$(this).next().slideToggle(200);

		if( $gnbBtn.text() === "메뉴 열기" ){
			//메뉴 닫기 텍스트 표시
			$gnbBtn.text("메뉴 닫기");
		} else {
			//메뉴 열기 텍스트 표시
			$gnbBtn.text("메뉴 열기");
		}
	});

	// 태블릿 + 데스크탑 GNB 메뉴
	$(".gnb>ul>li>a").on("mouseover focus", function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
	// li가 아니라 a를 잡아서 하는 이유는, 키보드로 focus를 받을 수 없기 때문이다. a, input같은 것만 받을 수 있다.
});
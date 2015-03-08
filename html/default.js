jQuery(function($){
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
});

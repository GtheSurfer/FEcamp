//답1.
function 세제곱(숫자) {
    return 숫자*숫자*숫자;
}
//확인1.
console.log(세제곱(3));

//답2.
function 답2(배열) {
    배열.push('번호 끝');
    return 배열;
//질문. 선생님, return 배열.push('번호 끝');이라고 치니까, 원소의 개수인 4가 결과값으로 나왔습니다. 왜 그런가요?
}
//확인2.
var arr = ['하나','둘','셋'];
console.log(답2(arr));

//답3.
function 답3(첫번째,두번째) {
    return 첫번째%두번째;
}
//확인3.
console.log(답3(9,7));

//답4.
function 답4(인수) {
    return typeof 인수;
}
//확인4.
var 타입 = 답4('문자열');
console.log(타입);
var 타입 = 답4(3.5);
console.log(타입);

var 배열5 = ['하나','둘','셋','넷'];

//답5_1.
function 답5_1(배열){
    var 원소번호 = 0;   
    for(;원소번호<배열.length; ) {
        console.log(배열[원소번호]);  
        원소번호=원소번호+1;
    }
};
//확인5_1.

답5_1(배열5);

//답5-2.
function 답5_2(배열){
    var 원소번호 = 0;
    while(원소번호<배열.length) {
        console.log(배열[원소번호]);
        원소번호 = 원소번호 + 1;
    }
};
//확인5_2.
답5_2(배열5);

//답5_3.
function 답5_3(배열){
    return 배열.join('\n');
};
//확인5_3.
console.log(답5_3(배열5));
    
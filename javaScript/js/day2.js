console.log('ant//space');
console.log('N\nN');
console.log('R\rR');
console.log('T\tT');
console.log('RR\r\rRR');
console.log(parseInt('0xc5f',16));
//console.log(35.5.toString(16));


var fruits = ['Apple','Banana',"Cherry"];
console.log(fruits[0]);
console.log(fruits[2,1,0,3]);

fruits[3] = 'Mango';
console.log(fruits[3]);
fruits[5] = 'Tomato';
console.log(fruits[5]);
console.log(fruits[4]);

var obj = {
    name : 'G.Koo',
    'age' : 37,
    add : 'Jagokro',
    height : 186,
    weight : 74,
    taste : fruits[2]
};

var info = {
    name : 'John Doe',
    age : 'unknown',
    add : 'Brooklyn',
    taste : fruits[0],
    race : 'caucasian',
    'ex-con' : false
};

console.log(obj);
console.log(info);
console.log(obj['name']);
console.log(obj.name);


function hello (person) {
    console.log('"안녕하세요, '+ person +'님"');
}
hello('김태곤');

function 더하기(num1,num2){
    return num1+num2;
}
var num = 더하기(3,5);
console.log(num);
console.log(더하기(5,9));


function 제곱 (num){
    return num*num;
}
var result = 제곱(4);
console.log(제곱(7));


var fn = function (n) {
    return n*n;
};
fn(5);


function 함수() {
       
    var 변수 = 1;
    변수 = 변수 +1;
    
    console.log(변수);
    
    function 안쪽함수(){
        console.log('안쪽');
    }
    
    안쪽함수 ();
}
함수();



var car = {
    color : function() {
            console.log('silver')
            },   
    start : function() {
            console.log('부릉');
            }
};
car.start();
car.color();

var str = '동해물과 백두산이 마르고 닳도록 백두산이';
console.log(str.length);
console.log(str.indexOf('싫어'));
console.log(str.lastIndexOf('백두산'));

//var 새문자열 = str.substr(0,7);
console.log(str.substr(0,9));

var 잘라내기 = str.substr(5);
console.log(잘라내기);

var 서브스트링 = str.substring(5);
console.log(서브스트링);

var num = 1234.5555;
console.log(num.toFixed(2));

var fruits = ['Apple','Banana',"Cherry"];
fruits.push('Mango','Melon','Berry','Peach');


console.log(fruits.join('fucks'));




function 어레이퍼스트(배열){
    return 배열[0];
}
console.log(어레이퍼스트(fruits));

function arrayLast(배열){
    var 마지막원소번호 = 배열.length-1;
    return 배열[마지막원소번호];
}
console.log(arrayLast(fruits));

function arrayEnd(배열){
    return 배열[배열.length-1];
}
console.log(arrayEnd(fruits));



function 중간녀석(배열){
    var middle = (배열.length-1)/2
    return 배열[middle];
}
console.log(중간녀석(fruits));
console.log(fruits.length);
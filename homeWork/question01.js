// 문제: 생일을 입력하면 만 나이를 구하는 age() 함수를 작성하라.
// 사용예: age(1976, 3, 22)

// if 속에 if를 넣는 방법 시도
function age(yy, mm, dd) 
{
    var today = new Date();                     //오늘의 년월일을 구한다.
    var years = (today.getFullYear()-1)-yy;     //만나이 = 생년부터 작년생일까지의 년수 + 올해 생일이 지났을 경우 1을 더 함.
    if (mm < today.getMonth()+1)                //먼저, 태어난 월이 현재의 월보다 작다면 무조건 생일이 지난 것이므로, 1을 더해서 출력.
    {                                           //만약, 여기서 mm <= today.getMonth()+1 에 대해서 판단해 버리면, 태어난 '월'은 작지만, '일'은 큰 경우, 생일이 지나지 않았다고 판단해 버린다.
        return years + 1;                       
    } 
    else if (mm === today.getMonth()+1)         //태어난 월이 현재의 월과 같을 경우엔, 태어난 일이 지났다고 판단되면 1을 더해서 출력.
    {                                           
        if (dd <= today.getDate())              
        {
            return years + 1;
        } 
        else                                    //태어난 일이 아직 안 지난 경우, 생일이 오지 않은 것이므로, 1을 더하지 않고 출력.
        {                                
            return years;
        }
    } 
    else                                        //가장 처음 확인해 본, 태어난 월이 현재 월보다 크다면 생일이 오지도 않은 것이므로, 1을 더하지 않고 출력. 
    {                                    
        return years;
    }
}
console.log(age(1979, 2, 28));

// if를 if 안에 넣지 않고, &&을 이용
function ageComp(yy, mm, dd) 
{
    var today = new Date();                                                 //오늘의 년월일을 구한다.
    var years = (today.getFullYear()-1)-yy;                                 //만나이 = 생년부터 작년생일까지의 년수 + 올해 생일이 지났을 경우 1을 더 함.
    if (mm < today.getMonth()+1)                                            //먼저, 태어난 월이 현재의 월보다 작다면 무조건 생일이 지난 것이므로, 1을 더해서 출력.
    {                                         
        return years + 1;                       
    } 
    else if (mm === today.getMonth()+1 && dd <= today.getDate())            //태어난 월이 현재의 월과 같으면서, 태어난 일이 현재일보다 같거나 작아도 생일이 지난 것이다.
    {          
            return years + 1;
    } 
    else                                                                    //나머지는 모두 아직 생일이 되지 않은 것
    {                                                                
        return years;
    }
}
console.log(ageComp(1979, 1, 31));

// 문제: 생일을 입력하면 만 나이에 따라 '어린이', '청소년', '청년', '장년이상'으로
// 반환하는 함수 연령대()를 작성하라.
// 사용예: 연령대(1976, 3, 22) // 1976년 3월 22일인 사람의 연령대는?
// 조건: 10살 미만은 어린이, 10~18살 청소년, 19~40살 청년, 41살~ 장년이상
function 연령대(yy, mm, dd) 
{
    var getAge = window.age(yy, mm, dd);
    if (getAge < 10) 
    {
        return '어린이';
    } 
    else if (getAge <= 18) 
    {
        return '청소년';
    } 
    else if (getAge <= 40) 
    {
        return '청년';
    } 
    else 
    {
        return '장년이상';
    }
}
console.log(연령대(1976, 3, 22));
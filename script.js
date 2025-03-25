let inputBox =document.getElementById('inputBox');
inputBox.max=new Date().toISOString().split("T")[0];
let result= document.getElementById('result')
function btn(){
    let birth =new Date(inputBox.value);
    let date = birth.getDate();
    let month = birth.getMonth() +1;
    let year = birth.getFullYear()

    
    let today = new Date();

    let date1 = today.getDate();
    let month1 = today.getMonth() + 1;
    let year1 = today.getFullYear();
    let date2, month2, year2;
    year2 = year1-year;
    if(month1>=month){
        month2=month1 - month;
    } else{
        year2--;
        month2 = 12 + month1 - month;
    }
    if(date1>=date){
        date2 = date1-date;
    }else{
month2--;
date2= getDaysInMonth(year, month)+date1-date;
    }
if(month2<0){
    month2=11;
    year2--;
}
result.innerHTML=`You are ${year2} years, ${month2} months, ${date2} days old`
}
function getDaysInMonth(y, m){
    return new Date(y, m, 0).getDate();
}
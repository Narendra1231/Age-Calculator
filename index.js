function calculateAge(){
    let day;
    let month;
    let year;
    var currentDay=parseInt(b1.value.slice(8,10));
    var currentMonth=parseInt(b1.value.slice(5,7));
    var currentYear=parseInt(b1.value.slice(0,4));
    console.log("currentDate:-"+" "+currentYear,currentMonth,currentDay);

    var birthDay=parseInt(b2.value.slice(8,10));
    var birthMonth=parseInt(b2.value.slice(5,7));
    var birthYear=parseInt(b2.value.slice(0,4));
    console.log("birthDate:- "+" "+birthYear,birthMonth,birthDay);

    if(currentDay>=birthDay){
        day=currentDay-birthDay;
    }
    else{
        day=currentDay + new Date(currentYear,currentMonth,0).getDate() -birthDay;
        currentMonth--;
    }

    if(currentMonth>=birthMonth){
        month=currentMonth-birthMonth;
    }
    else{
        month=currentMonth+12-birthMonth;
        currentYear--;
    }
    year=currentYear-birthYear;

    console.log(year,month,day);
    if(year>=0){
        age.innerHTML="Age:-"+year+" years"+" "+month+" months"+" "+day+" days !"
    }
    else{
        age.innerHTML="Age:- Enter currect values !"
    }
    
}
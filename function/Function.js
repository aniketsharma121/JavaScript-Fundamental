//Function Declaration
function calcAge (birthday){
    return 2024 - birthday;
}
const presentAge = calcAge(2001);
console.log(presentAge);
//Function Expression 
const calcAge2 = function(birthday){
    return 2024 - birthday;
}
const age2 = calcAge2(2001);
console.log(age2);
// Basically Function expression me function name nahi likhte ha . bulki hum usko ek variable me store karte ha 
// Arrow function 
const calcAge3 = (birthday)=>  2024 - birthday;
const age3 = calcAge3(2002);
console.log(age3);

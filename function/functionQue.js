//Write a program to calcurate the age and years until retitrement;
const calcAge = function (birthday,firstname) {
    const age = 2024 - birthday;
    const retitrement = 65 - age;
    return `${firstname} Retire in ${retitrement} year`;
}
const age1 = calcAge(1999, 'Aniket');
console.log(age1);
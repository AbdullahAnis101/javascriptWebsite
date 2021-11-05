console.log("Hello World")

let num = 5
var mystr = "John"
console.log(num)
console.log(mystr)

const pi_val = 3.147
console.log(pi_val)

/*function printMyInputES6(user_input) {
    console.log("The parameter passed is "+user_input)
}

let printMyInputES6 = user_input => console.log(user_input)

printMyInputES6(9)
printMyInputES6("John")
*/
console.log("5 + 3 = ",5+3)
console.log("7 - 3 = ",7-3)
console.log("8 * 2 = ",8*2)
console.log("27 / 3 = ",27/3)
console.log("4 power 3 = ",4 ** 3)
console.log("19 mod 4 = ",19%4)

let user_input = 5;
// for loop syntax
if(!isNaN(user_input)){
    for(let i=0;i<10;i++){
        console.log(user_input, "X",i,"=",user_input*i)
    }
}

// switch statement syntax

if(isNaN(user_input) || user_input< 1 || user_input>7){
    console.log("Invalid input")
} else {
    user_input = parseInt(user_input)
    switch(user_input){
        case 1: console.log("Sunday");break;
        case 2: console.log("Monday");break;
        case 3: console.log("Tuesday");break;
        case 4: console.log("Wednesday");break;
        case 5: console.log("Thursday");break;
        case 6: console.log("Friday");break;
        case 7: console.log("Saturday");break;
        default: console.log("Invalid entry");
    }

}
// while loop syntax
let word = "howdy"
let do_more = true
while(do_more){
    if(isNaN(word)) {
        console.log("Length of the word you entered is "+word.length)
    }else{
        console.log("You entered a number. Only words are allowed")
    }
    let should_continue = "n"
    if (should_continue = "n")
    do_more = false
    }    

let myArray = ["Jack","Jill",4,5,true,"John"]

console.log(myArray[0]);
console.log(myArray[5]);
// iterate through an array
myArray.forEach(x => {
    console.log(x)
})
// to find the index position and the value

for (const [idx,value] of Object.entries(myArray)) {
    console.log(idx, "-", value);
}
// Mapping a key to a value syntax
let myMap = new Map();

myMap.set("name","John")
myMap.set("Age",22)
myMap.forEach((val,key) => {
    console.log(key, "-",val)
})
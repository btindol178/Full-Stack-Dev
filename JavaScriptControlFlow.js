var hot = false
var temp = 55

if (temp > 80) {
    console.log("Hot Outside");
}else if (temp <= 80 && temp >= 50){
    console.log("Its ok");
}else{
    console.log("its cold")
}

var ham = 10;
var cheese = 10;

var report = "blank";

if(ham >= 10 && cheese >= 10){
    report ="Strong sales of both"
}else if(ham === 0 && cheese === 0) {
    report = "Nothing sold"
}else{
    report = "We had some sales"
}

console.log(report)

// While loops 
var x = 0;

while (x < 5){

    console.log("x is currently:" +x);
    
    if(x === 3){
        console.log("X is equal to 3!");
    }
    console.log("x is still less than 5, adding 1 to x")

    x = x+1
}
 
// while loop to print even numbers
var num = 1;
while(num < 11){
    if(num%2 === 0){  // if a number divided by 2 has no reaminder its even 
        console.log(num);
    }
    num = num + 1;
}

// for loops
for( var i = 0; i < 5; i++){ // i ++ is i plus 1
console.log("Number is " + i);
}

// for loop to print each letter of word
var word = "ASKDSLSK"
for( var i = 0; i < word.length; i++){ // i ++ is i plus 1
    console.log(word[i])
}

//  skip every other letter
// var word = "ababababab"
// for(var i = 0; i < word.length; i+2){ // i ++ is i plus 1
//     console.log(word[i]);
//     break
// }


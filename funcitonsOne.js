function hello(){
    console.log("Helllo world");
}


function helloYou(name){
    console.log("Helllo" + name);
}

// you go to console and type in addNum(2,3) console will be blank otherwise
function addNum(num1,num2) {
    console.log(num1 + num2)
}

// gives hello a default frakie
function helloSomeone(name = "Frankie"){
    console.log("Hello" + name)
}

function formal(name="Same", title = 'Sir'){
    console.log(title + " " + name);
}

function formal2(name="Same", title = 'Sir'){
    return title + " " + name
}

function timesFive(numInput){
    var result = numInput * 5
    return result
}

var v = "global v"
var stuff = "global stuff"

function fun(stuff){
    console.log(v);
    stuff = "Reassign stuff"
    console.log(stuff);
}
fun()
console.log(stuff)
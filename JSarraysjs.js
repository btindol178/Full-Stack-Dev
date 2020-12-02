// go to modzilla js documentation for arrays

var countries = ["usa","germany","china"]

// indexing starts at 0
countries[0] // gets me usa

countries[2] = "france"; // replaces china


var mixed = ["house", true, 29]
mixed.length // should be 3

var myArr = ['one','two','three']

var lastItem = myArr.pop() // this removes three and pops it off

myArr.push("new_item")// fills it again where you poped off three

myArr[myArr.length - 1] // gives you last item

var matrix = [[1,2,3],[5,6,7],[8,9,55]]
matrix.length // only 3 items a

//array iteration
var arr = ["A","B","C"]

// one way of printing
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// also prints every element in array 
for(letter of arr) {
    console.log(letter);
}

for (letter of arr){
    alert(letter);
}

// this does the same thing asthe function above
arr.forEach(alert)

function addAwesom(name){
    console.log(name + " is awesome!");
}

addAwesome("django")

var topics = ["python","django","science"]

topics.forEach(addAwesome)

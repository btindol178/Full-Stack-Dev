// OBJECT SIMILAR TO DICTIONARY OF PYTHON
var carinfo = {make: 'Toyota', year:1990, model:"camry"};
carinfo

//indexing
carinfo["make"] // makes toyota

var myNewO = {a: "hello",b:[1,2,3],c:{inside:[a,b]}};
myNewO

myNewO['a']

myNewO['b']

myNewO['c']['inside'][1]

carinfo['year' += 1]

console.dir(carinfo);

for(key in carinfo){
  console.log(key)  
}

for(key in carinfo){
    console.log(key);
    console.log(carinfo[key]);
  }

  carinfo["make"]
  "Toyota"

// objects continued
// object simple
var simple = {
    prop: "Hello",
    myMethod: function(){
        console.log("The myMethod was called")
    }
}
console.dir(simple)
//call it execute it
simple.myMethod()

var myObj = {
    name: "Jose",
    greet: function(){
        console.log("Hello " + this.name)
    }
}

myObj
myObj['name']
myObj.greet()

// split a string
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastName:function(){
        console.log(this.name.split(" ")[1])
    }
}

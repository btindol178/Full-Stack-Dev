var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

console.log("Connected!")

//when hover the text changes
headOne.addEventListener('mouseover',function(){
    headOne.textContent = "Mouse Currently Over";
})

headOne.addEventListener("mouseout",function(){
    headOne.textContent ="HOVER OVER ME!";
    headOne.getElementsByClassName.color = 'black';
})

headTwo.addEventListener("click",function(){
    headTwo.textContent = "Clicked On";
    headTwo.style.color = 'blue';
})

headThree.addEventListener('dblclick', function(){
    headThree.textContent = 'I was double clicked!';
    headThree.style.color = 'Red';
})
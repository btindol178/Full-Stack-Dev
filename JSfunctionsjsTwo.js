// are we on vacation or not
funciton sleepIn(weekday, vacation){
    return(!weekday || vacation)
}
//sleepIn(false,fasle)  true


second function
funciton monkeyTrouble(aSmile,bSmile){
    return (asMILE && bSmile) || (!aSmile && !bSmile)
}
//monkeyTrouble(true,false) = false

//third function
function stringTimes(str, n){
    var returnStr = "";
    var i = 0;
    while (i<n) {
        returnStr += str
        i++
    // }
    return returnStr
}
//stringTimes("HI",2) = "hihi"

// fourth funciton lucky sum 
function luckySum(a,b,c) {
    if(a == 13){
        return 0
    }
    if(b == 13){
        return a
    }
    if(c == 13){
    return a + b
    }
    return a+b+c
}

function luckySum2(a,b,c) {
    if(a === 13){
        return 0
    }else if(b === 13){
        return a
    }else if(c === 13){
    return a + b
    }else {
    return a+b+c
    }
}
//LuckySum(1,2,3) = 6

//function five
function caught_speeding(speeding, is_birthday){
    if(is_birthday){
        speed -= 5
    }
    if(speed <= 60) {
        return 1
    }
    if(60 < speed <= 80){
        return 2
    }
}
//caught_speeding(65,true) = 0


//function six
function makeBricks(small, big, goal){
    return goal%5 >= 0 && goal%5 - small <= 0 && small + 5* big >= goal;
}
//make bricks(3,2,10) = true


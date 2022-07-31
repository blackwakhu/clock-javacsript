let second = 0
let minute = 0
let hour = 0
let seconds = "00"
let minutes = "00"
let hours = "00"
function addone(){
    second += 1
    if (second>60){
        minute += 1
        second = 0
        document.querySelector("body").background = rgb(colorChange())
    }
    if (minute>60){
        hour += 1
        minute = 0
    }
    if (second<10){
        seconds = "0"+second
    }
    else{
        seconds = second
    }
    if (minute<10){
        minutes = "0"+minute
    }
    else{
        minutes = minute
    }
    if (hour<10){
        hours = "0"+hour
    }
    else{
        hours = hour
    }
    document.querySelector("#time").innerHTML = hours+":"+minutes+":"+seconds
}
setInterval(addone, 1000)

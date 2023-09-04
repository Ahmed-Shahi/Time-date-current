// var hour = 0
// var gethour = document.getElementById('hour')

// setInterval(function(){
//     sec++
//     getsec.innerHTML = sec
//     if(sec>=5){
//         min++
//         getmin.innerHTML = min
//         sec =0
//     } 
// },1000)
var min = 0
var getmin = document.getElementById('min')
var sec = 0
var getsec = document.getElementById('sec')
var  fordate = new Date()
var convert = fordate.toString()
var forsec = convert.slice(22,25)
    setInterval(function(){
        if(forsec ==forsec){
            forsec++
            getsec.innerHTML = forsec
        }
        if(forsec >= 60){
            min++
            getmin.innerHTML = min
            forsec = 0
        }
    },1000)







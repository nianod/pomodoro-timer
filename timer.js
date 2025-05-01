

const startE1 = document.getElementById("start")
const stopE1 = document.getElementById("stop")
const resetE1 = document.getElementById("reset")
const timerE1 = document.getElementById("timer")


let interval
let timeLeft = 25;

function updateTiemr() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")
    }`;
    timerE1.innerHTML = formattedTime;
}

function startTimer(){
   interval = setInterval(() => {
    timeLeft--;
    updateTiemr();
    if(timeLeft === 0){
        clearInterval(interval)
        //alert("time is up");   
        
    }
   }, 1000) 
}
function stopTimer(){
    console.log("stop");    
}
function resetTimer(){
    console.log("reset");    
}
startE1.addEventListener("click", () => {
    timeLeft++;
})
// startE1.addEventListener("click", function() {
//     let reply = prompt("Timer started"); 
//     if(reply.toLowerCase() === "yes") {
//         timeOut(() => {
//             document.body.innerHTML = "";
//         }, 5000);
//     } else {
//         timeOut(() => {
//             document.body.innerHTML = "";
//         }, 1000);
//     }
// });
stopE1.addEventListener("click", stopTimer) 
resetE1.addEventListener("click", resetTimer) 

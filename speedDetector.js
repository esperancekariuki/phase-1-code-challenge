const speedMonitor = require('prompt-sync')
const prompt = speedMonitor();
function speedGovernor(){
    let speed = prompt("Ask for speed ?");
    if (speed <=70){
        console.log("Ok");
    }
    else if(speed > 70 && speed <=130){
        let demeritpoint =(speed-70)/5;
        console.log( `points: $(demeritpoint)`);
    }
    else{
        console.log("license suspended")
    }
}
speedGovernor()
//Initialy values are saved into variables
let pomoMinsValue = document.getElementById("pomoMins");
let pomoSecsValue = document.getElementById("pomoSecs");

//SHORT BREAK BUTTONS
let sbMinsValue = document.getElementById("shortBreakMins");
let sbSecsValue = document.getElementById("shortBreakSecs");

//LONG BREAK BUTTONS
let lbMinsValue = document.getElementById("longBreakMins");
let lbSecsValue = document.getElementById("longBreakSecs");

//first timer (25 minute pomodoro)
function pomoTimer(){
  function countdownSecs() {
    if(pomoMinsValue.innerText == '0' && pomoSecsValue.innerText == '0'){
      clearInterval(timer);
      //makes the timer stop when mins and seconds are both zero
    }else{
      if((pomoSecsValue.innerText == '00' || pomoSecsValue.innerText == '0' )){
        function countdownMins() {
          pomoMinsValue.innerText--;
          // if seconds are zero, next tick starts the next minute
        };
        countdownMins();
        pomoSecsValue.innerText = 60;
        pomoSecsValue.innerText--;
      }else{
        pomoSecsValue.innerText--;
      }
    }
  }
  const timer = setInterval(countdownSecs, 1000);

// pause the timer function
  function pauseTimer(){
    const initialMins = pomoMinsValue.innerText;
    const initialSecs = pomoSecsValue.innerText;
    clearInterval(timer);
    pomoMinsValue.innerText = initialMins;
    pomoSecsValue.innerText = initialSecs;
  }

  function firstReset(){
    pomoMinsValue.innerText = 25;
    pomoSecsValue.innerText = 00;
  }
  document.getElementById("pause").onclick = pauseTimer;
  document.getElementById("play").onclick = pomoTimer;
  document.getElementById("firstReset").onclick = firstReset;
}




// SHORT BREAK
function shortBreakTimer(){
  function countdownSecs() {
    if(sbMinsValue.innerText == '0' && sbSecsValue.innerText == '0'){
      clearInterval(timer);
    }else{
      if((sbSecsValue.innerText == '00' || sbSecsValue.innerText == '0' )){
        function countdownMins() {
          sbMinsValue.innerText--;
        };
        countdownMins();
        sbSecsValue.innerText = 60;
        sbSecsValue.innerText--;
      }else{
        sbSecsValue.innerText--;
      }
    }
  }
  const timer = setInterval(countdownSecs, 1000);

  function pauseTimer(){
    const initialMins = sbMinsValue.innerText;
    const initialSecs = sbSecsValue.innerText;
    clearInterval(timer);
    sbMinsValue.innerText = initialMins;
    sbSecsValue.innerText = initialSecs;
  }

  function secondReset(){
    sbMinsValue.innerText = 5;
    sbSecsValue.innerText = 00;
  } 
  document.getElementById("sbPause").onclick = pauseTimer;
  document.getElementById("sbPlay").onclick = shortBreakTimer;
  document.getElementById("secondReset").onclick = secondReset;
}

// Long BREAK
function longBreakTimer(){
  function countdownSecs() {
    if(lbMinsValue.innerText == '0' && lbSecsValue.innerText == '0'){
      clearInterval(timer);
    }else{
      if((lbSecsValue.innerText == '00' || lbSecsValue.innerText == '0' )){
        function countdownMins() {
          lbMinsValue.innerText--;
        };
        countdownMins();
        lbSecsValue.innerText = 60;
        lbSecsValue.innerText--;
      }else{
        lbSecsValue.innerText--;
      }
    }
  }
  const timer = setInterval(countdownSecs, 1000);

  function pauseTimer(){
    const initialMins = lbMinsValue.innerText;
    const initialSecs = lbSecsValue.innerText;
    clearInterval(timer);
    lbMinsValue.innerText = initialMins;
    lbSecsValue.innerText = initialSecs;
  }

  function thirdReset(){
    lbMinsValue.innerText = 15;
    lbSecsValue.innerText = 00;
  } 
  document.getElementById("lbPause").onclick = pauseTimer;
  document.getElementById("lbPlay").onclick = longBreakTimer;
  document.getElementById("thirdReset").onclick = thirdReset;
}

// Main timer calling functions
document.getElementById("firstStart").onclick = pomoTimer;

//Short Break timer calling functions
document.getElementById("secondStart").onclick = shortBreakTimer;

//Long Break timer calling functions
document.getElementById("thirdStart").onclick = longBreakTimer;

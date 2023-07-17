// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init (){
    const takeoffButton = document.getElementById("takeoff");
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flight status").innerHTML;
    const shuttleBackground = document.getElementById("shuttleBackground");
    const landing = document.getElementById("landing").innerHTML;
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    
}
// 1.
window.addEventListener("load", function() {
    console.log('Window Loaded');

    // 2.
    takeoff.addEventListener('click', event => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (response == true) {
          flightStatus.innerHTML = "Shuttle in flight.";
          shuttleBackground.style.backgroundColor = "blue";
          spaceShuttleHeight.innerHTML = 10000;
        }
      });

    //   3.
    landing.addEventListener('click', event => {
        let response = window.alert("The shuttle is landing. Landing gear engaged.")
          flightStatus.innerHTML = "The shuttle has landed.";
          shuttleBackground.style.backgroundColor = "green";
          spaceShuttleHeight.innerHTML = 0;
    });

    // 4.
    missionAbort.addEventListener('click', event => {
        let response = window.confirm("Confirm that you want to abort the mission.")
        if (response == true) {
          flightStatus.innerHTML = "Mission aborted.";
          shuttleBackground.style.backgroundColor = "blue";
          spaceShuttleHeight.innerHTML = 0;
        }
      });

    //   5.
    // up.addEventListener('click', event => {
    //    
    // };

    // down.addEventListener('click', event => {
    //     
    // };

    // right.addEventListener('click', event => {
    //     
    // };

    // left.addEventListener('click', event => {
    //     
    // };

});

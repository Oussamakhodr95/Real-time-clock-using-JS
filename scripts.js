function realTimeClock(){
    var rtClock = new Date();

    var hours = rtClock.getHours();

    var minutes = rtClock.getMinutes();

    var seconds = rtClock.getSeconds();

    // AM PM System

    var amPm = (hours < 12 ) ? "AM"  : "PM" ;

    // convert the hours component to 12 hours format

    hours = (hours > 12 ) ? hours -12 : hours ;

    //Pad the hours , minutes , seconds

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    sconds = ("0" + seconds).slice(-2);

    //Display the clock

    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm

    var t = setTimeout(realTimeClock,500);
}
window.onload= function(){
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById('tens')
    var appendSeconds = document.getElementById('seconds')
    var buttonStart = document.getElementById('button-start')
    var stopButton = document.getElementById('button-stop')
    var resetButton = document.getElementById('button-reset')
    var interval;

    buttonStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(start)
    }

}
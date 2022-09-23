var alarmSound = new Audio();
alarmSound.src = 'audio.mp3';
var alarmTimer;

function setAlarm(button){
    var ms = document.getElementById('alarmTime');
   ms = ms.valueAsNumber;
    if(isNaN(ms)){
        alert('invalid date');
        return;
    };
    var alarm = new Date(ms);
    var alarmTime = new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(),alarm.getUTCMinutes(),alarm.getUTCSeconds());
    var differenceInMs = alarmTime.getTime() - (new Date()).getTime();
    if(differenceInMs < 0){
        alert('Time specified is already passed!');
        return;
    };
    alarmTimer = setTimeout(initAlarm, differenceInMs);

    button.innerText = 'Cancel Alarm';
    button.setAttribute('onclick','cancelAlarm(this);')
};
function cancelAlarm(button){
 button.innerText = 'set alarm'
 button.setAttribute('onclick','setAlarm(this);');
 clearTimeout(alarmTimer);
}


function initAlarm(){
alarmSound.play();
document.getElementsById('alarmOptions').style.display = '';

};
function stopAlarm(){
    alarmSound.pause();
    alarm.currentTime = 0;
    document.getElementsById('alarmOptions').style.display = 'none';
    cancelAlarm(document.getElementsById('alarmButton'))

}
function snooze(){
    stopAlarm();
    setTimeout(initAlarm,36000);
}


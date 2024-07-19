function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;
    
    if (alarmTime) {
      const alarm = new Date(alarmTime);
      const now = new Date();
      
      const timeToAlarm = alarm - now;
      
      if (timeToAlarm > 0) {
        setTimeout(() => {
          alert('Time to wake up!');
        }, timeToAlarm);
      } else {
        alert('Please choose a time in the future');
      }
    } else {
      alert('Please set the alarm time');
    }
  }
  
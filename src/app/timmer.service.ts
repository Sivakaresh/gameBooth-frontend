import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimmerService {
  timeLeft: number;
  interval;
  hours;
  mins;
  secs;
  buttonChange;
  constructor() {}

  startTimer(hour: number) {
    this.timeLeft = hour * 60 * 60;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
      }
    }, 1000);
  }
  pauseTimer() {
    clearInterval(this.interval);
    this.timeLeft = 0;
    this.buttonChange = true;
  }
  // timeFormat() {
  //   this.hours = Math.floor(this.timeLeft / 3600);
  //   this.mins = Math.floor();
  // }
}

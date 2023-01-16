const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervID: 0,
  startTimer() {
      // input => callback, ms
      // output => number (intervID)
    this.intervID = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 5) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
      console.log(this);

    }, 1000);

  },

  getTimer() {
    console.log('getTimer', this);

    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervID);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};


// timer.startTimer();
// setTimeout(() => {

//     timer.getTimer();
// }, 5000);
// timer.stopTimer();

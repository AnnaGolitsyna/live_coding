const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  id: 0,
  startTimer() {

      // input => callback, ms
      // output => number (ID)
    this.id = setInterval(() => {
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
    clearInterval(this.id);
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

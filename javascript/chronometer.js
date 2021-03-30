class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
    }, 1000);
  }
  getMinutes() {
    let minutes = 0;
    minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = 0;
    seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick(minutes, seconds) {
    minutes = this.twoDigitsNumber(this.getMinutes());
    seconds = this.twoDigitsNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
  }
}

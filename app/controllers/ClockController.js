class digitalClock {
  constructor(element) {
    this.element = element;
    this.getTime()
  }
  start() {
    setInterval(() => {
      this.update()

    }, 500);
  }

  update() {
    const parts = this.getTime();
    const minuteFormated = parts.minute.toString().padStart(2, `0`)
    const timeFormated = `${parts.hour}: ${minuteFormated}`;
    const amPm = parts.isAM ? "AM" : "PM"

    this.element.querySelector(`.clock-time`).textContent = timeFormated;
    this.element.querySelector(`.clock-ampm`).textContent = timeFormated;

    console.log(timeFormated);

  }

  getTime() {
    const now = new Date()
    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAM: now.getHours() < 12
    }
  }
}

const clockElement = document.querySelector(`.clock`)
const clockObject = new digitalClock(clockElement);

console.log(clockObject.getTime());

clockObject.start();
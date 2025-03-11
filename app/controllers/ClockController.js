export class ClockController {
  constructor() {
    this.drawClock()
    // TODO start an interval that will call your drawClock method every 1 second
    setInterval(() => {
      this.drawClock()
    }, 1000);
  }

  // TODO write a method called drawClock that creates a new Date object, formats it, and injects into a piece of your HTML using document.getElementById 
  drawClock() {

    let date = new Date()
    const dateElm = document.getElementById(`clock`)
    dateElm.innerHTML = (`${date.toLocaleTimeString()}`)
    // console.log(`testing`);
  }

}

import { Pop } from "../utils/Pop.js";
import { wetherService } from "../services/WetherServoce.js";
import { AppState } from "../AppState.js";

export class WeatherController {
  constructor() {
    this.getWeather()
    console.log(`wether controller`);

  }

  async getWeather() {
    try {
      await wetherService.getWeather()
    } catch (error) {
      console.log(`got no weather`, error);

      Pop.error(error, `no weather`)
    }
  }

  // drawWeather() {
  //   const weather = AppState.wether
  //   let weatherContent = ``
  //   // weather.foreach(weather => weatherContent += weather.getWeather)
  //   const weatherElm = document.getElementById
  //   // weatherElm.innerHTML= weatherContent

  // async getWeatherDetail(weatherIndex) {
  //   try {
  //     await wetherService.getWeatherDetail(weatherIndex)
  //   } catch (error) {

  //   }
  // }

}
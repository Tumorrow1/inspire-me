
import { api } from "../utils/Axios.js"

class WeatherService {
  async getWeather() {
    const response = await api.get(`api/weather`)
    console.log(`get weather`, response.data);

  }
  async getWeatherDetail(weatherIndex) {
    const response = await api.get(`weather/${weatherIndex}`)
    console.log(`geting weather`, response.data);

  }
}

export const wetherService = new WeatherService()
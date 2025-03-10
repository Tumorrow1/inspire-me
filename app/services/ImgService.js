import { AppState } from "../AppState.js";
import { Img } from "../models/Img.js";
import { api } from "../utils/Axios.js";

class ImgService {
  async getImg() {
    const response = await api.get(`api/images`)
    console.log(`got images`);
    const img = new Img(response.data)
    // AppState.Imgs = img
  }
}

export const imgService = new ImgService()
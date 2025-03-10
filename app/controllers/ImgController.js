import { AppState } from "../AppState.js";
import { imgService } from "../services/ImgService.js";
import { Pop } from "../utils/Pop.js";

export class ImgController {
  constructor() {
    console.log(`img loaded`);
    // AppState.on(`Imgs`, this.getImg)
    this.getImg()
  }

  drawImg() {
    const imgs = AppState.Imgs
    document.body.style.backgroundImage = `url${Image}`
  }


  async getImg() {
    try {
      await imgService.getImg()
    } catch (error) {
      console.log(`no img`, error
      );

      Pop.error(error, `couldnt get them inmg `)
    }
  }
}
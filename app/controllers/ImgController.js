import { AppState } from "../AppState.js";
import { imgService } from "../services/ImgService.js";
import { Pop } from "../utils/Pop.js";

export class ImgController {
  constructor() {
    console.log(`img loaded`);
    // FIXME add observer for img in AppState
    AppState.on(`img`, this.drawImg)
    this.getImg()
  }

  drawImg() {
    const img = AppState.img
    // FIXME pull an imgUrl out of your img and interpolate it into your string below here
    document.body.style.backgroundImage = `url(${img.largImg})`

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
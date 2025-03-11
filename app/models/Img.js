export class Img {
  constructor(data) {
    this.id = data.id
    this.collection = data.collection
    this.imgUrls = data.imgUrls
    // FIXME choose which imgUrl you want from the data object here
    // this.largeImg = data.imgUrls.something
    this.largImg = data.imgUrls.full
  }
}
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";

export class QuotesController {
  constructor() {
    console.log(`quotes baby`);
    this.getQuotes()
  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.error(`no get quotes`, error)
      Pop.error(error, `no quotes`)
    }
  }
}

import { AuthController } from './Auth/AuthController.js';
import { ClockController } from './controllers/ClockController.js';
import { ImgController } from './controllers/ImgController.js';
import { QuotesController } from './controllers/QuotesController.js';
import { TodosController } from './controllers/TodosController.js';
import { WeatherController } from './controllers/WetherController.js';

class App {

  authController = new AuthController()

  todosController = new TodosController()

  imgController = new ImgController()
  clockController = new ClockController()
  weatherController = new WeatherController()
  quotesController = new QuotesController()

}

window['app'] = new App()



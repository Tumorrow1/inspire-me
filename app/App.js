
import { AuthController } from './Auth/AuthController.js';
import { ImgController } from './controllers/ImgController.js';
import { TodosController } from './controllers/TodosController.js';

class App {

  authController = new AuthController()

  todosController = new TodosController()

  imgController = new ImgController()


}

window['app'] = new App()



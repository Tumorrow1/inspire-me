import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class TodosController {
  constructor() {
    AppState.on(`identity`, this.getTodos)
    // AppState.on(`identity`, this.createTodos)
    console.log(`todos man`);
    // this.getTodos()

  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.log(`couldnt get todo `);
      Pop.error(console, `could not get todos`);

    }

  }

  async createTodos() {
    try {
      event.preventDefault()
      const formElm = event.target
      const rawFormData = getFormData(formElm)
      await todosService.createTodo()
    } catch (error) {
      Pop.error(console, `could not get todos`);
    }
  }
}
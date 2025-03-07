import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "../utils/Axios.js"

class TodosService {
  async createTodo(todoData) {
    const response = await api.post(`api/todos`, todoData)
    console.log(`create todo`);

  }


  async getTodos() {
    const response = await api.get(`api/todos`)
    console.log(`got todo somethihg`);
    const todos = response.data.map(pojo => new Todo(pojo))
    AppState.todo = todos

  }

}



export const todosService = new TodosService()
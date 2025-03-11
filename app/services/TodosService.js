import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "../utils/Axios.js"

class TodosService {

  async createTodo(todoData) {
    const response = await api.post(`api/todos`, todoData)
    const todo = new Todo(response.data)
    AppState.todos.push(todo)
    console.log(`create todo`, response);

  }
  async deleteTodo(todoId) {
    const response = await api.delete(`api/todos/${todoId}`)
    const todos = AppState.todos
    const todosIndex = todos.findIndex(todo => todo.id == todoId)
    todos.splice(todosIndex, 1)

  }


  async getTodos(todoData) {
    const response = await api.get(`api/todos`, todoData)
    const todos = response.data.map(pojo => new Todo(pojo))
    AppState.todos = todos
    console.log(`got todo somethihg`, AppState.todos);

  }
  async updateTodo(todoId) {
    const foundTodo = AppState.todos.find(todo => todo.id == todoId)
    console.log(`toggle`);

    foundTodo.completed = !foundTodo.completed
    const response = await api.put(`api/todos/${todoId}`, foundTodo)
    console.log(`updated todo`, response.data);

    AppState.emit(`todos`)

  }

}



export const todosService = new TodosService()
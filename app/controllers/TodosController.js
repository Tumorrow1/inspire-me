import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class TodosController {


  constructor() {
    AppState.on(`identity`, this.getTodos)
    AppState.on(`todos`, this.drawTodos)
    AppState.on(`todos`, this.drawNotDoneTodoCount)

    console.log(`todos man`);
    // this.getTodos()

  }
  drawTodos() {
    const todos = AppState.todos
    let content = ``

    todos.forEach(todo => content += todo.todoList)
    const todosElm = document.getElementById(`todoList`)
    todosElm.innerHTML = content
    // document.body.style.backgroundImage = "url(${imgs})"
  }

  async getTodos() {
    try {
      await todosService.getTodos()
      console.log(`no todos draw`);

    } catch (error) {
      console.log(`couldnt get todo `);
      Pop.error(console, `could not get todos`);

    }

  }

  async toggleTodo(todoId) {
    try {
      console.log(`no toggle`);

      await todosService.updateTodo(todoId)
    } catch (error) {
      Pop.error(error, `no toggle`)
      console.error(`couldnt toggle todo`, error);

    }
  }

  async createTodo() {
    try {
      event.preventDefault()
      const formElm = event.target
      const rawFormData = getFormData(formElm)
      console.log(`typeing`, rawFormData);
      await todosService.createTodo(rawFormData)

    } catch (error) {
      console.log(`coudnt get create todo`);
      Pop.error(console, `could not get todos`,);


    }
  }
  drawNotDoneTodoCount() {
    const todos = AppState.todos

    const notDoneTodo = todos.filter(todo => todo.completed == false)
    console.log(`draw done todo`, notDoneTodo);
    const notDoneTodoElm = document.getElementById(`notDoneTodo`)
    notDoneTodoElm.innerText = `${notDoneTodo.length}/${todos.length}`

  }
  async deleteTodo(todoId) {
    try {
      const confirmed = await Pop.confirm(`<img height="200px" src="https://imageio.forbes.com/blogs-images/darrahbrustein/files/2019/01/Shaq-Headshot-1-1200x900.jpeg?height=533&width=711&fit=bounds">Shaq doesnt think you shoud do that`)
        ;
      // console.log(`idk`, confirmed);

      if (false == confirmed) {
        return
      }

      // console.log('deleting', todoId);

      await todosService.deleteTodo(todoId)
    } catch (error) {
      Pop.error(console, `could not get todos`,);
      console.error(error)

    }
  }


}
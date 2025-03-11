export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.id = data.id
  }

  get clock() {
    return `
   <div>${this.clock}</div>
  `
  }


  get todoList() {
    // TODO reference spellbook for toggling a prepared spell (model, controller, service)
    return `
   
       <input type="checkbox" id="vehicle1" name="vehicle1" value="description" onchange="app.todosController.toggleTodo('${this.id}')" title="toggle todo compleated" ${this.completed ? `checked` : ``}>
          <label for="vehicle1">${this.description}</label><br>
          <div>
            <span onclick="app.todosController.deleteTodo('${this.id}')" class="mdi mdi-delete-forever"></span>
          </div>
    `
  }
}
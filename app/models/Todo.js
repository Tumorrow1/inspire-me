export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.id = data.id
  }




  get todoList() {
    return `
   
       <input type="checkbox" id="vehicle1" name="vehicle1" value="description">
          <label for="vehicle1">${this.description}</label><br>
          <div>
            <span onclick="app.todosController.deleteTodo('${this.id}')" class="mdi mdi-delete-forever"></span>
          </div>
    `
  }
}
export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.id = data.id
  }

  get todoListCard() {
    return `
    
     <div>
          <form>
            <div class="input">
              <input type="text" title="${this.description}" required max="50">
            </div>
          </form>
        </div>
    
    `
  }
}
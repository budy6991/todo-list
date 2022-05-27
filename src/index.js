import './style.css'

const arrayOfProjects = []

function createTodo (name, notes, date, priority) {
    this.name = name
    this.notes = notes
    this.date = date
    this.priority = priority
    return {name, notes, date, priority}
}

function createProject (name) {
    this.name = name
    let todos = []
    let storeTodos = (todo) => {
        todos.push(todo)
    }
    return {name, todos, storeTodos}
}

const projectOne = new createProject('Project One')
const todoOne = new createTodo ('Todo one', 'This is the first todo', '78/78/78', 'High')

arrayOfProjects.push(projectOne)
projectOne.storeTodos(todoOne)





console.log(arrayOfProjects)
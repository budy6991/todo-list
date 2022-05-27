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
    let removeTodo = (todo) => {
        const index = todos.indexOf(todo)
        todos.splice(index, 1)
    }

    return {name, todos, storeTodos, removeTodo}
}

function addProjectToArray (project) {
    arrayOfProjects.push(project)
}



const projectOne = new createProject('Project One')
const todoOne = new createTodo ('Todo one', 'This is the first todo', '78/78/78', 'High')
const todoTwo = new createTodo ('TodoTwo', 'This is the second todo', '12/12/12', 'Low')

addProjectToArray(projectOne)
projectOne.storeTodos(todoOne)
projectOne.storeTodos(todoTwo)
projectOne.removeTodo(todoOne)
projectOne.removeTodo(todoOne)

console.log(arrayOfProjects)





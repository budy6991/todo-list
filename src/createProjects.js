let createProjects = {

    arrayOfProjects: [],
    createTodo (name, notes, date, priority) {
        this.name = name
        this.notes = notes
        this.date = date
        this.priority = priority
        return {name, notes, date, priority}
    },
    createProject (name) {
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
    },
    addProjectToArray (project) {
        arrayOfProjects.push(project)
    }
}

export {createProjects}
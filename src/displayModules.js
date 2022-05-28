import getElements from "./getElements";

let projectCard = document.createElement('div')
let projectName = document.createElement('p')
let addTodo = document.createElement('button')
let removeProject = document.createElement('button')

projectCard.classList.add('project-card')
projectName.classList.add('project-name')
addTodo.classList.add('add-todo')
removeProject.classList.add('remove-project')

addTodo.textContent = 'add todo'
removeProject.textContent = 'remove'


let display = {
    project(name) {
        projectName.textContent = name
        projectCard.append(projectName, addTodo, removeProject)
        getElements.body().appendChild(projectCard)
    }
}

//We have appended the project to the body, now we need to display it as a card, with an expand button and a remove button, so we can keep adding the functionality, for creating todos, and stuff like that

export default display
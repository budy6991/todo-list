import { remove } from "lodash";
import getElements from "./getElements";


let display = {
    project(name) {
        let project = document.createElement('div')
        let projectName = document.createElement('p')
        let addTodo = document.createElement('button')

        addTodo.classList.add('add-todo')
        let removeProject = document.createElement('button')
        removeProject.classList.add('remove-project')

        removeProject.textContent = 'Remove'
        addTodo.textContent = 'Add todo'
        project.classList.add('project-card')
        projectName.textContent = name


        addTodo.onclick = function (){
            alert('hello')
        }

        removeProject.onclick = function (){
            alert('bye')
        }

        project.append(projectName, addTodo, removeProject)
        getElements.body().appendChild(project)
    }
}

//We have appended the project to the body, now we need to display it as a card, with an expand button and a remove button, so we can keep adding the functionality, for creating todos, and stuff like that

export default display
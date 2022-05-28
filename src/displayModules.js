import { create, remove } from "lodash";
import getElements from "./getElements";
import createProjects from './createProjects'
import { eventHandlers } from "./eventHandlers";
import removeChildren from "./removeChildren";


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

        project.append(projectName, addTodo, removeProject)
        getElements.body().appendChild(project)

        addTodo.onclick = function (){
            getElements.todoModal().showModal()
            
        }
        removeProject.onclick = function (){
            getElements.body().removeChild(project)
            createProjects.arrayOfProjects.forEach(project =>{ if(project.name === projectName.textContent){

                const index = createProjects.arrayOfProjects.indexOf(project)
                createProjects.arrayOfProjects.splice(index, 1) 

            }} )   
        }

        console.log(createProjects.arrayOfProjects)
    }
}

//We have appended the project to the body, now we need to display it as a card, with an expand button and a remove button, so we can keep adding the functionality, for creating todos, and stuff like that

export default display
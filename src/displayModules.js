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
                console.log(createProjects.arrayOfProjects)
            }} )   
        }

        getElements.submitTodo().onclick = function (){
            createProjects.arrayOfProjects.forEach(project => {
                if (project.name === projectName.textContent) {
                    let todo = createProjects.createTodo(getElements.todoName(), getElements.todoNotes(), getElements.todoDate(), getElements.todoPriority())
                    project.storeTodos(todo)
                    console.log(createProjects.arrayOfProjects)
                }
            })
            
        }
        
    }
}


export default display
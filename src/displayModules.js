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
        let expandProject = document.createElement('button')
        let removeProject = document.createElement('button')
        

        let todoContainer = document.createElement('div')
        let todoCard = document.createElement('div')
        let todoName = document.createElement('div')
        let todoNotes = document.createElement('div')
        let todoDate = document.createElement('div')
        let todoPriority = document.createElement('div')
        let todoExpand = document.createElement('button')
        let todoRemove = document.createElement('button')


        addTodo.classList.add('add-todo')
        removeProject.classList.add('remove-project')
        project.classList.add('project-card')
        expandProject.classList.add('expand-project')
        todoContainer.classList.add('todo-container')

        removeProject.textContent = 'Remove'
        addTodo.textContent = 'Add todo'
        expandProject.textContent = 'Expand'
        projectName.textContent = name

        
        
        project.append(projectName, addTodo, removeProject, expandProject)
        getElements.projectContainer().appendChild(project)

        project.dataset.identifier = name 
        addTodo.dataset.identifier = name 


        addTodo.onclick = function (){

            getElements.todoModal().showModal()
            getElements.submitTodo().onclick = function (){
                
                createProjects.arrayOfProjects.forEach(project => {
                    
                    if (project.name === addTodo.dataset.identifier) {
                        
                        let todo = createProjects.createTodo(getElements.todoName(), getElements.todoNotes(), getElements.todoDate(), getElements.todoPriority())
                        
                        // todoName.textContent = todo.name
                        // todoCard.appendChild(todoName)
                        // todoContainer.appendChild(todoCard)

                        project.storeTodos(todo)
                                                
                        console.log(createProjects.arrayOfProjects)

                    }

                    expandProject.onclick = function (){
                        getElements.body().appendChild(todoContainer)
                    }

                    console.log(todo)
                })

                

            }
            
            
            
        }
        removeProject.onclick = function (){
            getElements.body().removeChild(project)
            createProjects.arrayOfProjects.forEach(project =>{ if(project.name === projectName.textContent){
                const index = createProjects.arrayOfProjects.indexOf(project)
                createProjects.arrayOfProjects.splice(index, 1) 
                console.log(createProjects.arrayOfProjects)
            }} )   
        }

        
    }
}



export default display
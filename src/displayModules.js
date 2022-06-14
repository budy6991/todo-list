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


        /// THIS HERE IS THE DATA ATTRIBUTE//

        
        project.dataset.identifier = name 
        addTodo.dataset.identifier = name 

        ////////////////////////////////////

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

            //I was checking here if when I click on different projects, it tells me the data attribute of the project I am clicking on or not

            console.log(createProjects.arrayOfProjects.filter(project => project.name === addTodo.dataset.identifier))

            //

            createProjects.arrayOfProjects.forEach(project => {
                
                if (project.name === projectName.textContent) {
                    
                    let todo = createProjects.createTodo(getElements.todoName(), getElements.todoNotes(), getElements.todoDate(), getElements.todoPriority())
                    project.storeTodos(todo)
                    // console.log(createProjects.arrayOfProjects)
                    
                }
            })
            
        }
        
    }
}



export default display
import getElements from "./getElements";
import createProjects from './createProjects'
import displayModules from './displayModules'

let eventHandlers = {

    addProject() {
        getElements.addProject().onclick = function () {
            getElements.projectModal().showModal()
        }
    },
   
    closeModal(){
        getElements.closeModal().onclick = function(){
            getElements.projectModal().close()
        }
    },

    closeTodoModal() {
        getElements.closeTodoModal().onclick = function(){
            getElements.todoModal().close()
        }
    },

    submitProject(){

        getElements.submitProject().onclick = function(){

            let project = createProjects.createProject(getElements.projectName())

            createProjects.addProjectToArray(project)

            displayModules.project(getElements.projectName())

            getElements.submitTodo().onclick = function (){

            let todo = createProjects.createTodo(getElements.todoName(), getElements.todoNotes(), getElements.todoDate(), getElements.todoPriority())

            project.storeTodos(todo)

            console.log(createProjects.arrayOfProjects)
        }
        }
    }, 

 
    
  

}

export {eventHandlers}
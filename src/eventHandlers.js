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

            
        
        }

    }, 

 
    //What is happening now, is that we create a project, and we stick to it the method of storing the todo, the problems is that it will always push it to the last project, created because the variabe is constantly updating

    //Once we create a project, we should create a function that gives us the data attribute of the own name of the project hyphen sepharated.


}

export {eventHandlers}
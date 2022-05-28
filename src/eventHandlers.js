import getElements from "./getElements";
import createProjects from './createProjects'
import displayModules from './displayModules'

let eventHandlers = {

    addProject() {
        getElements.addProject().onclick = function () {
            getElements.projectModal().showModal()
        }
    },
    addTodoTo() {
        getElements.addTodo().addEventListener('click', ()=> {
            alert('hola buenos dias')
        })
        }
    ,
    closeModal(){
        getElements.closeModal().onclick = function(){
            getElements.projectModal().close()
        }
    },
    submitProject(){
        getElements.submitProject().onclick = function(){
        let project = createProjects.createProject(getElements.projectName())
        createProjects.addProjectToArray(project)
        displayModules.project(getElements.projectName())
        }
    }, 
}

export {eventHandlers}
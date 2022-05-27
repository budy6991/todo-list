import getElements from "./getElements";
import createProjects from './createProjects'
 

let eventHandlers = {

    addProject() {
        getElements.getAddProject().onclick = function () {
            getElements.getProjectModal().showModal()
        }
    },
    closeModal(){
        getElements.getCloseModal().onclick = function(){
            getElements.getProjectModal().close()
        }
    },
    submitProject(){
        getElements.getSubmitProject().onclick = function(){
        let project = createProjects.createProject(getElements.getProjectName())
        createProjects.addProjectToArray(project)
        console.log(createProjects.arrayOfProjects)
        }
    }, 
}

export {eventHandlers}
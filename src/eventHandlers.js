import getElements from "./getElements";


let eventHandlers = {

    addProject() {
        getElements.getAddProject().onclick = function () {
            getElements.getProjectModal().showModal()
        }
    },
    submitProject(){
        getElements.getSubmitProject().onclick = function(){
            
        }
    }
    
}

export {eventHandlers}
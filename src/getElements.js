export default {
    getAddProject(){
        return document.querySelector('.add-project-button')
    },
    getSubmitProject(){
        return document.querySelector('.submit-project')
    }, 
    getProjectModal(){
        return document.querySelector('.project-modal')
    }, 
    getSubmitProjectModal(){
        return document.querySelector('.submit-project')
    }, 

    getCloseModal(){
        return document.querySelector('.close-modal')
    },

    getProjectName(){
        return document.getElementById('add-project-name').value
    }
}
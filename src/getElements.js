export default {
    addProject(){
        return document.querySelector('.add-project-button')
    },
    submitProject(){
        return document.querySelector('.submit-project')
    }, 
    projectModal(){
        return document.querySelector('.project-modal')
    }, 
    closeModal(){
        return document.querySelector('.close-modal')
    },
    projectName(){
        return document.getElementById('add-project-name').value
    }, 
    body(){
        return document.querySelector('body')
    }
}
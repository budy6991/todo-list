
export default {
    addProject(){
        return document.querySelector('.add-project-button')
    },
    submitProject(){
        return document.querySelector('.submit-project')
    }, 
    submitTodo(){
        return document.querySelector('.submit-todo')
    },
    projectModal(){
        return document.querySelector('.project-modal')
    }, 
    todoModal(){
        return document.querySelector('.todo-modal')
    },
    closeTodoModal(){
        return document.querySelector('.close-todo-modal')
    },
    closeModal(){
        return document.querySelector('.close-modal')
    },
    projectName(){
        return document.getElementById('add-project-name').value
    }, 
    todoName(){
        return document.getElementById('todo-name').value
    },
    todoNotes(){
        return document.getElementById('todo-notes').value
    },
    todoDate(){
        return document.getElementById('todo-date').value
    },
    todoPriority(){
        return document.getElementById('todo-priority').value
    },
    projectContainer(){
        return document.querySelector('.project-container')
    }, 
    body(){
        return document.querySelector('body')
    },
    mainContainer(){
        return document.querySelector('.main-container')
    }
    
    
}
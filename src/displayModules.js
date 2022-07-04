import { create, functionsIn, get, indexOf, remove } from "lodash";
import getElements from "./getElements";
import createProjects from './createProjects'
import { eventHandlers } from "./eventHandlers";
import removeChildren from "./removeChildren";


function buildProject (name) {

    //Initialize the variables to store the details of the project

    let project = document.createElement('div')
    let projectName = document.createElement('p')
    let addTodo = document.createElement('button')
    let expandProject = document.createElement('button')
    let removeProject = document.createElement('button')
    let todoContainer = document.createElement('div')
    let submitTodoEdit = document.querySelector('.submit-todo-edit')
    let closeContainer = document.createElement('button')
    let projectTitle = document.createElement('div')

    //Add the classes to the variables

    project.classList.add('project-card')
    addTodo.classList.add('add-todo')
    expandProject.classList.add('expand-project')
    removeProject.textContent = 'Remove'
    todoContainer.classList.add('todo-container')
    projectTitle.classList.add('project-title')

    // Populates the content of the divs 

    removeProject.textContent = 'Remove'
    addTodo.textContent = 'Add todo'
    expandProject.textContent = 'Expand'
    projectName.textContent = name
    closeContainer.textContent = 'X'

    // Appending the elements. 

    todoContainer.append(closeContainer)
    
    project.append(projectName, addTodo, removeProject, expandProject)
    getElements.projectContainer().appendChild(project)

    //Set the data attributes 

    project.dataset.identifier = name 
    addTodo.dataset.identifier = name 

    console.log(createProjects.arrayOfProjects)

    // Adds the event listeners 

    removeProject.onclick = function (){
        getElements.projectContainer().removeChild(project)
        createProjects.arrayOfProjects.forEach(project =>{ if(project.name === projectName.textContent){
            const index = createProjects.arrayOfProjects.indexOf(project)
            createProjects.arrayOfProjects.splice(index, 1) 
            
            console.log('Me cago en dios')

            if (project.todos.length != 0) {
                
                getElements.mainContainer().removeChild(todoContainer)
            }
        }} )   
        
    }

}

function buildTodo () {

    //Creates the todo and stores in the project

    let todo = createProjects.createTodo(getElements.todoName(), getElements.todoNotes(), getElements.todoDate(), getElements.todoPriority())
    
    project.storeTodos(todo)

    //Initialize the variables

    let todoCard = document.createElement('div')
    let todoName = document.createElement('div')
    let todoDate = document.createElement('div')
    let todoPriority = document.createElement('div')
    let todoExpand = document.createElement('button')
    let todoRemove = document.createElement('button')

    //Adds the classes
    
    todoExpand.classList.add('todo-expand')
    todoRemove.textContent = 'X'
    todoRemove.classList.add('todo-remove')
    todoCard.classList.add('todo-card')

    //Populates the content 
    
    todoExpand.textContent  = 'Info/ Edit'


    //Appending

    todoName.append(`Name: ${todo.name}`)
    todoDate.append(`Date: ${todo.date}`)
    todoPriority.append(`Priority: ${todo.priority}`)
    todoCard.append(todoName,todoDate, todoPriority, todoExpand, todoRemove)
    todoContainer.append(todoCard)
}




let display = {

    project(name) {
           

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; 
        var yyyy = today.getFullYear();

        if (dd < 10) {
        dd = '0' + dd;
        }

        if (mm < 10) {
        mm = '0' + mm;
        } 
            
        today = yyyy + '-' + mm + '-' + dd;


        document.getElementById("todo-date").setAttribute("min", today);
        document.getElementById("todo-date-edit").setAttribute("min", today);

        buildProject(name)
        

        addTodo.onclick = function (){
            
            getElements.todoModal().showModal()
            getElements.submitTodo().onclick = function (){

            

                createProjects.arrayOfProjects.forEach(project => {

                    if (project.name === addTodo.dataset.identifier) {


                        
                        let todo = createProjects.createTodo(getElements.todoName(), getElements.todoNotes(), getElements.todoDate(), getElements.todoPriority())
                    
                        project.storeTodos(todo)

                        let todoCard = document.createElement('div')
                        let todoName = document.createElement('div')
                        let todoDate = document.createElement('div')
                        let todoPriority = document.createElement('div')
                        let todoExpand = document.createElement('button')
                        let todoRemove = document.createElement('button')

                        

                        todoExpand.textContent  = 'Info/ Edit'
                        todoExpand.classList.add('todo-expand')
                        todoRemove.textContent = 'X'
                        todoRemove.classList.add('todo-remove')
                        todoCard.classList.add('todo-card')

                        todoName.append(`Name: ${todo.name}`)
                        // todoNotes.append(`Notes: ${todo.notes}`)
                        todoDate.append(`Date: ${todo.date}`)
                        todoPriority.append(`Priority: ${todo.priority}`)

                        todoCard.append(todoName,todoDate, todoPriority, todoExpand, todoRemove)
                        
                        todoContainer.append(todoCard)

                        
                        

                        todoRemove.onclick = function(){

                           const index = project.todos.indexOf(todo)
                           project.todos.splice(index, 1)
                           todoContainer.removeChild(todoCard)
                           

                        }

                        todoExpand.onclick = function(){
                            

                            getElements.todoModalEdit().showModal()

                            getElements.todoNameEdit().value = todo.name
                            getElements.todoNotesEdit().value = todo.notes
                            getElements.todoDateEdit().value = todo.date
                            getElements.todoPriorityEdit().value = todo.priority

                            
                            
                        
                            submitTodoEdit.onclick = function(){

                                removeChildren(todoCard)                                
                                
                                let todoName = document.createElement('div')
                                // let todoNotes = document.createElement('div')
                                let todoDate = document.createElement('div')
                                let todoPriority = document.createElement('div')
                                let todoExpand = document.createElement('button')
                                let todoRemove = document.createElement('button')
                                
                                todo.name = getElements.todoNameEdit().value
                                todo.notes = getElements.todoNotesEdit().value
                                todo.date = getElements.todoDateEdit().value
                                todo.priority = getElements.todoPriorityEdit().value
                                
                                todoExpand.textContent  = 'Info/ Edit'
                                todoExpand.classList.add('todo-expand')
                                todoRemove.textContent = 'X'
                                todoRemove.classList.add('todo-remove')

                                todoCard.classList.add('todo-card')
                                
                                todoName.append(`Name: ${todo.name}`)
                                // todoNotes.append(`Notes: ${todo.notes}`)
                                todoDate.append(`Date: ${todo.date}`)
                                todoPriority.append(`Priority: ${todo.priority}`)
                                
                                
                                
                                todoCard.append(todoName,todoDate, todoPriority, todoExpand, todoRemove)

                                todoExpand.onclick = function(){
                            
                                    getElements.todoModalEdit().showModal()
                                    getElements.todoNameEdit().value = todo.name
                                    getElements.todoNotesEdit().value = todo.notes
                                    getElements.todoDateEdit().value = todo.date
                                    getElements.todoPriorityEdit().value = todo.priority
                                }

                                todoRemove.onclick = function(){

                                    const index = project.todos.indexOf(todo)
                                    project.todos.splice(index, 1)
                                    todoContainer.removeChild(todoCard)
                                    
         
                                 }

                                
                                
                            }

                        }
                                  
                        
                    }

                    expandProject.onclick = function (){
                        removeChildren(getElements.mainContainer())
                        getElements.mainContainer().appendChild(todoContainer)
                        projectTitle.textContent = project.name

                        if (project.name != '') {
                        todoContainer.appendChild(projectTitle)  
                        }
                         
                    }

                })

            }
        
        }

        

        closeContainer.onclick = function(){
            todoContainer.removeChild(projectTitle)
            removeChildren(getElements.mainContainer())
              
        }
        
    }
}



export default display
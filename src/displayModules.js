import { create, functionsIn, get, indexOf, remove } from "lodash";
import getElements from "./getElements";
import createProjects from './createProjects'
import { eventHandlers } from "./eventHandlers";
import removeChildren from "./removeChildren";


let display = {

    project(name) {

        let project = document.createElement('div')
        let projectName = document.createElement('p')
        let addTodo = document.createElement('button')
        let expandProject = document.createElement('button')
        let removeProject = document.createElement('button')
        let todoContainer = document.createElement('div')
        
        let submitTodoEdit = document.querySelector('.submit-todo-edit')

        let closeContainer = document.createElement('button')

        addTodo.classList.add('add-todo')
        removeProject.classList.add('remove-project')
        project.classList.add('project-card')

        let projectTitle = document.createElement('div')
        projectTitle.classList.add('project-title')
        
        
        expandProject.classList.add('expand-project')
        todoContainer.classList.add('todo-container')

        closeContainer.classList.add('close-container')

        removeProject.textContent = 'Remove'
        addTodo.textContent = 'Add todo'
        expandProject.textContent = 'Expand'
        projectName.textContent = name

        closeContainer.textContent = 'X'
        
        todoContainer.append(closeContainer)
    
        project.append(projectName, addTodo, removeProject, expandProject)
        getElements.projectContainer().appendChild(project)

        project.dataset.identifier = name 
        addTodo.dataset.identifier = name 

        addTodo.onclick = function (){
            
            getElements.todoModal().showModal()
            getElements.submitTodo().onclick = function (){
                
                createProjects.arrayOfProjects.forEach(project => {

                    if (project.name === addTodo.dataset.identifier) {
                        
                        let todo = createProjects.createTodo(getElements.todoName(), getElements.todoNotes(), getElements.todoDate(), getElements.todoPriority())
                    
                        project.storeTodos(todo)

                        let todoCard = document.createElement('div')
                        let todoName = document.createElement('div')
                        // let todoNotes = document.createElement('div')
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
                           console.log(project.todos)
                           console.log(project)

                        }

                        todoExpand.onclick = function(){
                            

                            getElements.todoModalEdit().showModal()

                            getElements.todoNameEdit().value = todo.name
                            getElements.todoNotesEdit().value = todo.notes
                            getElements.todoDateEdit().value = todo.date
                            getElements.todoPriorityEdit().value = todo.priority

                            console.log(project)
                            
                        
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
                                    console.log(project.todos)
                                    console.log(project)
         
                                 }

                                console.log(project)
                                
                            }

                        }
                                  
                        console.log(createProjects.arrayOfProjects)
                    }

                    expandProject.onclick = function (){
                        removeChildren(getElements.mainContainer())
                        getElements.mainContainer().appendChild(todoContainer)
                        projectTitle.textContent = project.name
                        todoContainer.appendChild(projectTitle)  
                         
                    }

                })

            }
        
        }

        removeProject.onclick = function (){
            getElements.projectContainer().removeChild(project)
            createProjects.arrayOfProjects.forEach(project =>{ if(project.name === projectName.textContent){
                const index = createProjects.arrayOfProjects.indexOf(project)
                createProjects.arrayOfProjects.splice(index, 1) 
                console.log(createProjects.arrayOfProjects)
                if (project.todos.length != 0) {
                    console.log('Hola buenos dias')
                    console.log(project.todos)
                    getElements.mainContainer().removeChild(todoContainer)
                }
            }} )   
            
        }

        closeContainer.onclick = function(){
            todoContainer.removeChild(projectTitle)
            removeChildren(getElements.mainContainer())
              
        }
        
    }
}



export default display
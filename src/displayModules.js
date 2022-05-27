import getElements from "./getElements";

let display = {
    project(name) {
        let project = document.createElement('div')
        project.textContent = name
        getElements.body().appendChild(project)
    }
}

export default display
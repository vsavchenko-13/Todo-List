import * as css from "./styles.css";
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const menus = document.querySelector(".menus");
const addProject = document.querySelector(".addProject");
addProject.addEventListener("click", newProjectForm);


function createElement(elementType, attributes = {}, text = ""){
    const element = document.createElement(elementType);
    Object.keys(attributes).forEach(key => element[key] = attributes[key]);
    if(text != ""){
        element.textContent = text;
    }
    return element;
}

function newProject() {
    event.preventDefault();
    const newProject = document.querySelector("#newProject").value;
    const h3 = document.createElement("h3");
    h3.textContent = newProject;
    left.appendChild(h3);
}

function newProjectForm(){
    const form = createElement("form");

    const label = createElement("label", {htmlFor: "newProject"}, "New Project Name:");
    const input = createElement("input", {type: "text", id: "newProject", name: "newProject"});
    const button = createElement("button",{type: "button"}, "Submit");
    button.addEventListener("click", newProject);

    form.append(label, input, button);
    left.appendChild(form);
}


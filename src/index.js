import * as css from "./styles.css";
import {storageAvailable} from "./storage.js";
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const menus = document.querySelector(".menus");
const addProject = document.querySelector(".addProject");
addProject.addEventListener("click", newProjectForm);

storageAvailable();

function createElement(elementType, attributes = {}, text = ""){
    const element = document.createElement(elementType);
    Object.keys(attributes).forEach(key => element[key] = attributes[key]);
    if(text != ""){
        element.textContent = text;
    }
    return element;
}



//Call current project
function callProject(name){
    const header = createElement("h3", {}, name.textContent);
    right.appendChild(header);
}

//build a factory for the actual todo list
function callTodo(name){

}

function newProject() {
    const newProject = document.querySelector("#newProject").value;
    const a = document.createElement("a");
    a.textContent = newProject;
    a.addEventListener("click", function(){
        callProject(a);
    })
    left.appendChild(a);
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


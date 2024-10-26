import * as css from "./styles.css";
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const menus = document.querySelector(".menus");
const addProject = document.querySelector(".addProject");
//addProject.addEventListener("click", newProject);


function createElement(attributes){
      console.log(attributes.name);
}

createElement({name:"bib", age:"56",hobbies:["games","drugs","food"]})


/*function newProject(){
    const newForm = document.createElement("form");
    const label = document.createElement("label");
    label.htmlFor = "projectName";
    label.innerText = "Project Name:"
    
    const projectName = document.createElement("input");
    projectName.type="text";
    projectName.id = "projectName";
    projectName.name = "projectName";

    const button = document.createElement("button");
    button.type = "submit";
    button.value = "Submit"
    button.textContent = "Submit";

    newForm.appendChild(label);
    newForm.appendChild(projectName);
    newForm.appendChild(button);
    menus.appendChild(newForm);
}*/




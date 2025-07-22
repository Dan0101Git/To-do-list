import domElements from "./domElements";
import { domCalls } from "./index";
const eventListeningHelpers=(function(){
    function buttonCreateProject(e){
        if(e.target=== domElements.createProjectButt){ 
            domElements.createProjectDialog.classList.add("enter-project");
    domElements.createProjectDialog.showModal();}
   
    if(e.target.className==="task-list-button")
    {
        
        domElements.createTaskDialog.classList.add("enter-task");
        domElements.createTaskDialog.setAttribute("data-set",`${e.target.getAttribute("data-set")}`);
       domElements.createTaskDialog.showModal();

    }
    }

    function createProject(e){
        e.preventDefault();
        if(e.target.className==="project-form"){
                 
                domElements.createProjectDialog.close();
      domCalls.createElement([domElements.projectInput.value],"project"); //index interaction 1
        }
        if(e.target.className==="task-form"){

        domElements.createTaskDialog.close();
            domCalls.createElement([document.querySelector("#task-title").value,document.querySelector("#task-date").value,document.querySelector("#description").value],"task", domElements.createTaskDialog.getAttribute("data-set"));
        }

    }

    return {buttonCreateProject,createProject}
})();

export default eventListeningHelpers;
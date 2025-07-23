import domElements from "./domElements";
import { domCalls } from "./index";
const eventListeningHelpers=(function(){
    let menuFlag=0;
    function buttonCreateProject(e){
        if(e.target=== domElements.createProjectButt){ 
            domElements.createProjectDialog.classList.add("enter-project");
    domElements.createProjectDialog.showModal();}
   
    if(e.target.className==="task-list-button")
    {
        
        domElements.createTaskDialog.classList.add("enter-task");
        domElements.createTaskDialog.setAttribute("data-set",`${e.target.getAttribute("data-set")}`);
       domElements.createTaskDialog.showModal();

    }console.log(e.target.className);
        if(menuFlag===1 &&  document.querySelector(".menu-show"))
        {
                    document.querySelector(".menu-show").classList.remove("menu-show");
                    menuFlag=0;
                    console.log(menuFlag);
        }
    
    else if(e.target.className==="kebab" ){
        Array.from(e.target.children)[0].classList.add("menu-show");
        menuFlag=1;
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
        if(e.target.className==="delete project")
        {
            console.log(e.target.parentNode);
            domCalls.deleteElement("",e.target.parentNode.getAttribute("data-set"));
            e.stopPropagation();
        }

    }

    return {buttonCreateProject,createProject}
})();

export default eventListeningHelpers;
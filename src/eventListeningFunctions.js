import domElements from "./domElements";
import { domCalls } from "./index";
import domHelper from "./domhelper";
const eventListeningHelpers=(function(){
    let taskEditFlag=0;
    let elemntflag;
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

    if(e.target.className==="kebab" || document.querySelector(".menu-show")){
        if(document.querySelector(".menu-show"))
        document.querySelector(".menu-show").classList.toggle("menu-show");
        else
         Array.from(e.target.children)[0].classList.toggle("menu-show");
    }
   if (e.target.classList.contains("tasks-lists")) {
    console.log(e.target.nextElementSibling);

    e.target.parentNode.classList.toggle("on");

    if (e.target.parentNode.nextElementSibling && e.target.parentNode.getAttribute("data-set")===e.target.parentNode.nextElementSibling.getAttribute("data-set")) {
        e.target.parentNode.nextElementSibling.classList.toggle("on");
    } else {
        e.target.parentNode.previousElementSibling.classList.toggle("on");
    }
}

    
    }

    function createProject(e){
        e.preventDefault();
        if(e.target.className==="project-form"){
                 
                domElements.createProjectDialog.close();
      domCalls.createElement([domElements.projectInput.value],"project"); //index interaction 1
        }
        if(e.target.className==="task-form"){
console.log(document.querySelector("#task-date").value);
        domElements.createTaskDialog.close();
            domCalls.createElement([document.querySelector("#task-title").value,document.querySelector("#description").value,document.querySelector("#task-date").value,false],"task", domElements.createTaskDialog.getAttribute("data-set"));
        }
        if(e.target.className==="delete")
        {

            domCalls.deleteElement("",e.target.parentNode.getAttribute("data-set"));
            e.stopPropagation();
        }
           if(e.target.className==="star")
        {
            console.log(e.target.parentNode);
            const taskId=e.target.parentNode.getAttribute("data-set");
            const elementList=document.querySelector(`li[data-set="${taskId}"]`);
            elementList.classList.toggle("starred-list")
            elementList.setAttribute("data-starred",!(elementList.getAttribute("data-starred")==="true"));
            domCalls.editElement(domHelper.getelementData(taskId),"star",taskId);
            e.stopPropagation();
        }

        if(e.key==="Enter"){
            if(e.target.tagName==="INPUT" || e.target.tagName==="TEXTAREA")
{
    const taskId=e.target.parentNode.getAttribute("data-set");
   domCalls.editElement([document.querySelector(".on input").value,document.querySelector(".on textarea").value,"",""],"edit",taskId)
}
        }

    }

    return {buttonCreateProject,createProject}
})();

export default eventListeningHelpers;
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
    }console.log(e.target);

    if(e.target.className==="kebab" || document.querySelector(".menu-show")){
        if(document.querySelector(".menu-show"))
        document.querySelector(".menu-show").classList.toggle("menu-show");
        else
         Array.from(e.target.children)[0].classList.toggle("menu-show");
    }

   if ((e.target.closest(".all-tasks") && !e.target.closest(".all-tasks").classList.contains("completed-list") && e.target.tagName!=="BUTTON" && e.target.tagName!=="IMG" )||document.querySelector("#final-task-edit.on")) {
    console.log(e.target.nextElementSibling);
    const taskList=e.target.closest(".all-tasks");
    const editAreaList=document.querySelector("#final-task-edit.on");
    console.log(editAreaList);
    if(editAreaList && !e.target.closest("#final-task-edit.on"))
    {
        document.querySelector("#final-task-edit.on").classList.toggle("on");
        editAreaList.previousElementSibling.classList.toggle("on");
    }
    console.log(editAreaList);
    if(taskList && !document.querySelector("#final-task-edit.on"))
   {taskList.classList.toggle("on");
        taskList.nextElementSibling.classList.toggle("on");} 

}
if(e.target.className==="date-shortcut" && e.target.tagName==="IMG")
{
    const taskId=e.target.getAttribute("data-set");
    const datePicker=document.querySelector(`li[data-set="${taskId}"] input[type="date"]`);
    console.log(datePicker);
    datePicker.showPicker();
    datePicker.addEventListener("change",
        createProject);
       
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
            domCalls.createElement([document.querySelector("#task-title").value,document.querySelector("#description").value,document.querySelector("#task-date").value,false,false],"task", domElements.createTaskDialog.getAttribute("data-set"));
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
            elementList.setAttribute("data-starred",!(elementList.getAttribute("data-starred")==="true"));
            domCalls.editElement(domHelper.getelementData(taskId),"star",taskId);
            e.stopPropagation();
        }
        if(e.target.className==="toggle-completion"){
                        console.log(e.target.parentNode);
            const taskId=e.target.parentNode.getAttribute("data-set");
            const elementList=document.querySelector(`li[data-set="${taskId}"]`);
            elementList.setAttribute("completed",!(elementList.getAttribute("completed")==="true"));
               domCalls.editElement(domHelper.getelementData(taskId),"circle",taskId);
        }

        if(e.key==="Enter" || e.target.getAttribute("type")==="date" || e.target.className==="date-shortcut"){
            if(e.target.getAttribute("type")==="date")
                e.currentTarget.removeEventListener("click",createProject);
            if(e.target.tagName==="INPUT" || e.target.tagName==="TEXTAREA" || e.target.tagName==="BUTTON")
{
    console.log(document.querySelector("#final-task-edit"));
    const taskId=e.target.parentNode.getAttribute("data-set");
   domCalls.editElement([document.querySelector(".on input").value,document.querySelector(".on textarea").value,document.querySelector(".on input[type='date']").value || e.target.getAttribute("value"),"",false],"edit",taskId)
}
        }

    }

    return {buttonCreateProject,createProject}
})();

export default eventListeningHelpers;
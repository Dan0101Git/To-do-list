import domElements from "./domElements";
import { domCalls } from "./index";
import domHelper from "./domhelper";
import handlerHelpers from "./handlerHelper";
import uiState from "./uiState";
const eventListeningHelpers=(function(){
    let taskEditFlag=0;
    let elemntflag;
    function buttonCreateProject(e){
console.log(e.target,e.target.isConnected );
        if(handlerHelpers.isElementClicked(e,".create-project"))
            handlerHelpers.openAddProjectModal();  

   
    if(e.target.closest(".add-starred"))
    {
        domElements.createTaskDialog.classList.add("enter-task");
        console.log(e.target);
       domElements.createTaskDialog.showModal();
    }
    if(uiState.taskMode==="write" && e.target.closest(".completed-list"))
    {
        handlerHelpers.renderOpenedElement();
    }

    if(handlerHelpers.isElementClicked(e,".kebab") || handlerHelpers.isblurMenuOpened(".menu-show")){
      if(document.querySelector(".menu-show"))
        document.querySelector(".menu-show").classList.toggle("menu-show");
        else{const projectDataset=e.target.getAttribute("data-set");
       console.log(document.querySelector(`[data-set="${projectDataset}"] .project-menu`))
        handlerHelpers.toggleMenuVisbility(`[data-set="${projectDataset}"] .project-menu`,"menu-show")}

    }

   if ((handlerHelpers.isElementClicked(e,".all-tasks") && e.target.tagName!=="BUTTON" && e.target.tagName!=="IMG" && !e.target.matches(".toggle-completion") )||(handlerHelpers.isblurMenuOpened("#final-task-edit.on") && !e.target.closest(".clickable"))) {
        const editAreaTask = document.querySelector("#final-task-edit.on");
        const readAreaTask=e.target.closest("#final-task-read");
        handlerHelpers.handletaskEditable(e,editAreaTask,readAreaTask);
    }
if(e.target.closest(".date-shortcut") && e.target.tagName==="IMG")
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
        if(e.target.closest(".project-form")){
                 
                domElements.createProjectDialog.close();
      domCalls.createElement([domElements.projectInput.value,"","","","","true"],"project"); //index interaction 1
        }
        if(e.target.closest(".task-form")){
console.log(document.querySelector("#task-date").value);
        domElements.createTaskDialog.close();
                    if(document.querySelector(".starred-layout.view-tasks")){
                        const selected=document.querySelector("#projects-drop").value;
                        const valueObject=JSON.parse(selected);
                        console.log(valueObject);
                        domCalls.createElement([document.querySelector("#task-title").value,document.querySelector("#description").value,document.querySelector("#task-date").value,"true",false],"task", valueObject.id);

                    }
else
            domCalls.createElement([document.querySelector("#task-title").value,document.querySelector("#description").value,document.querySelector("#task-date").value,false,false],"task", domElements.createTaskDialog.getAttribute("data-set"));
        }
        if(e.target.closest(".task-list-button.normal")){
            domCalls.createElement(["","","","",false,false],"button", e.target.closest(".task-list-button").getAttribute("data-set"));
            handlerHelpers.focusOnEditInput();
            uiState.taskMode="write";
            console.log("hmm");
        }
        if(e.target.closest(".delete"))
        {
            const listClicked=e.target.closest("#final-task-read");
            console.log(listClicked)
            listClicked.classList.add("trash-check");
const alert = document.createElement("span");
alert.className = "delete-alert";
alert.innerHTML = `Task Deleted <button id="undo">UNDO</button>`;
document.body.appendChild(alert);

// Animate in (trigger reflow first)
requestAnimationFrame(() => {
  alert.classList.add("show");
});
            document.querySelector("#undo").addEventListener("click",()=>{  listClicked.classList.remove("trash-check");                uiState.state="undo";
                document.body.querySelector(".delete-alert").remove();
            });
            setTimeout(()=>{
                if(uiState.state==="undo")
                {
                     return;
                }
                alert.classList.remove("show");
  alert.classList.add("hide");
                console.log(listClicked.getAttribute("data-set"));
                 setTimeout(() => alert.remove(), 300);
               domCalls.deleteElement("",listClicked.getAttribute("data-set"));
   
                                 
            },4000);
 e.stopPropagation(); 
      
        }
           if(e.target.closest(".star"))
        {
            console.log(e.target.parentNode);
            const taskId=e.target.parentNode.getAttribute("data-set");
            const elementList=document.querySelector(`li[data-set="${taskId}"]`);
            elementList.setAttribute("data-starred",!(elementList.getAttribute("data-starred")==="true"));
                         handlerHelpers.updateWriteTask(e);
            domCalls.editElement(domHelper.getelementData(taskId),"star",taskId);
            e.stopPropagation();
        }
        if(e.target.closest(".toggle-completion")){
                        console.log(e.target.parentNode);
            const taskId=e.target.parentNode.getAttribute("data-set");
            const elementList=document.querySelector(`li[data-set="${taskId}"]`);
            elementList.setAttribute("completed",!(elementList.getAttribute("completed")==="true"));
          console.log(uiState.taskMode);
            handlerHelpers.updateWriteTask(e);
            if(!e.target.closest(".completed-list"))
             handlerHelpers.shootBlackFragments(e)
               domCalls.editElement(domHelper.getelementData(taskId),"circle",taskId);
            }

        if((e.key==="Enter" || e.target.getAttribute("type")==="date" || e.target.closest(".date-shortcut")) && e.target.closest("#final-task-edit") ){
            const normalListMode=e.target.closest("#final-task-edit")?e.target.closest("#final-task-edit").previousElementSibling:null;
            let dateButtonClicked="";
            if(e.target.tagName==="BUTTON")
                dateButtonClicked=e.target.getAttribute("value");
            if(e.target.getAttribute("type")==="date")
                e.currentTarget.removeEventListener("click",createProject);
            if(e.target.tagName==="INPUT" || e.target.tagName==="TEXTAREA" || e.target.tagName==="BUTTON")
{

    const taskId=e.target.parentNode.getAttribute("data-set");
   domCalls.editElement([document.querySelector(".on input").value,document.querySelector(".on textarea").value,document.querySelector(".on input[type='date']").value ||dateButtonClicked || normalListMode.getAttribute("data-date"),normalListMode.getAttribute("data-starred"),false],"edit",taskId)
}
        }

    }

    return {buttonCreateProject,createProject}
})();

export default eventListeningHelpers;
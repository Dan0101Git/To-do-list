import uiState from "./uiState";
import domElements from "./domElements";
import domHelper from "./domhelper";
import { domCalls } from ".";
const handlerHelpers=(function(){
    function isElementClicked(e,element){
       return (e.target.matches(element) || e.target.closest(element));
    }
        function isblurMenuOpened(selector){
        return document.querySelector(selector);
    }
    function toggleMenuVisbility(otherSelector,className){
       document.querySelector(otherSelector).classList.toggle(className);
    }

    function openAddProjectModal(){
             domElements.createProjectDialog.classList.add("enter-project");
             domElements.createProjectDialog.showModal();
            uiState.state="modal-opened";
            }
    function handletaskEditable(e,editAreaTask,readAreaTask){
console.log(uiState.taskMode,isTaskEditbale(e.target.closest(".all-tasks")),e.target.tagName);
// if(e.target.closest.tagName==="BUTTON"){
//     if(uiState.taskMode==="write" && )
// }

if(uiState.taskMode==="write" && readAreaTask && editAreaTask && getDataSetAttribute(readAreaTask)!==handlerHelpers.getDataSetAttribute(editAreaTask) &&isTaskEditbale(e.target.closest(".all-tasks")))
{
    console.log("ok");    
    uiState.tempAttribute=readAreaTask.getAttribute("data-set");
if(isTaskNew(editAreaTask) && domHelper.isElementEmpty()){    console.log("hey");
domCalls.deleteElement("",editAreaTask.getAttribute("data-set"));
        readAreaTask=document.querySelector(`#final-task-read[data-set="${uiState.tempAttribute}"]`);
      console.log(uiState.taskMode);
        updateTaskMode("write",readAreaTask,readAreaTask.nextElementSibling);
        focusOnEditInput();
return;}       

        domCalls.editElement([document.querySelector(".on input").value,document.querySelector(".on textarea").value,editAreaTask.previousElementSibling.getAttribute("data-date"),editAreaTask.previousElementSibling.getAttribute("data-starred"),false],"edit",editAreaTask.getAttribute("data-set"))
        readAreaTask=document.querySelector(`#final-task-read[data-set="${uiState.tempAttribute}"]`);
        updateTaskMode("write",readAreaTask,readAreaTask.nextElementSibling);
        focusOnEditInput();

}
else if(uiState.taskMode==="read" && isTaskEditbale(e.target.closest(".all-tasks")))
    {
        console.log(readAreaTask);
        updateTaskMode("write",readAreaTask,readAreaTask.nextElementSibling);
focusOnEditInput();
    }

else if(uiState.taskMode==="write" && !e.target.closest(".on")){
  if(isTaskNew(editAreaTask) && domHelper.isElementEmpty())
{
    console.log(uiState.taskMode);

domCalls.deleteElement("",editAreaTask.getAttribute("data-set"));
console.log(uiState.taskMode);
return;
}
    domCalls.editElement([document.querySelector(".on input").value,document.querySelector(".on textarea").value,editAreaTask.previousElementSibling.getAttribute("data-date"),editAreaTask.previousElementSibling.getAttribute("data-starred"),false],"edit",editAreaTask.getAttribute("data-set"));
         uiState.taskMode="read";
}

    }
    function getDataSetAttribute(element){
        return element?element.getAttribute("data-set"):false;
    }

    function isTaskEditbale(task){
        return task?!task.matches(".completed-list"):false;
    }//not editable if it is completed 
    function isTaskNew(task){
        console.log(task);
        return task?task.matches(".isNew"):false;
    }
    function updateTaskMode(mode,selector1,selector2){
        uiState.taskMode=mode;
        toggleReadWriteTasks(selector1,selector2)

    }
    function toggleReadWriteTasks(selector1,selector2){
       selector1.classList.toggle("on");
        selector2.classList.toggle("on");
    }
    function focusOnEditInput(){
            let titleInput = document.querySelector("#final-task-edit.on input[type='text']");
    titleInput.focus();
    titleInput.setSelectionRange(titleInput.value.length, titleInput.value.length);
    }

    function isClickedOutside(e,selector){
        return !e.target.closest(selector)
    }
    function updateWriteTask(e){
        const editAreaTask = document.querySelector("#final-task-edit.on");
        const readAreaTask=e.target.closest("#final-task-read");
if(uiState.taskMode==="write"  && getDataSetAttribute(readAreaTask)!==handlerHelpers.getDataSetAttribute(editAreaTask) &&isTaskEditbale(e.target.closest(".all-tasks")))
{
    uiState.tempAttribute=readAreaTask.getAttribute("data-set");
if(isTaskNew(editAreaTask) && domHelper.isElementEmpty()){    console.log("hey");
setTimeout(()=>{domCalls.deleteElement("",editAreaTask.getAttribute("data-set"));},2)
return;}       
const dataArray=[document.querySelector(".on input").value,document.querySelector(".on textarea").value,editAreaTask.previousElementSibling.getAttribute("data-date"),editAreaTask.previousElementSibling.getAttribute("data-starred"),false];
      setTimeout(()=>{ domCalls.editElement(dataArray,"edit",editAreaTask.getAttribute("data-set"))},2) ;

}
    }
return {updateWriteTask,isClickedOutside,focusOnEditInput,getDataSetAttribute,isElementClicked,toggleMenuVisbility,openAddProjectModal,isblurMenuOpened,handletaskEditable,isTaskEditbale,updateTaskMode,isTaskNew}
 })();
export default handlerHelpers
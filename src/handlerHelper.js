import uiState from "./uiState";
import domElements from "./domElements";
import domHelper from "./domhelper";
import { domCalls } from ".";
import confetti from "canvas-confetti";
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
       setTimeout(()=>{ updateTaskMode("write",readAreaTask,readAreaTask.nextElementSibling);
        focusOnEditInput();},50);

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
        console.log(readAreaTask,editAreaTask,checkPresence(readAreaTask,editAreaTask));
if(uiState.taskMode==="write"  && checkPresence(readAreaTask,editAreaTask) && getDataSetAttribute(readAreaTask)!==handlerHelpers.getDataSetAttribute(editAreaTask))
{console.log(readAreaTask);
    uiState.tempAttribute=readAreaTask.getAttribute("data-set");
if(isTaskNew(editAreaTask) && domHelper.isElementEmpty()){   
setTimeout(()=>{domCalls.deleteElement("",editAreaTask.getAttribute("data-set"));},1002)
return;}       
const dataArray=[document.querySelector(".on input").value,document.querySelector(".on textarea").value,editAreaTask.previousElementSibling.getAttribute("data-date"),editAreaTask.previousElementSibling.getAttribute("data-starred"),false];
      setTimeout(()=>{ domCalls.editElement(dataArray,"edit",editAreaTask.getAttribute("data-set"))},1002) ;

}
    }
    function checkPresence(readAreaTask,editAreaTask){
        return readAreaTask && editAreaTask;
    }
    function renderOpenedElement(){
                const editAreaTask = document.querySelector("#final-task-edit.on");
            if(isTaskNew(editAreaTask) && domHelper.isElementEmpty()){
                domCalls.deleteElement("",editAreaTask.getAttribute("data-set"));
console.log(uiState.taskMode);
return;
            }
                const dataArray=[document.querySelector(".on input").value,document.querySelector(".on textarea").value,editAreaTask.previousElementSibling.getAttribute("data-date"),editAreaTask.previousElementSibling.getAttribute("data-starred"),false];
      setTimeout(()=>{ domCalls.editElement(dataArray,"edit",editAreaTask.getAttribute("data-set"))},0) ;

    }
    // This function creates the specific confetti burst you want
function shootBlackFragments(event) {
  // Get the position of the checkbox that was clicked
  const rect = event.target.getBoundingClientRect();
  const origin = {
    x: (rect.left + rect.width / 2) / window.innerWidth,
    y: (rect.top + rect.height / 2) / window.innerHeight
  };

  // Trigger the confetti animation with custom options
  confetti({
    particleCount: 50,         // The number of fragments
    spread: 45,                // How wide the burst is
    startVelocity: 40,         // How fast the fragments shoot out
    origin: origin,            // Where the burst comes from (the checkbox)
    colors: ['#000000'],       // Only use black fragments
    shapes: ['square'],        // Use square shapes
    scalar: 0.6,               // Makes the fragments smaller
    gravity: 1,
    drift: 0,
    ticks: 100                 // How long the animation lasts
  });
}
return {shootBlackFragments,renderOpenedElement,updateWriteTask,isClickedOutside,focusOnEditInput,getDataSetAttribute,isElementClicked,toggleMenuVisbility,openAddProjectModal,isblurMenuOpened,handletaskEditable,isTaskEditbale,updateTaskMode,isTaskNew}
 })();
export default handlerHelpers
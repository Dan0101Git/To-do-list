import uiState from "./uiState";
import domElements from "./domElements";
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
if(readAreaTask&&editAreaTask)
console.log( getDataSetAttribute(readAreaTask)!==getDataSetAttribute(editAreaTask));
if(uiState.taskMode==="write" && readAreaTask && editAreaTask && getDataSetAttribute(readAreaTask)!==handlerHelpers.getDataSetAttribute(editAreaTask))
{
       updateTaskMode("write",editAreaTask,editAreaTask.previousElementSibling);
        updateTaskMode("write",readAreaTask,readAreaTask.nextElementSibling);
}
else if(uiState.taskMode==="read" && isTaskEditbale(e.target.closest(".all-tasks")))
    {
        console.log(readAreaTask);
        updateTaskMode("write",readAreaTask,readAreaTask.nextElementSibling);

    let titleInput = document.querySelector("#final-task-edit.on input[type='text']");
    titleInput.focus();
    titleInput.setSelectionRange(titleInput.value.length, titleInput.value.length);
    }

else if(uiState.taskMode==="write" && !isTaskNew(editAreaTask))
      updateTaskMode("read",editAreaTask,editAreaTask.previousElementSibling);


else if(isTaskNew(editAreaTask))
{
   handleNewtask(editAreaTask);
}

    }
    function getDataSetAttribute(element){
        if(element)
        return element.getAttribute("data-set");
        else 
        return false;
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

return {getDataSetAttribute,isElementClicked,toggleMenuVisbility,openAddProjectModal,isblurMenuOpened,handletaskEditable,isTaskEditbale,updateTaskMode,isTaskNew}
 })();
export default handlerHelpers
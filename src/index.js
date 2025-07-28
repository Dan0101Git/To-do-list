import "./styles.css";
import eventListeners from "./eventListeners";
import { Library } from "./projectState";
import data from "./data";
import { mapElement } from "./data";
import stateObject from "./projectState";
import helper from "./helpers";




const domCalls=(function(){
    function createElement(dataString,element,parentId){
      
           if(element==="project"){
            const projectElement=Library.addChild(data(dataString));
             helper.updateState("create",projectElement.id);
             return projectElement;
           }
        else
       { let itemInfo=helper.detectItem(parentId);
      const elementCreated=  itemInfo.child.addChild(data(dataString)); 
         if(element==="button")
            helper.updateState("create-button",elementCreated.id)
        // console.log(stateObject.myLibrary.nestedArray);
        else
     helper.updateState("create",elementCreated.id);
    return elementCreated;
    } 
   
    //  console.log(stateObject.id,elementCreated.id);
     return ;
    }
    function deleteElement(element,parentId){
      const itemInfo=helper.detectItem(parentId);
      itemInfo.parent.deleteChild(itemInfo.child);
         helper.updateState("delete",parentId);
    }
    function editElement(dataString,action,taskId){
          const itemInfo=helper.detectItem(taskId);
        if(action!=="viewProject")
          dataString[2]=helper.getDate(dataString[2]);
          itemInfo.parent.updateChild(itemInfo.child,data(dataString));
          helper.updateState("edit",taskId);
         
    }
     function uiState(){
        helper.updateState("ui");
          }
    return {createElement,deleteElement,editElement,uiState};
})();




const defaultProject=domCalls.createElement(["Default","","","","","true"],"project");
 const defaultProject2=domCalls.createElement(["Things To do","","","","","true"],"project");

const delay = 200;
const taskData = [["add close button to modal", "after clicking on certain area and clicking back on completed task, t gets editable", "Today", "true"],["toggle sidebar view", "y8", "Tomorrow", "true"],["transitions", "y8", "Sun, August 3", "false"],["start working on subtasks", "y8", "Sun, August 3", "false"],["add new task in starred view mode", "y8", "Sun, August 3", "false"],["add completed tasks to the end of list", "y8", "Tomorrow", "false"]];
const taskData2 = [
  ["Complete DanishTodo", "Finish the main logic and UI cleanup", "Today", "true"],
  ["45-min strength training", "Focus on upper body push movements", "Today", "true"],
  ["Plan meals for the week", "Keep protein high and carbs moderate", "Today", "false","true"],
  ["Resume Odin backend", "Start NodeJS Foundations", "Tomorrow", "true"],
  ["Call ISP", "Report connection drop issues", "Tomorrow", "false"],
  ["Sort bike touring gear", "Check lights, brake pads, and clean chain", "Sun, July 28", "false"]];
createDefaultProject(6,defaultProject.id,taskData);
createDefaultProject(6,defaultProject2.id,taskData2)

 const task1=domCalls.createElement(taskData[0], "task", defaultProject.id);
function createDefaultProject(number,project,dataArray){for (let i = 1; i < number; i++) {
  setTimeout(() => {
    domCalls.createElement(dataArray[i], "task", project);
  }, i*delay);
}}


export {domCalls};
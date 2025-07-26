import "./styles.css";
import eventListeners from "./eventListeners";
import { Library } from "./projectState";
import data from "./data";
import { mapElement } from "./data";
import stateObject from "./projectState";
import helper from "./helpers";




const domCalls=(function(){
    function createElement(dataString,element,parentId){
           
      const elementCreated=  mapElement(element,parentId).addChild(data(dataString)); 
        
        console.log(stateObject.myLibrary.nestedArray);
     helper.updateState("create",elementCreated.id);
     console.log(stateObject.id,elementCreated.id);
     return elementCreated;
    }
    function deleteElement(element,parentId){
      const itemInfo=helper.detectItem(parentId);
      itemInfo.parent.deleteChild(itemInfo.child);
         helper.updateState("delete",parentId);
    }
    function editElement(dataString,action,taskId){
          const itemInfo=helper.detectItem(taskId);
          console.log(dataString);
          dataString[2]=helper.getDate(dataString[2]);
          console.log(dataString,itemInfo,action);
          itemInfo.parent.updateChild(itemInfo.child,data(dataString));
          helper.updateState("edit",taskId);
         
    }
     function uiState(){
console.log("hey");
        helper.updateState("ui");
          }
    return {createElement,deleteElement,editElement,uiState};
})();




const defaultProject=domCalls.createElement(["Default"],"project");
 const defaultProject2=domCalls.createElement(["Things To do"],"project");

const delay = 200;
const taskData = [["complete danishtodo", "y8", "Today", ""],["do somehting about acid", "y8", "Tomorrow", "true"],["long term debt", "y8", "Sun, August 3", "false"]];
const taskData2 = [
  ["Complete DanishTodo", "Finish the main logic and UI cleanup", "Today", "true"],
  ["Deep clean bathroom", "Scrub tiles and fix leaky tap", "Today", "false"],
  ["45-min strength training", "Focus on upper body push movements", "Today", "true"],
  ["Plan meals for the week", "Keep protein high and carbs moderate", "Today", "false","true"],
  ["Resume Odin backend", "Start NodeJS Foundations", "Tomorrow", "true"],
  ["Call ISP", "Report connection drop issues", "Tomorrow", "false"],
  ["Sort bike touring gear", "Check lights, brake pads, and clean chain", "Sun, July 28", "false"]];
createDefaultProject(3,defaultProject.id,taskData);
createDefaultProject(7,defaultProject2.id,taskData2)

 const task1=domCalls.createElement(taskData[0], "task", defaultProject.id);
function createDefaultProject(number,project,dataArray){for (let i = 1; i < number; i++) {
  setTimeout(() => {
    domCalls.createElement(dataArray[i], "task", project);
  }, i*delay);
}}


export {domCalls};
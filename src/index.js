import "./styles.css";
import eventListeners from "./eventListeners";
import { Library } from "./projectState";
import data from "./data";
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




 const defaultProject2=domCalls.createElement(["Things To do","","","","","true"],"project");
const defaultProject=domCalls.createElement(["Tasky Doables","","","","","true"],"project");
setTimeout(()=>{const defaultBasic=domCalls.createElement(["Daily Log","","","","","true"],"project");},0)
const delay = 100;
const taskData = [
  ["Refactor component layout", "Simplify JSX and separate concerns", "Today", "true"],
  ["Fix modal layering issue", "Ensure z-index respects hierarchy", "Today", "true", "true"],
  ["Strength workout (legs)", "Focus on squats, lunges, calves", "Today", "true"],
  ["Deep clean desk setup", "Declutter cables and align monitor", "Today", "false", "true"],
  ["Resume backend roadmap", "Work through Node.js routing module", "Tomorrow", "true"],
  ["Organize bookmarks", "Group by usage and relevance", "Tomorrow", "false"],
  ["Sync Notion calendar", "Integrate personal + dev tasks", "Sun, August 3", "false"],
  ["Review bike touring checklist", "Hydration, saddlebag, tubeless kit", "Sun, August 3", "false"],
  ["Take progress photos", "Evaluate posture & bodyfat drop", "Sun, August 3", "false"],
  ["Revisit 'Coding Interview Prep'", "Go through arrays and recursion", "Tomorrow", "true"],
  ["Update project README", "Add usage notes and setup steps", "Today", "true"],
  ["Stretch + unwind (20 min)", "Lower back and hip mobility", "Today", "false"]
];
const taskData2 = [
    ["add close button to modal", "after clicking on certain area and clicking back on completed task, t gets editable", "Today", "true","true"],["add completed tasks to the end of list", "y8", "Tomorrow", "false","true"],
  ["Complete DanishTodo", "Finish the main logic and UI cleanup", "Today", "true"],
  ["45-min strength training", "Focus on upper body push movements", "Today", "true"],
  ["Plan meals for the week", "Keep protein high and carbs moderate", "Today", "false","true"],
  ["Resume Odin backend", "Start NodeJS Foundations", "Tomorrow", "true"],
  ["Call ISP", "Report connection drop issues", "Tomorrow", "false"],
  ["Sort bike touring gear", "Check lights, brake pads, and clean chain", "Sun, July 28", "false"]];

createDefaultProject(8,defaultProject2.id,taskData2)
createDefaultProject(7,defaultProject.id,taskData)
function createDefaultProject(number,project,dataArray){for (let i = 1; i < number; i++) {
  setTimeout(() => {
    domCalls.createElement(dataArray[i], "task", project);
  }, 0);
}}


export {domCalls};
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
    return {createElement,deleteElement,editElement};
})();





const defaultProject=domCalls.createElement(["Default"],"project");


const delay = 300;
const taskData = [["complete danishtodo", "y8", "Today", ""],["do somehting about acid", "y8", "Tomorrow", "true"],["long term debt", "y8", "Sun, August 3", "false"]];

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    domCalls.createElement(taskData[i], "task", defaultProject.id);
  }, i*delay);
}

export {domCalls};
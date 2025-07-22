import "./styles.css";
import eventListeners from "./eventListeners";
import { Library } from "./projectState";
import data from "./data";
import { mapElement } from "./data";
import stateObject from "./projectState";
import helper from "./helpers";




const domCalls=(function(){
    function createElement(dataString,element,parentId){
        mapElement(element,parentId).addChild(data(dataString));  
        console.log(stateObject.myLibrary.nestedArray);
     helper.updateState("create");
     
    }
    return {createElement}
})();





const defaultProject=domCalls.createElement(["Default"],"project");




// const task2=defaultProject.addChild(data("complete danishtodo","y8","today","higjtyh"));
// const task3=defaultProject.addChild(data("complete gertodo","","today","high"));

// const subTask2=task2.addChild(data("start adding dom"));
// const subTask3=task3.addChild(data("start making ui"));


// const itemDelete=helper.detectItem(subTask2.id);
// itemDelete.parent.deleteChild(itemDelete.child)

// const itemUpdate=helper.detectItem(task2.id);
// itemUpdate.parent.updateChild(itemUpdate.child,data("danish nayyar"));




export {domCalls};
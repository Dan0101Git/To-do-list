import { domCalls } from ".";
import { localData } from "./data";
import stateObject from "./projectState";
const reHydrate=(function(){
function rehydrateLocalState(localState){
   
    localState.myLibrary.nestedArray.forEach((project)=>{
domCalls.createElement(localData(project),"project");
console.log(localData(project));
project.nestedArray.forEach((task)=>{

    domCalls.createElement(localData(task),"task",project.id);
})
    })
stateObject.appState="usage";
}
return {rehydrateLocalState}
})();
export default reHydrate;
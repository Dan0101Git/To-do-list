import stateObject from "./projectState";
import render from "./render";
export default (function helper(){
    function detectItem(itemId){
        return findItem(itemId,stateObject.myLibrary);//returns the o bject/project/task subtask clicked upon
    }
    function updateState(state){
        stateObject.state=state;
        render(stateObject);
    }
    return {detectItem,updateState}
})();

function findItem(itemId,searchObject){
   for(let project of searchObject.nestedArray){
        if(project.type==="subtask" )
        {   if(project.id===itemId)
           {
        return {parent:searchObject,child:project};}
        else 
            continue;
        }
        if(project.id===itemId)
           {
        return {parent:searchObject,child:project};}

     const result=findItem(itemId,project);
    if(result)
    return result;}
     return null
    }
    

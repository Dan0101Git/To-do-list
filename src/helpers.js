import stateObject from "./projectState";
export default (function helper(){
    function detectItem(itemId){
        return findItem(itemId,stateObject.myLibrary);//returns the o bject/project/task subtask clicked upon
    }
    return {detectItem}
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
    

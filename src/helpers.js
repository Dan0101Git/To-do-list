import stateObject from "./projectState";
import { Library } from "./projectState";
import render from "./render";
export default (function helper(){
    function detectItem(itemId){
        return findItem(itemId,Library);//returns the o bject/project/task subtask clicked upon
    }
    function updateState(state,elementId){
        stateObject.state=state;
        stateObject.id=elementId;
        render(stateObject);
    }
function getDate(date) {
  const myDate = new Date(date);
  const today = new Date();
  console.log(date.charCodeAt(0));
    if(date.charCodeAt(0) >= 65 && date.charCodeAt(0) <= 90)
        return date;
  // Remove time from both dates
  const stripTime = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const taskDate = stripTime(myDate);
  const currentDate = stripTime(today);

  const diffInDays = Math.round((taskDate - currentDate) / (1000 * 60 * 60 * 24));
    

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Tomorrow";

  const options = { weekday: 'short', month: 'long', day: 'numeric' };
  return taskDate.toLocaleDateString('en-US', options); // e.g. "Thu, July 25"
}

    return {detectItem,updateState,getDate}
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
    

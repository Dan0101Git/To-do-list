//each parent controls crud functionality of the child

import crudFunctionality from "./commonUtility";
import Task from "./tasks";
const myProject=function(data){
    let projectTitle=data.title;
    let id=crypto.randomUUID();
    let type="project";
    let nestedArray=[];//contsains all tasks here
   
    function getProject(){
        return {nestedArray,projectTitle,id,type}
    }
    function addChild(data){
       const task=new Task(data)
       crudFunctionality.createItem(nestedArray,task);
       return task;
    }
    function deleteChild(task){
        crudFunctionality.deleteItem(nestedArray,task)
    }
    function updateChild(child,newData){
        crudFunctionality.updateItem(child,newData);
    }
    return {addChild,deleteChild,getProject,nestedArray,updateChild}
}

export default myProject;

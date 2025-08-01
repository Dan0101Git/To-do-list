//each parent controls crud functionality of the child
import stateObject from "./projectState";
import crudFunctionality from "./commonUtility";
import Task from "./tasks";
class myProject{
    constructor(data){
            this.title=data.title;
            this.view=data.view;
            let elementId=stateObject.appState==="re-load"?data.id:crypto.randomUUID();
     this.id=elementId;
    this.type="project";
    this.nestedArray=[];//contsains all tasks here

    }

  addChild(data){
       const task=new Task(data)
       crudFunctionality.createItem(this.nestedArray,task);
       return task;
    }
  deleteChild(task){
        crudFunctionality.deleteItem(this.nestedArray,task)
    }
    updateChild(child,newData){
        crudFunctionality.updateItem(child,newData);
    }

}

export default myProject;

import crudFunctionality from "./commonUtility";
import helpers from "./helpers";
import stateObject from "./projectState";
class Task{
    constructor(data){
        this.title=data.title;
        this.description=data.description;
    
        this.date = helpers.getDate(data.date);
     
        this.priority=data.priority;
        this.taskCompletion=data.taskCompletion;
            let elementId=stateObject.appState==="re-load"?data.id:crypto.randomUUID();
     this.id=elementId;
        this.nestedArray=[];
        this.type="task"
    }

         addChild(data){
         const subTask= new SubTask(data);
       crudFunctionality.createItem(this.nestedArray,subTask);
       return subTask
    }
        updateChild(child,newData){
        crudFunctionality.updateItem(child,newData);
    }
        deleteChild(subTask){
        crudFunctionality.deleteItem(this.nestedArray,subTask)
    }
    toggleCompletion(){
        if(!this.taskCompletion ){
            this.taskCompletion=true;

            this.SubTasksCompletion();
        }
        else
        this.taskCompletion=false;
    }
    SubTasksCompletion(){
        this.nestedArray.forEach((subtask)=>{
            subtask.taskCompletion=true;
        })
    }
}
       function  SubTask(data){
                this.title=data.title;
                this.taskCompletion=false;
                this.id=crypto.randomUUID();
                this.type="subtask";
                this.toggleCompletion=function(){
                     this.taskCompletion=!this.taskCompletion;
                }
        };

export default Task;
import crudFunctionality from "./commonUtility";
class Task{
    constructor(data){
        this.title=data.title;
        this.description=data.description;
        this.dueTime=data.dueTime;
        this.priority=data.priority;
        this.taskCompletion=false;
        this.id=crypto.randomUUID();
        this.nestedArray=[];
        this.type="task"
    }


    
         addChild(data){
         const subTask= new SubTask(data);
       crudFunctionality.createItem(this.nestedArray,subTask);
       return subTask
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
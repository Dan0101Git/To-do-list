class Task{
    constructor(title,description,dueTime,priority){
        this.title=title;
        this.description=description;
        this.dueTime=dueTime;
        this.priority=priority;
        this.taskCompletion=false;
        this.id=crypto.randomUUID();
        this.taskArray=[];
    }
    createSubTasks(title){
       function  SubTasks(title){
                this.title=title;
                this.taskCompletion=false;
        };
        const subTask= Object.assign({},new SubTasks(title),{toggleCompletion:this.toggleCompletion});
      this.taskArray.push(subTask);
      return subTask;
    }
    deleteSubTasks(){

    }
    toggleCompletion(){
        if(!this.taskCompletion ){
            this.taskCompletion=true;
            if( this instanceof Task)
            this.SubTasksCompletion();
        }
        else
        this.taskCompletion=false;

    }
    SubTasksCompletion(){
        this.taskArray.forEach((subtask)=>{
            subtask.taskCompletion=true;
        })
    }
    get thisTaskArray(){
        return this.taskArray;
    }

}


export default Task;
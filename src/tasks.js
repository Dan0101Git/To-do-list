class Task{
    constructor(title,description,dueTime,priority){
        this.title=title;
        this.description=description;
        this.dueTime=dueTime;
        this.priority=priority;
        this.taskCompletion="";
        this.id=crypto.randomUUID();
    }
    toggleCompletion(){
        this.taskCompletion=this.taskCompletion?true:false;
    }

}

export default Task;
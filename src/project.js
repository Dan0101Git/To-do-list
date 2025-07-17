const myProject=function(title){
    let projectTitle=title;
    let projectId=crypto.randomUUID();
    let project=[];//contsains all tasks here
    function getProject(){
        return project;
    }
    function addTask(task){
        project.push(task);
    }
    function deleteTask(taskId){
        project=project.filter((existingTask)=>{return existingTask.id!==taskId})
    }
    return {addTask,deleteTask,getProject}
}

export default myProject;

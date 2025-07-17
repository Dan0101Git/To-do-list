const myProject=function(title){
    let projectTitle=title;
    let project=[];//contsains all tasks here
    function getProject(){
        return project;
    }
    function addTask(task){
        project.push(task);
    }
    function deleteTask(task){
        project=project.filter((existingTask)=>{existingTask.id!==task.id})
    }
    return {addTask,deleteTask,getProject}
}

export default myProject;

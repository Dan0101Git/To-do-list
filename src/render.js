//task 1 clean it
import renderHelpers from "./render-helpers";
const render=function(LibraryState){
  let taskDiv;
    if(LibraryState.state==="create" || LibraryState.state==="delete" || LibraryState.state==="edit" || LibraryState.state==="ui")
                 {renderHelpers.resetProjects();
                  displayCards();} 
   


    function displayCards(){

         if(document.querySelector(".starred-layout.view-tasks") )
            {renderHelpers.createCard("","starred"); 
                loopLibrary() //createcard should be a dumb funciton 
                }
     else{
        loopLibrary();
     }
    }
    function loopLibrary(){
  LibraryState.myLibrary.nestedArray.forEach((project)=>{
            renderHelpers.updateSidebarProjects(project);
            if(!document.querySelector(".starred-layout.view-tasks") && project.view==="true"){

                taskDiv= renderHelpers.createCard(project,project.title,LibraryState.state,LibraryState.id);
            }
    project.nestedArray.forEach((task)=>{
        if(task.priority==="true" && document.querySelector(".starred-layout.view-tasks"))
    {
        let taskListHtml=renderHelpers.addTasks(task);
       document.querySelector(".task-list").innerHTML+=taskListHtml;
      
    }
    else if(!document.querySelector(".starred-layout.view-tasks") && project.view==="true"){   
        // console.log(document.querySelector(".starred-layout.view-tasks"));
        let projectTaskListHtml=renderHelpers.addTasks(task,LibraryState.state,"")
    taskDiv.innerHTML+=projectTaskListHtml;}
 

    })
  })
    }

}


export default render;




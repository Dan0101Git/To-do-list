//task 1 clean it
import renderHelpers from "./render-helpers";
import uiState from "./uiState";
import getData from "./storage/getData";
const render=function(LibraryState){
  let taskDiv;
//console.log(getData.returnUpdatedData());
    if(LibraryState.state==="create-button" || LibraryState.state==="create" || LibraryState.state==="delete" || LibraryState.state==="edit" || LibraryState.state==="ui")
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
uiState.taskMode="read";

uiState.state="normal";
    }
    function loopLibrary(){
       
  LibraryState.myLibrary.nestedArray.forEach((project)=>{
 
       let tempCompletedList=[];
       let taskCounter=0;
           
            if(!document.querySelector(".starred-layout.view-tasks") && project.view==="true"){

                taskDiv= renderHelpers.createCard(project,project.title,LibraryState.state,LibraryState.id);
            }
            if(document.querySelector(".starred-layout.view-tasks"))
            {
                renderHelpers.makeCustomStarredModalDropDown(project.title,project.id);
            }
    renderHelpers.getReversedArray(project.nestedArray).forEach((task)=>{
        if(task.priority==="true" && document.querySelector(".starred-layout.view-tasks"))
    {
        let projectList=renderHelpers.addTasks(task);
       document.querySelector(".task-list").innerHTML+=projectList.taskListHtml;
      
    }
    else if(!document.querySelector(".starred-layout.view-tasks") && project.view==="true"){   
        let projectTaskListHtml=renderHelpers.addTasks(task,LibraryState.state,LibraryState.id);
if(projectTaskListHtml.completionClass!=="completed-list"){
    taskDiv.innerHTML+=projectTaskListHtml.taskListHtml;

}
    else{
             tempCompletedList.push(projectTaskListHtml.taskListHtml);
             taskCounter++;

    }
 
}


    })
    for(let i=0;i<tempCompletedList.length;i++)
    {
           if(tempCompletedList)
    taskDiv.innerHTML+=tempCompletedList[i];
    }
 renderHelpers.updateSidebarProjects(project,taskCounter);
  })
    }

}


export default render;




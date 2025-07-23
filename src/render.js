import domElements from "./domElements";
import addTask from "./images/icons/addTask.png"
import deleteBin from "./images/icons/delete.svg"
import circleList from "./images/icons/circle.svg"
import calanderImage from "./images/icons/calender.svg"
const render=function(LibraryState){
  
    if(LibraryState.state==="create" || LibraryState.state==="delete")
            displayCards();
   


    function displayCards(){
        renderHelpers.resetProjects();
        LibraryState.myLibrary.nestedArray.forEach((project)=>{
            renderHelpers.createCard(project)
        })
    }

}
const renderHelpers=(function(){
    function createCard(project){
        const kebabMenu=document.createElement("span");
        kebabMenu.classList.add("kebab");
        const card=document.createElement("div");
        const cardHeading=document.createElement("h1");
        const taskDiv=document.createElement("ul");
        const taskListButton=document.createElement("li");
        const cardActionMenuHtml=`                 <div class="project-menu">
                    <div data-set="${project.id}" class="project-options"><button class="edit project">
                        Rename Project
                    </button><button class="delete">Delete Project</button></div>
                 </div>`;
                 kebabMenu.innerHTML+=cardActionMenuHtml;
        taskListButton.classList.add("task-list-button");
        taskListButton.setAttribute("data-set",`${project.id}`);
        const taskImage=document.createElement("img");
        taskImage.setAttribute("src",addTask);
        taskListButton.appendChild(taskImage);
        taskDiv.appendChild(taskListButton);
        taskDiv.classList.add("task-list");

        const taskButton=document.createElement("button");
        taskButton.textContent="Add a New Task";
        taskButton.classList.add("addTaskButton")
        card.classList.add("project-card");

        cardHeading.textContent=project.title;
            taskListButton.appendChild(taskButton);
        card.appendChild(cardHeading);
        
        project.nestedArray.forEach((task)=>{addTasks(task,taskDiv)});
        card.appendChild(taskDiv);
        domElements.cardContainer.appendChild(card);
        card.appendChild(kebabMenu);
    
    }
    function addTasks(task,taskDiv){
            taskDiv.innerHTML+=`<li data-set="${task.id}" class="all-tasks on" id="final-task-read"><div  class="tasks-lists "><div><span class="toggle-completion"><img src="${circleList}"></span><span class="task-title">${task.title}</span></div><div class="task-buttons" ><button data-set="${task.id}" class="delete-task"><img class="delete" src="${deleteBin}"></button></div></div></li>`;
taskDiv.innerHTML+=`<li data-set="${task.id}" class="all-tasks" id="final-task-edit"><div  class="tasks-lists "><div><span class="toggle-completion"><img src="${circleList}"></span><input class="edit-task-title" value="${task.title}"></div></div><div class="edit-task"><form action="" class="edit-task-form">
<textarea placeholder="Details" name="Description" id="edit-task-descrip" cols="10" rows="5"></textarea>    
<div class="inputs"><button id="openDate"><img src="${calanderImage}"></button>
<input type="date" id="hiddenDate" style="display: none" />
</div>
</form></div></li>`;
    }
    function resetProjects(){
         Array.from(domElements.cardContainer.children).forEach((project)=>{project.remove();})
    }
    return{createCard,resetProjects}
})();

export default render;




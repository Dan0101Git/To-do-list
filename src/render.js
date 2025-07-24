import domElements from "./domElements";
import addTask from "./images/icons/addTask.png"
import deleteBin from "./images/icons/delete.svg"
import circleList from "./images/icons/circle.svg"
import calanderImage from "./images/icons/calender.svg"
import desciptionImage from "./images/icons/description.svg"
import starUnfilled from "./images/icons/star-unfilled.svg";
import arrowRight from "./images/icons/arrow-right.svg";
import starFilled from "./images/icons/star-filled.svg"
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
        const starImage=task.priority==="true"?starFilled:starUnfilled;
        const listClass=task.priority==="true"?"starred-list":null;
        let dateClassTheme;
        if(task.date==="Today")
            dateClassTheme="urgent";
        else if(task.date==="Tomorrow")
            dateClassTheme="mild-urgent";
        else
            dateClassTheme="not-urgent";
        
            taskDiv.innerHTML+=`<li data-set="${task.id}" data-title="${task.title}" data-descrip="${task.description}" data-date="${task.date}" data-starred="${task.priority}" class="all-tasks on ${listClass}" id="final-task-read"><div  class="tasks-lists "><div><span class="toggle-completion"><img src="${circleList}"></span><span class="task-title">${task.title}</span></div><div class="task-buttons" ><button data-set="${task.id}" class="expand-task"><img class="expand" src="${arrowRight}"></button><button data-set="${task.id}" class="star-task"><img class="star" src="${starImage}"></button><button data-set="${task.id}" class="delete-task"><img class="delete" src="${deleteBin}"></button></div>
            </div>   <button class="${dateClassTheme}" dataset="${task.id}" id="date-button">${task.date}</button></li>
            `;


            taskDiv.innerHTML+=`<li data-set="${task.id}" class="all-tasks" id="final-task-edit"><div  class="tasks-lists "><div data-set="${task.id}"><span class="toggle-completion"><img src="${circleList}"></span><input id="edit-input-task" class="edit-task-title" value="${task.title}"></div></div><div class="edit-task"><form action="" class="edit-task-form">
<div id="edit-details" data-set="${task.id}"><img src="${desciptionImage}"><textarea value="${task.description}" placeholder="Details" name="Description" id="edit-task-descrip" cols="10" rows="5">${task.description}</textarea>   </div>
 
<div class="inputs" data-set="${task.id}"><button value="Today" class="date-shortcut">Today</button><button value="Tomorrow" class="date-shortcut">Tomorrow</button><button id="openDate"><img data-set="${task.id}" class="date-shortcut" src="${calanderImage}"></button>
<input value="${task.date}" type="date" id="hiddenDate"  />
</div>
</form></div></li>`;
    }
    function resetProjects(){
         Array.from(domElements.cardContainer.children).forEach((project)=>{project.remove();})
    }
    return{createCard,resetProjects}
})();

export default render;




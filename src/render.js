import domElements from "./domElements";
import addTask from "./images/icons/addTask.png"
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
                    </button><button class="delete project">Delete Project</button></div>
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
            taskDiv.innerHTML+=`<li data-set="${task.id}" class="tasks-lists">${task.title}</li>`;
    }
    function resetProjects(){
         Array.from(domElements.cardContainer.children).forEach((project)=>{project.remove();})
    }
    return{createCard,resetProjects}
})();

export default render;




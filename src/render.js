import domElements from "./domElements";
import addTask from "./images/icons/addTask.png"
const render=function(LibraryState){
  
    if(LibraryState.state==="create")
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
 
        const card=document.createElement("div");
        const cardHeading=document.createElement("h1");
        const taskDiv=document.createElement("ul");
        const taskListButton=document.createElement("li");
        taskListButton.classList.add("task-list-button");
        taskListButton.setAttribute("data-set",`${project.id}`);
        const taskImage=document.createElement("img");
        taskImage.setAttribute("src",addTask);
        taskListButton.appendChild(taskImage);
    
        taskDiv.classList.add("task-list");

        const taskButton=document.createElement("button");
        taskButton.textContent="Add a New Task";
        taskButton.classList.add("addTaskButton")
        card.classList.add("project-card");

        cardHeading.textContent=project.title;
            taskListButton.appendChild(taskButton);
        card.appendChild(cardHeading);
        card.appendChild(taskListButton);
        domElements.cardContainer.appendChild(card);
    }
    function resetProjects(){
         Array.from(domElements.cardContainer.children).forEach((project)=>{project.remove();})
    }
    return{createCard,resetProjects}
})();

export default render;




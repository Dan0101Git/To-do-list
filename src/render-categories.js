import render from "./render";
import addTask from "./images/icons/addTask.png";
import domElements from "./domElements";
const renderUi=(function(){


    function createCard(){
              const taskDiv=document.createElement("ul");
                const card=document.createElement("div");
        const cardHeading=document.createElement("h1");
      
        const taskListButton=document.createElement("li");
 
        taskListButton.classList.add("task-list-button");
                const taskImage=document.createElement("img");
                taskImage.setAttribute("src",addTask);
                taskListButton.appendChild(taskImage);
                taskDiv.appendChild(taskListButton);
                taskDiv.classList.add("task-list");
        
                const taskButton=document.createElement("button");
                taskButton.textContent="Add a New Task";
                taskButton.classList.add("addTaskButton")
                card.classList.add("project-card");
        
                cardHeading.textContent="Starred";
                    taskListButton.appendChild(taskButton);
                card.appendChild(cardHeading);
                   card.appendChild(taskDiv);
                       domElements.cardContainer.appendChild(card);
console.log("hi");
    
    }
    function takeStarredTasks(taskListHtml){
        console.log(taskListHtml)
       document.querySelector(".task-list").innerHTML+=taskListHtml;
                
 
        
    }
    return {takeStarredTasks,createCard};
})();
export default renderUi;
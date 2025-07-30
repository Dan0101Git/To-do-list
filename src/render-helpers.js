import domElements from "./domElements";
import addTask from "./images/icons/addTask.png";
import deleteBin from "./images/icons/delete.svg";
import circleList from "./images/icons/circle.svg";
import calanderImage from "./images/icons/calender.svg";
import desciptionImage from "./images/icons/description.svg";
import starUnfilled from "./images/icons/star-unfilled.svg";
import arrowRight from "./images/icons/arrow-right.svg";
import starFilled from "./images/icons/star-filled.svg";
import tick from "./images/icons/tick.svg";
import check from "./images/icons/check.svg";
import checkBox from "./images/icons/checkBox.svg";
import lazy from "./images/icons/lazy-panda.png";
import renderTask from "./renderTask";

const renderHelpers = (function () {
  function createCard(project, title, state, elementId) {
    let taskCounter = 0;

    const card = document.createElement("div");
    const cardHeading = document.createElement("h1");
    const taskDiv = document.createElement("ul");
    const taskListButton = document.createElement("li");

    taskListButton.classList.add("task-list-button", "clickable");
    taskListButton.setAttribute("data-set", `${project.id}`);

    const taskImage = document.createElement("img");
    taskImage.setAttribute("src", addTask);
    taskListButton.appendChild(taskImage);

    taskDiv.appendChild(taskListButton);
    taskDiv.classList.add("task-list");

    const taskButton = document.createElement("button");
    taskButton.textContent = "Add a Task";
    taskButton.classList.add("addTaskButton");

    card.classList.add("project-card");

    if (document.querySelector(".starred-layout.view-tasks")) {
      card.classList.add("view-starred");
      taskListButton.classList.add("add-starred");
    } else {
      taskListButton.classList.add("normal");
    }

    cardHeading.textContent = title;
    taskListButton.appendChild(taskButton);
    card.appendChild(cardHeading);
    card.appendChild(taskDiv);
    domElements.cardContainer.appendChild(card);

    if (!document.querySelector(".starred-layout.view-tasks")) {
      if (projectEmpty(project.nestedArray)) {
        const projectImg = document.createElement("img");
        const projectSpan = document.createElement("span");
        projectSpan.classList.add("panda-spam");
        projectSpan.innerHTML = "<i>You’ve got a clean slate. Now’s your shot!</i>";
        projectImg.setAttribute("src", lazy);
        projectImg.classList.add("panda");
        taskDiv.appendChild(projectImg);
        taskDiv.appendChild(projectSpan);
      }

      if (project.nestedArray.length === 0 && state === "create") {
        card.classList.add("is-empty");
      }

      const kebabMenu = document.createElement("span");
      kebabMenu.setAttribute("data-set", project.id);
      kebabMenu.classList.add("kebab");

      const cardActionMenuHtml = `
        <div class="project-menu">
          <div data-set="${project.id}" class="project-options">
            <button class="edit project">Rename Project</button>
            <button class="delete">Delete Project</button>
          </div>
        </div>`;

      kebabMenu.innerHTML += cardActionMenuHtml;
      card.appendChild(kebabMenu);

      return taskDiv;
    } else {
      return;
    }
  }

  function checkLastElement() {
    if (taskCounter === project.nestedArray.length - 1 && elementId === task.id) {
      taskCounter = "yes";
    } else {
      taskCounter++;
    }
  }

  function addTasks(task, state, isLastTask) {
    // Function body omitted for brevity
    return renderTask.addTasks(task, state, isLastTask);
  }

  function updateSidebarProjects(project, counter) {
    const projectList = document.querySelector(".project-filter");
    const checkImage = project.view === "true" ? check : checkBox;
    const checkedStatus = project.view === "true" ? "true" : "false";

    projectList.innerHTML += `
      <div class="class-done">
        <div data-title="${project.title}" data-set="${project.id}" class="project ${project.title}">
          <button class="toggle-project-view ${checkedStatus}"><img src="${checkImage}"></button>
          <span class="project-title-checkbox">${project.title}</span>
        </div>
        <span id="completed-pending">${project.nestedArray.length - counter}</span>
      </div>`;
  }

  function resetProjects() {
    Array.from(document.querySelector(".navbar .project-filter").children).forEach((project) => project.remove());
    if (document.querySelector(".task-form .starred")) {
      document.querySelector(".task-form .starred").remove();
    }
    Array.from(document.querySelector(".projects").children).forEach((project) => project.remove());
  }

  function makeCustomStarredModalDropDown(projectTitle, projectId) {
    let value;
    if (document.querySelector(".task-form .starred")) {
      value = JSON.stringify({ title: projectTitle, id: projectId });
      document.querySelector(".drop.starred #projects-drop").innerHTML += `<option value='${value}'>${projectTitle}</option>`;
    } else {
      const dropDown = document.createElement("div");
      dropDown.classList.add("drop", "starred");

      const cardActionMenuHtml = `<select id="projects-drop">`;
      dropDown.innerHTML = cardActionMenuHtml;
      document.querySelector(".task-form").insertBefore(dropDown, document.querySelector(".task-form .buttons"));

      value = JSON.stringify({ title: projectTitle, id: projectId });
      document.querySelector(".drop.starred #projects-drop").innerHTML += `<option value='${value}'>${projectTitle}</option>`;
    }
  }

  function getReversedArray(normalArray) {
    const reversedArray = [];
    for (let i = normalArray.length - 1; i >= 0; i--) {
      reversedArray.push(normalArray[i]);
    }
    return reversedArray;
  }

  function projectEmpty(taskArray) {
    return taskArray.length === 0;
  }

  return {
    createCard,
    resetProjects,
    updateSidebarProjects,
    addTasks,
    makeCustomStarredModalDropDown,
    getReversedArray,
  };
})();

export default renderHelpers;

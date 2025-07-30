import uiState from "./uiState";
import domElements from "./domElements";
import domHelper from "./domhelper";
import { domCalls } from ".";
import confetti from "canvas-confetti";

const handlerHelpers = (function () {
  function isElementClicked(e, element) {
    return e.target.matches(element) || e.target.closest(element);
  }

  function isblurMenuOpened(selector) {
    return document.querySelector(selector);
  }

  function toggleMenuVisbility(otherSelector, className) {
    document.querySelector(otherSelector).classList.toggle(className);
  }

  function openAddProjectModal() {
    domElements.createProjectDialog.classList.add("enter-project");
    domElements.createProjectDialog.showModal();
    uiState.state = "modal-opened";
  }

  function handletaskEditable(e, editAreaTask, readAreaTask) {
    console.log(
      uiState.taskMode,
      isTaskEditbale(e.target.closest(".all-tasks")),
      e.target.tagName
    );

    if (
      uiState.taskMode === "write" &&
      readAreaTask &&
      editAreaTask &&
      getDataSetAttribute(readAreaTask) !== getDataSetAttribute(editAreaTask) &&
      isTaskEditbale(e.target.closest(".all-tasks"))
    ) {
      uiState.tempAttribute = readAreaTask.getAttribute("data-set");

      if (isTaskNew(editAreaTask) && domHelper.isElementEmpty()) {
        domCalls.deleteElement("", editAreaTask.getAttribute("data-set"));
        readAreaTask = document.querySelector(
          `#final-task-read[data-set="${uiState.tempAttribute}"]`
        );
        updateTaskMode("write", readAreaTask, readAreaTask.nextElementSibling);
        focusOnEditInput();
        return;
      }

      domCalls.editElement(
        [
          document.querySelector(".on input").value,
          document.querySelector(".on textarea").value,
          editAreaTask.previousElementSibling.getAttribute("data-date"),
          editAreaTask.previousElementSibling.getAttribute("data-starred"),
          false,
        ],
        "edit",
        editAreaTask.getAttribute("data-set")
      );
      readAreaTask = document.querySelector(
        `#final-task-read[data-set="${uiState.tempAttribute}"]`
      );
      setTimeout(() => {
        updateTaskMode("write", readAreaTask, readAreaTask.nextElementSibling);
        focusOnEditInput();
      }, 50);
    } else if (
      uiState.taskMode === "read" &&
      isTaskEditbale(e.target.closest(".all-tasks"))
    ) {
      updateTaskMode("write", readAreaTask, readAreaTask.nextElementSibling);
      focusOnEditInput();
    } else if (uiState.taskMode === "write" && !e.target.closest(".on")) {
      if (isTaskNew(editAreaTask) && domHelper.isElementEmpty()) {
        domCalls.deleteElement("", editAreaTask.getAttribute("data-set"));
        return;
      }
      domCalls.editElement(
        [
          document.querySelector(".on input").value,
          document.querySelector(".on textarea").value,
          editAreaTask.previousElementSibling.getAttribute("data-date"),
          editAreaTask.previousElementSibling.getAttribute("data-starred"),
          false,
        ],
        "edit",
        editAreaTask.getAttribute("data-set")
      );
      uiState.taskMode = "read";
    }
  }

  function getDataSetAttribute(element) {
    return element ? element.getAttribute("data-set") : false;
  }

  function isTaskEditbale(task) {
    return task ? !task.matches(".completed-list") : false;
  }

  function isTaskNew(task) {
    return task ? task.matches(".isNew") : false;
  }

  function updateTaskMode(mode, selector1, selector2) {
    uiState.taskMode = mode;
    toggleReadWriteTasks(selector1, selector2);
  }

  function toggleReadWriteTasks(selector1, selector2) {
    selector1.classList.toggle("on");
    selector2.classList.toggle("on");
  }

  function focusOnEditInput() {
    let titleInput = document.querySelector("#final-task-edit.on input[type='text']");
    titleInput.focus();
    titleInput.setSelectionRange(titleInput.value.length, titleInput.value.length);
  }

  function isClickedOutside(e, selector) {
    return !e.target.closest(selector);
  }

  function updateWriteTask(e) {
    const editAreaTask = document.querySelector("#final-task-edit.on");
    const readAreaTask = e.target.closest("#final-task-read");

    if (
      uiState.taskMode === "write" &&
      checkPresence(readAreaTask, editAreaTask) &&
      getDataSetAttribute(readAreaTask) !== getDataSetAttribute(editAreaTask)
    ) {
      uiState.tempAttribute = readAreaTask.getAttribute("data-set");

      if (isTaskNew(editAreaTask) && domHelper.isElementEmpty()) {
        setTimeout(() => {
          domCalls.deleteElement("", editAreaTask.getAttribute("data-set"));
        }, 1002);
        return;
      }

      const dataArray = [
        document.querySelector(".on input").value,
        document.querySelector(".on textarea").value,
        editAreaTask.previousElementSibling.getAttribute("data-date"),
        editAreaTask.previousElementSibling.getAttribute("data-starred"),
        false,
      ];
      setTimeout(() => {
        domCalls.editElement(dataArray, "edit", editAreaTask.getAttribute("data-set"));
      }, 1002);
    }
  }

  function checkPresence(readAreaTask, editAreaTask) {
    return readAreaTask && editAreaTask;
  }

  function renderOpenedElement() {
    const editAreaTask = document.querySelector("#final-task-edit.on");
    if (isTaskNew(editAreaTask) && domHelper.isElementEmpty()) {
      domCalls.deleteElement("", editAreaTask.getAttribute("data-set"));
      console.log(uiState.taskMode);
      return;
    }
    const dataArray = [
      document.querySelector(".on input").value,
      document.querySelector(".on textarea").value,
      editAreaTask.previousElementSibling.getAttribute("data-date"),
      editAreaTask.previousElementSibling.getAttribute("data-starred"),
      false,
    ];
    setTimeout(() => {
      domCalls.editElement(dataArray, "edit", editAreaTask.getAttribute("data-set"));
    }, 0);
  }

  function shootBlackFragments(event) {
    const rect = event.target.getBoundingClientRect();
    const origin = {
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
    };

    confetti({
      particleCount: 20,
      spread: 15,
      startVelocity: 20,
      origin: origin,
      colors: ["#000000"],
      shapes: ["circle"],
      scalar: 0.6,
      gravity: 1.4,
      drift: 0,
      ticks: 100,
    });
  }

  return {
    shootBlackFragments,
    renderOpenedElement,
    updateWriteTask,
    isClickedOutside,
    focusOnEditInput,
    getDataSetAttribute,
    isElementClicked,
    toggleMenuVisbility,
    openAddProjectModal,
    isblurMenuOpened,
    handletaskEditable,
    isTaskEditbale,
    updateTaskMode,
    isTaskNew,
  };
})();

export default handlerHelpers;

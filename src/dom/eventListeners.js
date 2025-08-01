import domElements from "./domElements";
import domHelper from "./domhelper";
import eventListeningHelpers from "./eventListeningFunctions";
import confetti from "canvas-confetti";

export default(function eventListeners(){
    document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{       document.body.addEventListener("click",eventListeningHelpers.buttonCreateProject);
    domElements.submitProjectTitle.addEventListener("submit",eventListeningHelpers.createProject);
    domElements.submitTask.addEventListener("submit",eventListeningHelpers.createProject);
    domElements.cardContainer.addEventListener("click",eventListeningHelpers.createProject);
    domElements.cardContainer.addEventListener("keyup",eventListeningHelpers.createProject);
        document.body.addEventListener("click",domHelper.changeUiState);},1000)
 
    
})

})();
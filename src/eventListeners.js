import domElements from "./domElements";
import eventListeningHelpers from "./eventListeningFunctions";

export default(function eventListeners(){
    document.addEventListener("DOMContentLoaded",()=>{

        document.body.addEventListener("click",eventListeningHelpers.buttonCreateProject);
    domElements.submitProjectTitle.addEventListener("submit",eventListeningHelpers.createProject);
    domElements.submitTask.addEventListener("submit",eventListeningHelpers.createProject);
    domElements.cardContainer.addEventListener("click",eventListeningHelpers.createProject);
    })

})();
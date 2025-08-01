import { domCalls } from "..";
import check from "../images/icons/check.svg";
import checkBoxImage from "../images/icons/checkBox.svg";

const domHelper=(function(){
   function getelementData(elementId){
    const elementList=document.querySelector(`li[data-set="${elementId}"]`);
    console.log(elementList)
    return [elementList.getAttribute("data-title"),elementList.getAttribute("data-descrip"),elementList.getAttribute("data-date"),elementList.getAttribute("data-starred"),elementList.getAttribute("completed")];
    }
    function isElementEmpty(element){
        if(document.querySelector(".on.isNew input").value===""&& document.querySelector(".on.isNew textarea").value==="" && document.querySelector(".on.isNew").previousElementSibling.getAttribute("data-date")==="Invalid Date")
            return true;
    }
    function changeUiState(e){
        if(e.target.matches(".my-tasks"))
        {
            document.querySelector(".my-tasks").classList.add("view-tasks")  ;  
            document.querySelector(".starred-layout").classList.remove("view-tasks")  ;      
            domCalls.uiState();
        
        }
     if(e.target.matches(".starred-layout"))
        {
            console.log("hey");
            document.querySelector(".starred-layout").classList.add("view-tasks")  ;   
                      document.querySelector(".my-tasks").classList.remove("view-tasks")  ;  
            domCalls.uiState();
        }

  if(e.target.closest(".toggle-project-view"))
    { 
        const checkBoxDiv=e.target.closest(".project");
        const viewClass=e.target.closest(".toggle-project-view.true")?"false":"true";
        console.log(checkBoxDiv);
        domCalls.editElement([`${checkBoxDiv.getAttribute("data-title")}`,"","","","",viewClass],"viewProject",`${checkBoxDiv.getAttribute("data-set")}`)

    }
        
        if(e.target.closest(".menu-image")){
            document.querySelector(".navbar").classList.toggle("viewNav");
        }
        if(e.target.closest(".close-modal")){
            e.preventDefault();
            e.target.closest("dialog").close();
        }
        }
    return {getelementData,changeUiState,isElementEmpty};
})();

export default domHelper
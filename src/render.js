
import renderUi from "./render-categories";
import renderHelpers from "./render-helpers";
const render=function(LibraryState){
  
    if(LibraryState.state==="create" || LibraryState.state==="delete" || LibraryState.state==="edit" || LibraryState.state==="ui")
            displayCards();
   


    function displayCards(){
        renderHelpers.resetProjects();
                 console.log(  document.querySelector(".projects .project-card"));

         if(document.querySelector(".starred-layout.view-tasks") )
            renderUi.createCard();
        LibraryState.myLibrary.nestedArray.forEach((project)=>{
            renderHelpers.updateSidebarProjects(project);
            renderHelpers.createCard(project,LibraryState.state,LibraryState.id)
        })
    }

}


export default render;




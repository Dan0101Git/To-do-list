import crudFunctionality from "./commonUtility";
import myProject from "./project";
const Library=(function(){
    let nestedArray=[];
   function addChild(data){
    const project=new myProject(data)
       crudFunctionality.createItem(nestedArray,project);
       return project
    }
        function updateChild(child,newData){
        crudFunctionality.updateItem(child,newData);
    }
    function deleteChild(project){
        crudFunctionality.deleteItem(nestedArray,project);
    }
    
    function getlibrary(){
        return {nestedArray};
    }
    return {addChild,getlibrary,deleteChild,updateChild,nestedArray};
})();
const stateObject={
myLibrary:Library,
state:"create",//create/create-button/edit/delete
appState:null,

}
export {Library};
export default stateObject
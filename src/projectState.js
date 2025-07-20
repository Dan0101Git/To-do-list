import crudFunctionality from "./commonUtility";
import myProject from "./project";
const Library=(function(){
    let nestedArray=[];
   function addChild(data){
    const project=myProject(data)
       crudFunctionality.createItem(nestedArray,project);
       return project
    }
    function deleteChild(project){
        crudFunctionality.deleteItem(nestedArray,project);
    }
    
    function getlibrary(){
        return {nestedArray};
    }
    return {addChild,getlibrary,deleteChild}
})();
const stateObject={
myLibrary:Library.getlibrary(),
state:"create",//create/edit/delete
}
export {Library};
export default stateObject
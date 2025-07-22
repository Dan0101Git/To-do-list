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
    return {addChild,getlibrary,deleteChild,updateChild}
})();
const stateObject={
myLibrary:Library.getlibrary(),
state:"create",//create/edit/delete
}
export {Library};
export default stateObject
const crudFunctionality=(function(){
    function createItem(parentArray,child){
        parentArray.push(child)
    }
    function readItem(){}
    function updateItem(child,newData){
        Object.assign(child,newData);
        console.log(newData,child);
        console.log(`${child.type} ${newData.title} has been updated`);
    }
    function deleteItem(parentArray,child){
          for(let i=0;i<parentArray.length;i++)
          {
    
            if(parentArray[i].id===child.id)
                parentArray.splice(i,1);
          }
          console.log(`${child.type} ${child.title} has been removed`)
    }
return {createItem,readItem,updateItem,deleteItem}
})();
export default crudFunctionality//a module to add all of item's functioaniltiy
